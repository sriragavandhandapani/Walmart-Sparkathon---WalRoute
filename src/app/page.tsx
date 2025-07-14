
"use client";

import { useState } from 'react';
import { Map, Search, Sparkles as SparklesIcon, Camera, LineChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';

import { MapView } from '@/components/walroute/map-view';
import { SearchView } from '@/components/walroute/search-view';
import { CartView } from '@/components/walroute/cart-view';
import { RecommendationsView } from '@/components/walroute/recommendations-view';
import { ARView } from '@/components/walroute/ar-view';
import { AnalyticsView } from '@/components/walroute/analytics-view';
import { ScrollProgressBeam } from '@/components/walroute/scroll-progress-beam';
import SparklesBackground from '@/components/walroute/sparkles-background';

import type { Product, CartProduct, Route } from '@/lib/types';

export default function Page() {
  const [activeTab, setActiveTab] = useState('search');
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [route, setRoute] = useState<Route | null>(null);
  const [isArNavEnabled, setIsArNavEnabled] = useState(false);
  const [walletBalance, setWalletBalance] = useState(258.46);
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    if (product.inventory === 'Out of Stock') {
      toast({
        variant: "destructive",
        title: "Out of Stock",
        description: `${product.name} is currently unavailable.`,
      });
      return;
    }
    
    const existingItem = cart.find(p => p.id === product.id);

    setCart(prevCart => {
      if (existingItem) {
        return prevCart.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    if (!existingItem) {
      toast({
        title: "Item Added",
        description: (
          <div className="flex items-center gap-3 pt-2">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={48}
              height={48}
              className="rounded-md border-2 border-border"
              data-ai-hint={`${product.category.toLowerCase()} ${product.name.split(' ').slice(0, 2).join(' ').toLowerCase()}`}
            />
            <div className="flex-1">
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-muted-foreground">${product.price.toFixed(2)} was added to your cart.</p>
            </div>
          </div>
        ),
      });
    }
  };

  const handleUpdateCartQuantity = (productId: number, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.id !== productId);
      }
      return prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(p => p.id !== productId));
  };
  
  const handleClearCart = () => {
    setCart([]);
    setRoute(null);
    setIsArNavEnabled(false);
  };

  const handleGenerateRoute = (newRoute: Route) => {
    setRoute(newRoute);
    setIsArNavEnabled(true);
  };
  
  const handleUpdateWallet = (amount: number) => {
    setWalletBalance(prev => prev + amount);
  }

  return (
    <>
      <ScrollProgressBeam />
      <SparklesBackground>
        <div className="min-h-screen text-foreground bg-transparent">
          <header className="py-4 border-b border-white/10 sticky top-0 z-10 glass-card">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-br from-primary to-primary-end text-transparent bg-clip-text">WalRoute</h1>
                <p className="text-muted-foreground mt-1">Your smart shopping companion</p>
            </div>
          </header>

          <main className="container mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              <div className="lg:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-5 bg-card/60 p-1.5 gap-2 rounded-xl mb-6 h-auto border-white/10">
                    <TabsTrigger value="search" className="h-12 flex-row gap-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
                      <Search className="h-5 w-5" />
                      Search
                    </TabsTrigger>
                    <TabsTrigger value="ar" className="h-12 flex-row gap-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
                      <Camera className="h-5 w-5" />
                      Scan
                    </TabsTrigger>
                    <TabsTrigger value="map" className="h-12 flex-row gap-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
                      <Map className="h-5 w-5" />
                      Map
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="h-12 flex-row gap-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
                      <LineChart className="h-5 w-5" />
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger value="recommendations" className="h-12 flex-row gap-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
                      <SparklesIcon className="h-5 w-5" />
                      For You
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="rounded-2xl glass-card min-h-[60vh] flex flex-col">
                    <TabsContent value="search" className="m-0 p-4 md:p-6 h-full flex flex-col flex-1">
                      <SearchView cart={cart} onAddToCart={handleAddToCart} />
                    </TabsContent>
                    <TabsContent value="ar" className="m-0 p-1 md:p-2 h-full flex flex-col flex-1">
                      <ARView route={route} onAddToCart={handleAddToCart} />
                    </TabsContent>
                    <TabsContent value="map" className="m-0 p-4 md:p-6 h-full flex flex-col flex-1">
                      <MapView route={route} />
                    </TabsContent>
                    <TabsContent value="analytics" className="m-0 p-4 md:p-6 h-full flex flex-col flex-1">
                      <AnalyticsView />
                    </TabsContent>
                    <TabsContent value="recommendations" className="m-0 p-4 md:p-6 h-full flex flex-col flex-1">
                      <RecommendationsView cart={cart} onAddToCart={handleAddToCart} />
                    </TabsContent>
                  </div>
                </Tabs>
              </div>

              <div className="lg:col-span-1 lg:sticky lg:top-24 h-[calc(100vh-112px)]">
                <CartView 
                  cart={cart}
                  onUpdateQuantity={handleUpdateCartQuantity}
                  onRemoveFromCart={handleRemoveFromCart}
                  onClearCart={handleClearCart}
                  onGenerateRoute={handleGenerateRoute} 
                  onTabChange={setActiveTab}
                  walletBalance={walletBalance}
                  onUpdateWallet={handleUpdateWallet}
                />
              </div>
            </div>
          </main>
        </div>
      </SparklesBackground>
    </>
  );
}
