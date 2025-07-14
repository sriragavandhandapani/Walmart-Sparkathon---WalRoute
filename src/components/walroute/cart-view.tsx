
"use client";

import { useState, useRef } from 'react';
import type { CartProduct, Route, Product, LayoutEdge } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { X, ShoppingBag, Route as RouteIcon, Loader2, Plus, Minus, CreditCard, Wallet, User } from 'lucide-react';
import { products as allProducts, storeLayout, categoryLocations } from '@/lib/data';
import { getOptimizedRoute } from '@/ai/flows/optimize-route-flow';
import { useToast } from "@/hooks/use-toast";
import { Badge } from '@/components/ui/badge';
import { aStar } from '@/lib/dijkstra';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AddFundsDialog } from './add-funds-dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PayPalIcon } from '@/components/ui/paypal-icon';

interface CartViewProps {
  cart: CartProduct[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onClearCart: () => void;
  onGenerateRoute: (route: Route) => void;
  onTabChange: (tab: string) => void;
  walletBalance: number;
  onUpdateWallet: (amount: number) => void;
}

export function CartView({ cart, onUpdateQuantity, onRemoveFromCart, onClearCart, onGenerateRoute, onTabChange, walletBalance, onUpdateWallet }: CartViewProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [paypalRecipient, setPaypalRecipient] = useState('');
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const calculateSegmentDistance = (points: {x: number, y: number}[]) => {
    let distance = 0;
    for (let i = 0; i < points.length - 1; i++) {
        distance += Math.sqrt(Math.pow(points[i+1].x - points[i].x, 2) + Math.pow(points[i+1].y - points[i].y, 2));
    }
    return distance / 10; // Scaling factor from pixels to meters
  };

  const handleGenerateRouteClick = async () => {
    if (cart.length === 0) return;
    setIsGenerating(true);

    try {
      const productInfo = cart.map(({ id, name, aisle }) => ({ id, name, aisle }));
      const result = await getOptimizedRoute({ products: productInfo, startPoint: 'Entrance' });
      
      const optimizedProductMap = new Map(allProducts.map(p => [p.name.toLowerCase(), p]));

      const sortedCart = result.optimized_list
        .map(name => {
            const product = optimizedProductMap.get(name.toLowerCase());
            return product ? cart.find(cartItem => cartItem.id === product.id) : undefined;
        })
        .filter((p): p is CartProduct => p !== undefined);
        
      const remainingItems = cart.filter(cartItem => !sortedCart.some(sortedItem => sortedItem.id === cartItem.id));
      const finalSortedCart = [...sortedCart, ...remainingItems];

      const nodeMap = new Map(storeLayout.nodes.map(node => [node.id, node]));
      const waypoints: string[] = ['entrance'];
      const visitedLocations = new Set<string>();

      finalSortedCart.forEach(item => {
        const locationId = categoryLocations[item.category];
        if (locationId && !visitedLocations.has(locationId) && nodeMap.has(locationId)) {
          waypoints.push(locationId);
          visitedLocations.add(locationId);
        }
      });
      
      let fullPathCoords: { x: number; y: number }[] = [];
      
      for (let i = 0; i < waypoints.length - 1; i++) {
        const startId = waypoints[i];
        const endId = waypoints[i+1];
        
        const pathNodeIds = aStar(storeLayout.nodes, storeLayout.edges as LayoutEdge[], startId, endId);
        const pathCoords = pathNodeIds.map(id => {
          const node = nodeMap.get(id)!;
          return { x: node.x, y: node.y };
        });

        if (fullPathCoords.length > 0) {
          fullPathCoords.push(...pathCoords.slice(1));
        } else {
          fullPathCoords.push(...pathCoords);
        }
      }

      const lastWaypoint = waypoints[waypoints.length - 1];
      const checkout1Path = aStar(storeLayout.nodes, storeLayout.edges as LayoutEdge[], lastWaypoint, 'checkout_1');
      const checkout2Path = aStar(storeLayout.nodes, storeLayout.edges as LayoutEdge[], lastWaypoint, 'checkout_2');

      const checkout1Distance = calculateSegmentDistance(checkout1Path.map(id => nodeMap.get(id)!));
      const checkout2Distance = calculateSegmentDistance(checkout2Path.map(id => nodeMap.get(id)!));
      
      const bestCheckoutPath = checkout1Distance < checkout2Distance ? checkout1Path : checkout2Path;

      const checkoutCoords = bestCheckoutPath.map(id => {
        const node = nodeMap.get(id)!;
        return { x: node.x, y: node.y };
      });
      fullPathCoords.push(...checkoutCoords.slice(1));


      const totalDistance = calculateSegmentDistance(fullPathCoords);
      
      onGenerateRoute({ path: fullPathCoords, totalDistance });
      onTabChange('map');

    } catch (error) {
      console.error("Failed to generate route:", error);
      toast({
        variant: "destructive",
        title: "Route Generation Failed",
        description: "Could not generate an optimized route. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleConfirmPurchase = () => {
    let finalPrice = totalPrice;

    if (paymentMethod === 'card') {
      const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
      if (!cardNumberRegex.test(cardNumber)) {
          toast({ variant: 'destructive', title: 'Invalid Card Number', description: 'Please use the format XXXX XXXX XXXX XXXX.' });
          return;
      }
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        toast({ variant: 'destructive', title: 'Invalid Expiry Date', description: 'Please use MM/YY format.' });
        return;
      }

      const [month, year] = expiry.split('/').map(num => parseInt(num, 10));
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      
      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        toast({ variant: 'destructive', title: 'Card Expired', description: 'This credit card has expired.' });
        return;
      }

      if (!cvc.trim() || !/^\d{3,4}$/.test(cvc)) {
        toast({ variant: 'destructive', title: 'Invalid CVC', description: 'Please enter a valid 3 or 4 digit CVC.' });
        return;
      }
    } else if (paymentMethod === 'paypal') {
        if (!paypalRecipient.trim()) {
            toast({ variant: 'destructive', title: 'Invalid Recipient', description: "PayPal recipient details cannot be empty."});
            return;
        }
    } else if (paymentMethod === 'walmart') {
      if (walletBalance < finalPrice) {
        toast({
          variant: "destructive",
          title: "Insufficient Funds",
          description: `Your wallet balance of $${walletBalance.toFixed(2)} is not enough to cover the $${finalPrice.toFixed(2)} purchase. Please add more funds.`,
        });
        return;
      }
    }

    // Apply a random discount
    const discountPercentage = Math.floor(Math.random() * 11) + 5; // 5% to 15%
    const discountAmount = finalPrice * (discountPercentage / 100);
    finalPrice -= discountAmount;

    toast({
        title: "🎉 Surprise Discount! 🎉",
        description: `You received a ${discountPercentage}% discount, saving you $${discountAmount.toFixed(2)}!`,
    });

    if (paymentMethod === 'walmart') {
        onUpdateWallet(-finalPrice);
    }
    
    setTimeout(() => {
        toast({
            title: "Purchase Successful!",
            description: `Thank you for your purchase of $${finalPrice.toFixed(2)}.`,
        });
    }, 1000);
    
    // Reset fields after successful purchase
    setCardNumber('');
    setExpiry('');
    setCvc('');
    setPaypalRecipient('');
    setShowPayment(false);
    onClearCart();
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Card className="glass-card h-full flex flex-col overflow-x-hidden">
      <CardHeader className="flex-col items-stretch gap-4 p-4">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <ShoppingBag />
            Your Cart
          </span>
          {cart.length > 0 && <Badge variant="secondary" className="flex items-center justify-center text-sm h-7 min-w-[28px] px-2">{totalItems}</Badge>}
        </CardTitle>
          <Collapsible open={showPayment} onOpenChange={setShowPayment}>
            <div className="flex items-stretch gap-2">
                <Button size="lg" className="flex-1 text-base py-5" onClick={handleGenerateRouteClick} disabled={isGenerating || cart.length === 0}>
                    {isGenerating ? ( <Loader2 className="mr-2 h-5 w-5 animate-spin" /> ) : ( <RouteIcon className="mr-2" /> )}
                    {isGenerating ? 'Optimizing...' : 'Route'}
                </Button>
                <CollapsibleTrigger asChild>
                    <Button size="lg" variant={showPayment ? "secondary" : "default"} className="flex-1 text-base py-5" disabled={isGenerating || cart.length === 0}>
                        <CreditCard className="mr-2" />
                        Buy Now
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-4 pt-4 animate-in fade-in-50">
                  <h4 className="font-semibold text-center">Select Payment Method</h4>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-3 gap-2">
                      <div>
                          <RadioGroupItem value="card" id="card" className="peer sr-only" />
                          <Label htmlFor="card" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                              <CreditCard className="mb-3 h-6 w-6" />
                              Card
                          </Label>
                      </div>
                      <div>
                          <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                          <Label htmlFor="paypal" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                              <PayPalIcon className="mb-3 h-6 w-6" />
                              PayPal
                          </Label>
                      </div>
                      <div>
                          <RadioGroupItem value="walmart" id="walmart" className="peer sr-only" />
                          <Label htmlFor="walmart" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                              <Wallet className="mb-3 h-6 w-6" />
                              Wallet
                          </Label>
                      </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                  <div className="space-y-4 pt-4 animate-in fade-in-20">
                      <div className="space-y-2">
                          <Label htmlFor="card-number-cart">Card Number</Label>
                          <Input id="card-number-cart" placeholder="1111 1111 1111 1111" value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                              <Label htmlFor="expiry-cart">Expiry</Label>
                              <Input id="expiry-cart" placeholder="MM/YY" value={expiry} onChange={e => setExpiry(e.target.value)} />
                          </div>
                          <div className="space-y-2">
                              <Label htmlFor="cvc-cart">CVC</Label>
                              <Input id="cvc-cart" placeholder="123" value={cvc} onChange={e => setCvc(e.target.value)} />
                          </div>
                      </div>
                      <Button size="lg" className="w-full text-lg py-6" onClick={handleConfirmPurchase}>
                          Confirm Purchase
                      </Button>
                  </div>
                  )}
                  {paymentMethod === 'paypal' && (
                  <div className="space-y-4 pt-4 animate-in fade-in-20">
                      <div className="space-y-2">
                          <Label htmlFor="paypal-recipient">Recipient</Label>
                           <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input id="paypal-recipient" placeholder="Username, email, or mobile" className="pl-10" value={paypalRecipient} onChange={e => setPaypalRecipient(e.target.value)}/>
                          </div>
                      </div>
                      <Button size="lg" className="w-full text-lg py-6" onClick={handleConfirmPurchase}>
                         <PayPalIcon className="mr-2"/> Pay ${totalPrice.toFixed(2)} with PayPal
                      </Button>
                  </div>
                  )}
                  {paymentMethod === 'walmart' && (
                  <div className="space-y-4 pt-4 animate-in fade-in-20">
                      <div className="rounded-lg border bg-background/50 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                          <Wallet className="h-8 w-8 text-primary" />
                          <div>
                          <p className="text-muted-foreground text-sm">Wallet Balance</p>
                          <p className="font-bold text-xl">${walletBalance.toFixed(2)}</p>
                          </div>
                      </div>
                      <AddFundsDialog onUpdateWallet={onUpdateWallet} />
                      </div>
                      <Button size="lg" className="w-full text-lg py-6" onClick={handleConfirmPurchase} disabled={walletBalance < totalPrice}>
                          <Wallet className="mr-2" /> Pay ${totalPrice.toFixed(2)} with Wallet
                      </Button>
                  </div>
                  )}
              </CollapsibleContent>
          </Collapsible>
        <div className="flex justify-between items-center text-lg font-bold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 relative">
        <ScrollArea className="absolute inset-0">
            <div className="space-y-2 p-4 pt-0">
                {cart.length === 0 ? (
                <div className="text-center text-muted-foreground pt-10 flex flex-col items-center gap-6 h-full justify-center">
                    <p>Your cart is empty.</p>
                    <div className="relative w-32 h-32 flex items-center justify-center animate-float">
                    <div className="absolute inset-0">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
                            <defs>
                            <linearGradient id="cartMetal" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--muted-foreground) / 0.8)" />
                                <stop offset="50%" stopColor="hsl(var(--muted-foreground) / 0.5)" />
                                <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.8)" />
                            </linearGradient>
                            <linearGradient id="handleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--primary))" />
                                <stop offset="100%" stopColor="hsl(var(--primary-end))" />
                            </linearGradient>
                            <filter id="cartGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            </defs>
                            <g filter="url(#cartGlow)">
                            <path d="M 50 150 L 60 165 H 140 L 150 150 H 50 Z" fill="url(#cartMetal)" />
                            <path d="M 60 165 L 65 175 H 75 L 70 165 H 60 Z" fill="url(#cartMetal)" />
                            <path d="M 130 165 L 135 175 H 145 L 140 165 H 130 Z" fill="url(#cartMetal)" />
                            <circle cx="70" cy="180" r="8" fill="black" />
                            <circle cx="140" cy="180" r="8" fill="black" />
                            <circle cx="70" cy="180" r="4" fill="hsl(var(--muted-foreground) / 0.8)" />
                            <circle cx="140" cy="180" r="4" fill="hsl(var(--muted-foreground) / 0.8)" />

