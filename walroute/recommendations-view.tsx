"use client";

import { useState, useEffect, useRef } from 'react';
import type { Product, CartProduct } from '@/lib/types';
import { getRecipeSuggestion, type RecipeSuggestionOutput } from '@/ai/flows/recipe-suggestion-flow';
import { getUpsellRecommendations } from '@/ai/flows/upsell-recommendations';
import { getProductTips } from '@/ai/flows/product-tips-flow';
import { products as allProducts } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductCard } from './product-card';
import { Sparkles, Bot, ChefHat, Check, Plus, Loader2, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface RecommendationsViewProps {
  cart: CartProduct[];
  onAddToCart: (product: Product) => void;
}

const findProduct = (name: string): Product | undefined => {
  const normalizedName = name.toLowerCase().replace(/s$/, '').replace(/es$/, '');
  return allProducts.find(p => p.name.toLowerCase().includes(normalizedName));
};

export function RecommendationsView({ cart, onAddToCart }: RecommendationsViewProps) {
  const [recipe, setRecipe] = useState<RecipeSuggestionOutput | null>(null);
  const [isRecipeLoading, setIsRecipeLoading] = useState(false);
  const [recipeError, setRecipeError] = useState<string | null>(null);

  const [recommendations, setRecommendations] = useState<{ product: Product, reason: string }[]>([]);
  const [isRecommendationsLoading, setIsRecommendationsLoading] = useState(false);

  const [tips, setTips] = useState(new Map<string, string[]>());
  const loadingTipsRef = useRef(new Set<string>());

  useEffect(() => {
    const cartItems = cart.map(item => item.name);
    const cartItemSet = new Set(cartItems);

    if (cart.length > 2) {
      setIsRecipeLoading(true);
      setRecipeError(null);
      setRecipe(null);
      getRecipeSuggestion({ cartItems })
        .then(setRecipe)
        .catch(e => {
          console.error("Failed to get recipe suggestion:", e);
          setRecipeError("Could not cook up a recipe right now. Please try again later.");
        })
        .finally(() => setIsRecipeLoading(false));
    } else {
      setRecipe(null);
      setRecipeError(null);
      setIsRecipeLoading(false);
    }

    if (cart.length > 0) {
      setIsRecommendationsLoading(true);
      getUpsellRecommendations({ cartItems, navigationHistory: [] })
        .then(result => {
          const recommendedProducts = result.recommendations
            .map(rec => {
              const product = findProduct(rec.productName);
              return product ? { product, reason: rec.reason } : null;
            })
            .filter((p): p is { product: Product, reason: string } => p !== null && !cart.some(cartItem => cartItem.id === p.product.id));
          setRecommendations(recommendedProducts);
        })
        .catch(e => {
          console.error("Failed to get recommendations:", e);
        })
        .finally(() => setIsRecommendationsLoading(false));
      
      cart.forEach(item => {
        if (!tips.has(item.name) && !loadingTipsRef.current.has(item.name)) {
            loadingTipsRef.current.add(item.name);
            getProductTips({ productName: item.name })
                .then(result => {
                    if (result.tips && result.tips.length > 0) {
                        setTips(prev => new Map(prev).set(item.name, result.tips));
                    }
                })
                .catch(e => console.error(`Failed to get tips for ${item.name}:`, e))
                .finally(() => {
                    loadingTipsRef.current.delete(item.name);
                });
        }
      });
    } else {
      setRecommendations([]);
      setTips(new Map());
    }
    
    if (tips.size > cart.length) {
        setTips(prevTips => {
            const newTips = new Map(prevTips);
            for (const productName of newTips.keys()) {
                if (!cartItemSet.has(productName)) {
                    newTips.delete(productName);
                }
            }
            return newTips;
        });
    }
  }, [cart]);

  const isProductInCart = (productName: string) => {
    const product = findProduct(productName);
    return product ? cart.some(p => p.id === product.id) : false;
  };
  
  const handleAddIngredient = (productName: string) => {
    const product = findProduct(productName);
    if (product) {
      onAddToCart(product);
    }
  };

  const addAllMissingIngredients = () => {
    if (!recipe) return;
    recipe.ingredients.forEach(ingredientName => {
      if (!isProductInCart(ingredientName)) {
        const product = findProduct(ingredientName);
        if (product && product.inventory !== 'Out of Stock') {
          onAddToCart(product);
        }
      }
    });
  };

  const missingIngredientsCount = recipe?.ingredients.filter(ing => !isProductInCart(ing) && findProduct(ing) && findProduct(ing)?.inventory !== 'Out of Stock').length || 0;

  const renderRecipeSuggestion = () => {
    if (isRecipeLoading) {
      return (
        <Card className="glass-card">
          <CardHeader>
            <Skeleton className="h-8 w-3/5" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="w-full aspect-square rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
        </Card>
      );
    }

    if (recipeError) {
      return (
        <Alert variant="destructive">
          <AlertTitle>Chef's Apologies!</AlertTitle>
          <AlertDescription>{recipeError}</AlertDescription>
        </Alert>
      );
    }

    if (!recipe) {
      return (
        <div className="text-center text-muted-foreground py-10 flex flex-col items-center justify-center">
          <ChefHat className="mx-auto h-12 w-12 mb-4 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Discover Your Next Meal!</h3>
          <p>Add a few more items to your cart,</p>
          <p>and our AI chef will whip up a custom recipe just for you.</p>
        </div>
      );
    }

    return (
      <Card className="glass-card overflow-hidden animate-in fade-in-50">
        <CardHeader className="p-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <ChefHat className="text-primary"/>
            <span>Chef's Suggestion</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 pt-0">
            <div className="lg:col-span-2 space-y-4">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-border bg-muted">
                {recipe.imageUrl ? (
                  <Image src={recipe.imageUrl} alt={recipe.recipeName} fill style={{objectFit: 'cover'}} data-ai-hint="recipe food" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-bold text-2xl text-primary">{recipe.recipeName}</h3>
              <p className="text-muted-foreground italic text-sm">{recipe.description}</p>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Ingredients</h4>
                <ul className="space-y-2 text-sm max-h-40 overflow-y-auto pr-2">
                  {recipe.ingredients.map(ingredient => (
                    <li key={ingredient} className="flex items-center justify-between gap-2">
                      <span className={`flex items-center gap-2 ${isProductInCart(ingredient) ? "line-through text-muted-foreground" : ""}`}>
                        <Check className={`h-4 w-4 text-primary transition-opacity ${isProductInCart(ingredient) ? 'opacity-100' : 'opacity-0'}`} />
                        {ingredient}
                      </span>
                      {!isProductInCart(ingredient) && findProduct(ingredient) && (
                        <Button size="xs" variant="outline" onClick={() => handleAddIngredient(ingredient)} disabled={findProduct(ingredient)?.inventory === 'Out of Stock'}>
                          <Plus className="mr-1 h-3 w-3"/> Add
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
                {missingIngredientsCount > 0 && 
                  <Button onClick={addAllMissingIngredients} className="w-full mt-3">
                    <Plus className="mr-2 h-4 w-4" /> Add all {missingIngredientsCount} missing items
                  </Button>
                }
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
             <h4 className="font-semibold text-lg mb-2">Instructions</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                {recipe.instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderUpsellRecommendations = () => {
    if (recommendations.length === 0 && !isRecommendationsLoading) return null;
    
    return (
       <>
          <Separator className="my-6" />
          <div className="space-y-4">
              <h3 className="font-semibold text-xl flex items-center gap-2 px-1"><Sparkles className="text-primary"/> You Might Also Need</h3>
              {isRecommendationsLoading ? (
                 Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-[98px] w-full rounded-lg" />
                      <Skeleton className="h-4 w-5/6 rounded-lg ml-2" />
                    </div>
                  ))
              ) : (
                recommendations.map(({ product, reason }) => (
                    <div key={product.id} className="space-y-1 animate-in fade-in-50">
                        <ProductCard
                            product={product}
                            onAddToCart={onAddToCart}
                            isInCart={cart.some(p => p.id === product.id)}
                        />
                        <div className="flex items-center gap-2 text-xs text-muted-foreground px-2">
                            <Bot className="w-3.5 h-3.5" />
                            <p className="italic">{reason}</p>
                        </div>
                    </div>
                ))
              )}
          </div>
       </>
    )
  }

  const renderProductTips = () => {
    const cartProductsWithTips = cart.filter(p => tips.has(p.name));
    if (cartProductsWithTips.length === 0) return null;

    return (
      <>
        <Separator className="my-6" />
        <div className="space-y-4 animate-in fade-in-50">
          <h3 className="font-semibold text-xl flex items-center gap-2 px-1">
            <Lightbulb className="text-primary"/> Pro Tips
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {cartProductsWithTips.map(({ name }) => (
              <AccordionItem value={name} key={name}>
                <AccordionTrigger>{name}</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 pl-2 text-sm text-muted-foreground">
                    {tips.get(name)?.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </>
    );
  };

  return (
    <ScrollArea className="h-full">
      <div className="pr-4 pb-4">
        {renderRecipeSuggestion()}
        {renderUpsellRecommendations()}
        {renderProductTips()}
      </div>
    </ScrollArea>
  );
}
