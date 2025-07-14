"use client";

import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlusCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
}

const inventoryStyles = {
  'In Stock': 'text-green-400',
  'Low Stock': 'text-yellow-400',
  'Out of Stock': 'text-red-400',
};

export function ProductCard({ product, onAddToCart, isInCart }: ProductCardProps) {
  return (
    <Card className="glass-card overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-primary/20">
      <CardContent className="p-3">
        <div className="flex gap-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={80}
            height={80}
            className="rounded-md object-cover border border-white/10"
            data-ai-hint={`${product.category.toLowerCase()} ${product.name.split(' ')[1]?.toLowerCase() || ''}`}
          />
          <div className="flex-1 space-y-1">
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-semibold leading-snug">{product.name}</h3>
              <Badge variant="outline" className="whitespace-nowrap border-white/20 bg-black/20">Aisle {product.aisle}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <div className="flex items-baseline justify-between">
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              <p className={cn("text-xs font-semibold", inventoryStyles[product.inventory])}>{product.inventory}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Button 
              size="icon" 
              variant="ghost"
              onClick={() => onAddToCart(product)}
              disabled={product.inventory === 'Out of Stock'}
              aria-label={isInCart ? `Add one more ${product.name} to cart` : `Add ${product.name} to cart`}
              className="rounded-full h-10 w-10"
            >
              {isInCart ? <CheckCircle className="text-primary" /> : <PlusCircle className="text-primary/80 hover:text-primary" />}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
