
"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Product, Route } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CameraOff, ArrowUp, ScanLine, X, Loader2, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { scanItem, type ScanItemOutput } from '@/ai/flows/scan-item-flow';
import { products as allProducts } from '@/lib/data';

interface ARViewProps {
  route: Route | null;
  onAddToCart: (product: Product) => void;
}

export function ARView({ route, onAddToCart }: ARViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] =useState(false);
  const [scanResult, setScanResult] = useState<(ScanItemOutput & { product?: Product }) | null>(null);
  const { toast } = useToast();

  const getCameraPermission = useCallback(async () => {
    if (hasCameraPermission) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setHasCameraPermission(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasCameraPermission(false);
      toast({
        variant: 'destructive',
        title: 'Camera Access Denied',
        description: 'Please enable camera permissions in your browser settings to use AR mode.',
      });
    }
  }, [hasCameraPermission, toast]);

  useEffect(() => {
    getCameraPermission();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [getCameraPermission]);

  const getDirectionalInfo = () => {
    if (!route || route.path.length < 2) {
      return {
        arrow: null,
        text: "Scan Here"
      };
    }
    
    // In a real app with IPS, this would be dynamic.
    // e.g., "Turn Left towards Aisle 5"
    return {
      arrow: <ArrowUp className="w-24 h-24 text-primary animate-pulse drop-shadow-[0_0_15px_hsl(var(--primary)/0.8)]" />,
      text: "Proceed to next checkpoint"
    };
  };

  const handleScanItem = useCallback(async () => {
    if (!videoRef.current) {
      toast({ variant: 'destructive', title: 'Camera not ready' });
      return;
    }
    setIsScanning(true);
    setScanResult(null);

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      toast({ variant: 'destructive', title: 'Failed to capture image' });
      setIsScanning(false);
      return;
    }
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const photoDataUri = canvas.toDataURL('image/jpeg');

    try {
      const result = await scanItem({ photoDataUri });
      
      let productToAdd: Product | undefined = allProducts.find(p => p.name.toLowerCase() === result.productName.toLowerCase());
      
      if (!productToAdd) {
        // If product is not in our catalog, create a temporary one from the AI's response
        productToAdd = {
          id: Date.now(), // Use a temporary unique ID
          name: result.productName,
          category: result.category,
          aisle: 0, // Aisle is unknown
          price: result.price,
          inventory: 'In Stock', // Assume in stock for scanned items
          imageUrl: 'https://placehold.co/80x80.png',
          coords: { x: 0, y: 0 },
        };
      }

      setScanResult({ ...result, product: productToAdd });
      onAddToCart(productToAdd);
      setTimeout(() => setScanResult(null), 3000); // Hide card after a delay

    } catch (error) {
      console.error('Scan failed:', error);
      toast({ variant: 'destructive', title: 'Scan Failed', description: 'Could not identify the item. Please try again.' });
    } finally {
      setIsScanning(false);
    }
  }, [toast, onAddToCart]);

  const directionalInfo = getDirectionalInfo();

  return (
    <div className="relative w-full h-full min-h-[60vh] overflow-hidden rounded-xl flex items-center justify-center bg-black">
      <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted playsInline />
      
      {hasCameraPermission === false && (
        <div className="z-10 flex flex-col items-center text-center gap-4 text-white p-4 bg-black/50 rounded-lg">
          <CameraOff className="w-16 h-16" />
          <Alert variant="destructive">
            <AlertTitle>Camera Access Required</AlertTitle>
            <AlertDescription>
              Please allow camera access to use this feature. You may need to change permissions in your browser settings.
            </AlertDescription>
          </Alert>
          <Button onClick={getCameraPermission}>Retry Camera Access</Button>
        </div>
      )}

      {hasCameraPermission && (
        <>
          {/* Scan Result Card */}
          <div className="absolute top-4 left-4 right-4 z-20">
            {scanResult && (
              <Card className="glass-card animate-in fade-in-50">
                <CardHeader className="p-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    Item Identified
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setScanResult(null)}><X className="h-4 w-4"/></Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  {scanResult.product ? (
                    <div className="flex items-center gap-3">
                      <Image src={scanResult.product.imageUrl} alt={scanResult.product.name} width={64} height={64} className="rounded-md" data-ai-hint={`${scanResult.product.category.toLowerCase()} ${scanResult.product.name.toLowerCase()}`} />
                      <div className="flex-1">
                        <p className="font-bold">{scanResult.product.name}</p>
                        <p className="font-semibold text-primary text-lg">${scanResult.product.price.toFixed(2)}</p>
                        <p className="text-xs text-green-400 font-semibold">Added to cart!</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">{scanResult.productName || "Could not identify a specific product from our catalog."}</p>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="z-10 flex flex-col items-center justify-between w-full h-full p-4">
            {/* Top Navigation Info */}
            <div className="text-center text-white p-3 bg-black/60 rounded-lg drop-shadow-lg">
              {directionalInfo.arrow}
              <p className="font-bold text-lg mt-2">{directionalInfo.text}</p>
            </div>

            {/* Bottom Scan Button */}
            <Button size="lg" className="w-48 h-16 text-xl" onClick={handleScanItem} disabled={isScanning}>
              {isScanning ? (
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              ) : (
                <ScanLine className="mr-3 h-7 w-7" />
              )}
              {isScanning ? 'Scanning...' : 'Scan Item'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
