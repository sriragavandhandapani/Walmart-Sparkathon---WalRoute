
"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import type { Product, CartProduct } from '@/lib/types';
import { products as allProducts } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProductCard } from './product-card';
import { Search, Mic, Beef, Carrot, Snowflake, Cookie, Milk, CakeSlice, Home, CupSoda, Sprout, ToyBrick, Dumbbell, Car, HeartPulse, Bed, Wrench, SunSnow, PartyPopper, Paintbrush, Laptop, Gem, Footprints, Shirt, Baby, Sparkles, Utensils, Drama } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HorizontalScrollBeam } from './horizontal-scroll-beam';


interface SearchViewProps {
  cart: CartProduct[];
  onAddToCart: (product: Product) => void;
}

const orderedCategories = [
    'Fresh Produce',
    'Meat & Seafood',
    'Dairy & Deli',
    'Bakery',
    'Frozen Foods',
    'Pantry',
    'Snacks',
    'Beverages',
    'Household',
    'Health & Wellness',
    'Baby & Pet',
    'Apparel & Accessories',
    'Home & Garden',
    'Automotive',
    'Electronics & Crafts',
    'Toys & Hobbies',
    'Sporting Goods',
    'Seasonal & Party',
];

const categoryIcons: { [key: string]: React.ElementType } = {
    'Fresh Produce': Carrot,
    'Meat & Seafood': Beef,
    'Dairy & Deli': Milk,
    'Bakery': CakeSlice,
    'Frozen Foods': Snowflake,
    'Pantry': Utensils,
    'Snacks': Cookie,
    'Beverages': CupSoda,
    'Household': Home,
    'Health & Wellness': HeartPulse,
    'Baby & Pet': Baby,
    'Apparel & Accessories': Shirt,
    'Home & Garden': Sprout,
    'Automotive': Car,
    'Electronics & Crafts': Laptop,
    'Toys & Hobbies': ToyBrick,
    'Sporting Goods': Dumbbell,
    'Seasonal & Party': PartyPopper,
};


export function SearchView({ cart, onAddToCart }: SearchViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const filterScrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // SpeechRecognition is a browser-specific API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      toast({
        variant: "destructive",
        title: "Voice Search Error",
        description: `An error occurred: ${event.error}. Please try again.`,
      });
      setIsListening(false);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
    };
    
    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [toast]);

  const handleMicClick = () => {
    if (!recognitionRef.current) {
        toast({
            variant: "destructive",
            title: "Voice Search Not Supported",
            description: "Your browser does not support speech recognition.",
        });
        return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };
  
  const filteredProducts = useMemo(() => {
    let products = allProducts;
    if (selectedCategory) {
      products = products.filter(p => p.category === selectedCategory);
    }
    if (searchTerm) {
      products = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return products;
  }, [searchTerm, selectedCategory]);
  
  const productsByCategory = useMemo(() => {
    const categoriesToDisplay = selectedCategory ? [selectedCategory] : orderedCategories;
    
    const grouped = categoriesToDisplay.reduce((acc, category) => {
        const productsInCategory = filteredProducts.filter(p => p.category === category);
        if (productsInCategory.length > 0) {
            acc[category] = productsInCategory;
        }
        return acc;
    }, {} as Record<string, Product[]>);

    return grouped;

  }, [filteredProducts, selectedCategory]);

  const isProductInCart = (productId: number) => cart.some(p => p.id === productId);

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search or tap mic to speak..."
          className="pl-10 pr-14 h-12 text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
                "absolute right-1 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-in-out hover:bg-primary/10 active:scale-95", 
                isListening && "text-primary bg-primary/10 animate-pulse shadow-[0_0_12px_2px_hsl(var(--primary)/0.5)]"
            )} 
            onClick={handleMicClick}
        >
          <Mic className="h-6 w-6" />
          <span className="sr-only">Search by voice</span>
        </Button>
      </div>

      <div className="relative">
        <div ref={filterScrollRef} className="flex gap-2 -mx-4 px-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none]">
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <Button 
            variant={selectedCategory === null ? 'default' : 'outline'}
            className="rounded-full shrink-0"
            onClick={() => setSelectedCategory(null)}
            >
            All
            </Button>
            {orderedCategories.map((category) => {
              const Icon = categoryIcons[category] || Utensils;
              return (
                <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="rounded-full shrink-0"
                    onClick={() => setSelectedCategory(category)}
                >
                    <Icon className="mr-2" />
                    {category}
                </Button>
              )
            })}
        </div>
        <HorizontalScrollBeam scrollRef={filterScrollRef} />
      </div>


      <ScrollArea className="flex-1 -mx-4 px-4">
        <div className="pr-4 pb-24">
          {Object.keys(productsByCategory).length > 0 ? (
             <Accordion type="multiple" defaultValue={Object.keys(productsByCategory)} className="w-full space-y-4">
                {Object.entries(productsByCategory).map(([category, products]) => (
                  <AccordionItem value={category} key={category} className="border-none rounded-lg overflow-hidden glass-card">
                    <AccordionTrigger className="font-bold text-xl text-primary p-3 hover:no-underline hover:bg-white/5 data-[state=open]:bg-white/10">
                      <span className="pl-2">{category}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4 px-3 space-y-3">
                      {products.map(product => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={onAddToCart}
                          isInCart={isProductInCart(product.id)}
                        />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
          ) : (
             <p className="text-center text-muted-foreground pt-10">No products found.</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