                            <path d="M 40 80 L 50 150 H 150 L 160 80 H 40 Z" fill="none" stroke="url(#cartMetal)" strokeWidth="4" />
                            <line x1="60" y1="80" x2="70" y2="150" stroke="url(#cartMetal)" strokeWidth="3" />
                            <line x1="80" y1="80" x2="90" y2="150" stroke="url(#cartMetal)" strokeWidth="3" />
                            <line x1="100" y1="80" x2="110" y2="150" stroke="url(#cartMetal)" strokeWidth="3" />
                            <line x1="120" y1="80" x2="130" y2="150" stroke="url(#cartMetal)" strokeWidth="3" />
                            <line x1="140" y1="80" x2="150" y2="150" stroke="url(#cartMetal)" strokeWidth="3" />
                            <line x1="45" y1="100" x2="155" y2="100" stroke="url(#cartMetal)" strokeWidth="3" />
                            <line x1="48" y1="125" x2="152" y2="125" stroke="url(#cartMetal)" strokeWidth="3" />
                            
                            <path d="M 40 80 Q 20 60 40 40" fill="none" stroke="url(#cartMetal)" strokeWidth="4" />
                            <rect x="35" y="30" width="100" height="15" rx="5" fill="url(#handleGradient)" />
                            </g>
                        </svg>
                    </div>
                    </div>
                </div>
                ) : (
                cart.map(item => (
                    <div key={item.id} className="flex items-center gap-2 bg-background/50 p-2 rounded-lg">
                    <Image src={item.imageUrl} alt={item.name} width={40} height={40} className="rounded-md" data-ai-hint={`${item.category.toLowerCase()} ${item.name.split(' ').slice(0, 2).join(' ').toLowerCase()}`} />
                    <div className="flex-1 min-w-0">
                        <p className="font-medium leading-tight truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="w-4 h-4" />
                        </Button>
                        <span className="font-bold w-6 text-center">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive h-7 w-7" onClick={() => onRemoveFromCart(item.id)}>
                        <X className="w-5 h-5" />
                    </Button>
                    </div>
                ))
                )}
                </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
