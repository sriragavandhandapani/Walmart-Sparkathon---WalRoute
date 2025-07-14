"use client";

import { useState, useRef, useEffect } from 'react';
import type { Route } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, PlayCircle, User } from 'lucide-react';
import { storeLayout } from '@/lib/data';

interface MapViewProps {
  route: Route | null;
}

export function MapView({ route }: MapViewProps) {
  const [isSimulating, setIsSimulating] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGGElement>(null);
  const animationFrameRef = useRef<number>();

  const drawPath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return '';
    const firstPoint = points[0];
    const path = points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');
    return `M ${firstPoint.x} ${firstPoint.y} ${path}`;
  };

  const nodeMap = new Map(storeLayout.nodes.map(node => [node.id, node]));

  useEffect(() => {
    if (isSimulating) {
      const path = pathRef.current;
      const marker = markerRef.current;
      if (!path || !marker) return;

      const pathLength = path.getTotalLength();
      const duration = route!.totalDistance * 100; // Adjust speed based on distance
      let startTime: number | null = null;
      
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;
      marker.style.display = 'block';

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const currentLength = pathLength * progress;
        path.style.strokeDashoffset = `${pathLength - currentLength}`;
        
        const point = path.getPointAtLength(currentLength);
        marker.setAttribute('transform', `translate(${point.x}, ${point.y})`);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setIsSimulating(false);
        }
      };
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      // Reset path and hide marker when not simulating or simulation ends
      if (pathRef.current) {
        pathRef.current.style.strokeDasharray = 'none';
        pathRef.current.style.strokeDashoffset = '0';
      }
      if (markerRef.current) {
        // Place marker at the start of the path if route exists
        if(route && route.path.length > 0) {
           const startPoint = route.path[0];
           markerRef.current.setAttribute('transform', `translate(${startPoint.x}, ${startPoint.y})`);
           markerRef.current.style.display = 'block';
        } else {
           markerRef.current.style.display = 'none';
        }
      }
    }

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isSimulating, route]);

  const handleSimulateClick = () => {
    if (!isSimulating) {
      setIsSimulating(true);
    }
  };

  return (
    <Card className="bg-transparent border-none shadow-none h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin />
          Store Map
        </CardTitle>
      </CardHeader>
      <CardContent className="relative flex-1 flex flex-col items-stretch justify-center">
        <div className="w-full flex-1 flex flex-col justify-center items-center text-center p-4 rounded-lg bg-muted/20 border border-border">
          
          <div className="relative flex-1 w-full min-h-[40vh]">
            <svg 
                className="w-full h-full" 
                viewBox="0 0 1200 750"
                preserveAspectRatio="xMidYMid meet"
            >
              <g id="store-layout">
                {/* Edges */}
                {storeLayout.edges.map(([startId, endId], index) => {
                  const startNode = nodeMap.get(startId);
                  const endNode = nodeMap.get(endId);
                  if (!startNode || !endNode) return null;
                  return (
                    <line
                      key={index}
                      x1={startNode.x}
                      y1={startNode.y}
                      x2={endNode.x}
                      y2={endNode.y}
                      stroke="hsl(var(--border))"
                      strokeWidth="5"
                    />
                  );
                })}
                {/* Nodes */}
                {storeLayout.nodes.map(node => (
                  <g key={node.id}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.radius}
                      fill={node.color}
                      stroke="hsl(var(--card))"
                      strokeWidth="2"
                    />
                     {node.label && <text
                        x={node.x}
                        y={node.y + node.radius + 18}
                        textAnchor="middle"
                        fill="hsl(var(--muted-foreground))"
                        fontSize="16"
                        className="font-medium"
                      >
                        {node.label}
                      </text>}
                  </g>
                ))}
              </g>

              {route && (
                <>
                  <path
                    ref={pathRef}
                    d={drawPath(route.path)}
                    stroke="hsl(var(--primary))"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_8px_hsl(var(--primary))]"
                  />
                  <g ref={markerRef} style={{ display: 'none' }} className="transition-transform duration-100 ease-linear">
                      <circle 
                        r="12" 
                        fill="hsl(var(--primary-end))" 
                        stroke="white" 
                        strokeWidth="2"
                        className="drop-shadow-[0_0_8px_hsl(var(--primary-end)/0.8)]"
                      />
                      <User x="-7" y="-8" width="14" height="14" color="white" />
                  </g>
                </>
              )}
            </svg>
          </div>

          <div className="mt-4">
            <p className="text-muted-foreground">
              {route ? "Your optimized route is shown below." : "Generate a route from your cart to see it here."}
            </p>
          
            {route && (
              <div className="flex flex-col items-center gap-2 mt-2">
                <p className="font-semibold">Estimated Route Distance: <span className="text-primary">{route.totalDistance.toFixed(2)} meters</span></p>
                <Button onClick={handleSimulateClick} disabled={isSimulating}>
                  <PlayCircle className="mr-2 h-5 w-5" />
                  {isSimulating ? 'Simulating...' : 'Simulate Route'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
