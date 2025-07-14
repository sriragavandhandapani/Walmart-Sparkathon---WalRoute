export interface Product {
  id: number;
  name: string;
  category: string;
  aisle: number;
  price: number;
  inventory: 'In Stock' | 'Low Stock' | 'Out of Stock';
  imageUrl: string;
  coords: { x: number; y: number };
}

export interface CartProduct extends Product {
  quantity: number;
}

export type Route = {
  path: { x: number; y: number }[];
  totalDistance: number;
};

export interface LayoutNode {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  radius: number;
}

export type LayoutEdge = [string, string];
