
import type { Product } from './types';

export const products: Product[] = [
  // Produce - Aisle 1
  { id: 1, name: 'Organic Bananas', category: 'Fresh Produce', aisle: 1, price: 1.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1750601455197-a7ba46fb1544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxmcmVzaCUyMHByb2R1Y2UlMjBiYW5hbmFzfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 }, },
  { id: 6, name: 'Avocado', category: 'Fresh Produce', aisle: 1, price: 2.19, inventory: 'Out of Stock', imageUrl: 'https://images.unsplash.com/photo-1707734534246-b956bdb7db6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHByb2R1Y2UlMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 }, },
  { id: 13, name: 'Roma Tomatoes', category: 'Fresh Produce', aisle: 1, price: 2.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1620249784068-46499a3bcdc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmcmVzaCUyMHByb2R1Y2UlMjB0b21hdG9lc3xlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 }, },
  { id: 14, name: 'Leafy Greens Mix', category: 'Fresh Produce', aisle: 1, price: 3.99, inventory: 'Low Stock', imageUrl: 'https://images.unsplash.com/photo-1687199129802-3e4cc27baac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxmcmVzaCUyMHByb2R1Y2UlMjBncmVlbnN8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 }, },
  { id: 101, name: 'Red Apples', category: 'Fresh Produce', aisle: 1, price: 3.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1745962417587-365bef211257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxmcmVzaCUyMHByb2R1Y2UlMjBhcHBsZXN8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 } },
  { id: 102, name: 'Carrots', category: 'Fresh Produce', aisle: 1, price: 1.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMHByb2R1Y2UlMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 } },
  { id: 103, name: 'Broccoli', category: 'Fresh Produce', aisle: 1, price: 2.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1489450278009-822e9be04dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmcmVzaCUyMHByb2R1Y2UlMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 } },

  // Dairy & Eggs - Aisle 12
  { id: 2, name: 'Whole Milk', category: 'Dairy & Deli', aisle: 12, price: 3.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1712056407271-e51fdc896637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGFpcnklMjB8ZW58MHx8fHwxNzUyMDg0MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 }, },
  { id: 3, name: 'Cheddar Cheese', category: 'Dairy & Deli', aisle: 12, price: 4.99, inventory: 'Low Stock', imageUrl: 'https://images.unsplash.com/photo-1594731884638-8197c3102d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIwODQzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 }, },
  { id: 15, name: 'Greek Yogurt', category: 'Dairy & Deli', aisle: 12, price: 4.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIwOTQzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 }, },
  { id: 104, name: 'Large Eggs', category: 'Dairy & Deli', aisle: 12, price: 3.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIxMzY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 } },
  { id: 105, name: 'Butter', category: 'Dairy & Deli', aisle: 12, price: 4.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1602153508753-4ace888c10a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIxMzY1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 } },
  { id: 106, name: 'Orange Juice', category: 'Beverages', aisle: 12, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1602153508753-4ace888c10a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 } },
  { id: 107, name: 'Cream Cheese', category: 'Dairy & Deli', aisle: 12, price: 2.79, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1594731884638-8197c3102d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIwODQzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 } },

  // Meat & Seafood (in Grocery) - Aisle 7
  { id: 16, name: 'Ground Beef', category: 'Meat & Seafood', aisle: 7, price: 6.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1606677661991-446cea8ee182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtZWF0JTIwfGVufDB8fHx8MTc1MjA5NDM5NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 17, name: 'Chicken Breast', category: 'Meat & Seafood', aisle: 7, price: 8.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1613454320437-0c228c8b1723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bWVhdCUyMHxlbnwwfHx8fDE3NTIwOTQzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 18, name: 'Salmon Fillet', category: 'Meat & Seafood', aisle: 7, price: 12.99, inventory: 'Low Stock', imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtZWF0JTIwfGVufDB8fHx8MTc1MjA5NDM5NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 5, name: 'Rotisserie Chicken', category: 'Dairy & Deli', aisle: 12, price: 7.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1511018875912-55dcefb8b4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkZWxpJTIwY2hpY2tlbnxlbnwwfHx8fDE3NTIwODQzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 }, },

  // Bakery (near Frozen) - Aisle 6
  { id: 4, name: 'Sourdough Bread', category: 'Bakery', aisle: 6, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1631131799562-5acc477d8252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiYWtlcnklMjBicmVhZHxlbnwwfHx8fDE3NTIwODQzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },
  { id: 19, name: 'Croissants', category: 'Bakery', aisle: 6, price: 5.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1556745750-68295fefafc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MXwxfHNlYXJjaHw4fHxiYWtlcnklMjB8ZW58MHx8fHwxNzUyMDk0Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },

  // Frozen - Aisle 6
  { id: 9, name: 'Frozen Pizza', category: 'Frozen Foods', aisle: 6, price: 6.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1565357253897-79d691886a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxmcm96ZW4lMjBwaXp6YXxlbnwwfHx8fDE3NTIwOTQzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },
  { id: 10, name: 'Ice Cream', category: 'Frozen Foods', aisle: 6, price: 5.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1628815756611-7b1b8f68d460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmcm96ZW4lMjBjcmVhbXxlbnwwfHx8fDE3NTIwOTQzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },
  { id: 20, name: 'Frozen Berries', category: 'Frozen Foods', aisle: 6, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1747582393969-36ceface74f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxmcm96ZW4lMjBiZXJyaWVzfGVufDB8fHx8MTc1MjA5NDM5NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },
  { id: 108, name: 'Frozen Waffles', category: 'Frozen Foods', aisle: 6, price: 3.79, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1572336124661-f84d79b15136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmcm96ZW4lMjB3YWZmbGVzfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 } },
  { id: 109, name: 'Frozen Vegetables', category: 'Frozen Foods', aisle: 6, price: 2.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1618788856642-8e491177d973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmcm96ZW4lMjB2ZWdldGFibGVzfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 } },
  { id: 110, name: 'Chicken Nuggets', category: 'Frozen Foods', aisle: 6, price: 8.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1718395011350-de9b27b0f88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZnJvemVuJTIwbnVnZ2V0c3xlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 } },
  { id: 111, name: 'Tater Tots', category: 'Frozen Foods', aisle: 6, price: 4.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1590430752967-d0e116909be1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxmcm96ZW4lMjB0b3RzfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 } },

  // Pantry, Snacks & Beverages - Aisle 7/8
  { id: 11, name: 'Cola 12-pack', category: 'Beverages', aisle: 8, price: 8.99, inventory: 'Low Stock', imageUrl: 'https://images.unsplash.com/photo-1673448223618-db3345bcb253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxiZXZlcmFnZXMlMjAxMi1wYWNrfGVufDB8fHx8MTc1MjA4NDM0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 }, },
  { id: 12, name: 'Potato Chips', category: 'Snacks', aisle: 8, price: 4.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1660088503032-6fbb3a99bda7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzbmFja3MlMjBjaGlwc3xlbnwwfHx8fDE3NTIwODQzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 }, },
  { id: 21, name: 'Pasta', category: 'Pantry', aisle: 7, price: 1.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxncm9jZXJ5JTIwfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 22, name: 'Pasta Sauce', category: 'Pantry', aisle: 7, price: 3.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1568584952743-6e30d4f404eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxncm9jZXJ5JTIwc2F1Y2V8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 112, name: 'Pretzels', category: 'Snacks', aisle: 8, price: 3.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzbmFja3MlMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 } },
  { id: 113, name: 'Cookies', category: 'Snacks', aisle: 8, price: 4.59, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzbmFja3MlMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 } },
  { id: 114, name: 'Granola Bars', category: 'Snacks', aisle: 8, price: 5.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1585341840941-98553e474d84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzbmFja3MlMjBiYXJzfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 } },
  { id: 115, name: 'Salsa', category: 'Snacks', aisle: 8, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1599629974232-2365495b9ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzbmFja3MlMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 } },
  { id: 116, name: 'Cereal', category: 'Pantry', aisle: 7, price: 4.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxncm9jZXJ5JTIwfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 } },
  { id: 117, name: 'Peanut Butter', category: 'Pantry', aisle: 7, price: 3.79, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1589649250181-9656b448f0f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Z3JvY2VyeSUyMGJ1dHRlcnxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 } },
  { id: 118, name: 'Jelly', category: 'Pantry', aisle: 7, price: 3.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Z3JvY2VyeSUyMHxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 } },
  { id: 119, name: 'Coffee', category: 'Beverages', aisle: 7, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxncm9jZXJ5JTIwfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 } },

  // Household & Personal Care - Aisle 9/10
  { id: 7, name: 'Paper Towels', category: 'Household', aisle: 9, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1585192794786-54c2a1dbc4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxob3VzZWhvbGQlMjBwYXBlciUyMHRvd2Vsc3xlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 }, },
  { id: 8, name: 'Laundry Detergent', category: 'Household', aisle: 9, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1624377225030-f0bb343eaa4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjbGVhbmluZyUyMGRldGVyZ2VudHxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 }, },
  { id: 23, name: 'Shampoo', category: 'Health & Wellness', aisle: 2, price: 7.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 }, },
  { id: 24, name: 'Toothpaste', category: 'Health & Wellness', aisle: 2, price: 3.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 }, },
  { id: 120, name: 'Toilet Paper', category: 'Household', aisle: 9, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1617565084799-c4c60ea9ad7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aG91c2Vob2xkJTIwcGFwZXIlMjBwYXBlcnxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },
  { id: 121, name: 'Dish Soap', category: 'Household', aisle: 9, price: 4.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1584724109209-b7d1f0368715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjbGVhbmluZyUyMHNvYXB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },
  { id: 122, name: 'Trash Bags', category: 'Household', aisle: 9, price: 10.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1638081942592-486f0b2c8acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjbGVhbmluZyUyMGJhZ3N8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },
  { id: 123, name: 'Sponges', category: 'Household', aisle: 9, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1627905646269-7f034dcc5738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjbGVhbmluZyUyMHxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },
  { id: 124, name: 'All-Purpose Cleaner', category: 'Household', aisle: 9, price: 5.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/flagged/photo-1560532886-43f59bee690d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjbGVhbmluZyUyMGNsZWFuZXJ8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },

  // Garden - Area
  { id: 125, name: 'Potting Soil', category: 'Home & Garden', aisle: 0, price: 8.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1621459565706-3b7612533b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxnYXJkZW4lMjBzb2lsfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 126, name: 'Garden Gloves', category: 'Home & Garden', aisle: 0, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1665395131699-f904d110acf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxnYXJkZW4lMjBnbG92ZXN8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 127, name: 'Watering Can', category: 'Home & Garden', aisle: 0, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1588766381125-c29bced9d2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxnYXJkZW4lMjBjYW58ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 128, name: 'Flower Seeds', category: 'Home & Garden', aisle: 0, price: 2.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1720121606488-e7d966339a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxnYXJkZW4lMjBzZWVkc3xlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 129, name: 'Shovel', category: 'Home & Garden', aisle: 0, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxnYXJkZW4lMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 130, name: 'Plant Food', category: 'Home & Garden', aisle: 0, price: 7.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1697219611646-d392d302bbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxnYXJkZW4lMjBmb29kfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 131, name: 'Hose Nozzle', category: 'Home & Garden', aisle: 0, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1593448011624-5a9b336564d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxnYXJkZW4lMjBub3p6bGV8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },

  // Toys - Area
  { id: 132, name: 'Building Blocks Set', category: 'Toys & Hobbies', aisle: 0, price: 24.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1683234803972-cc87e51d4af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8dG95cyUyMGJsb2Nrc3xlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 133, name: 'Action Figure', category: 'Toys & Hobbies', aisle: 0, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1607215622636-1bd444683050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0b3lzJTIwZmlndXJlfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 134, name: 'Board Game', category: 'Toys & Hobbies', aisle: 0, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1664746388840-a36f2368ad1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0b3lzJTIwZ2FtZXxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 135, name: 'Plush Toy', category: 'Toys & Hobbies', aisle: 0, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1696527014285-fd0fe136635a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0b3lzJTIwdG95fGVufDB8fHx8MTc1MjEzNjU0Nnww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 136, name: 'Remote Control Car', category: 'Toys & Hobbies', aisle: 0, price: 29.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1675190540981-2ce96f30e485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0b3lzJTIwY29udHJvbHxlbnwwfHx8fDE3NTIxMzY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 137, name: 'Art Easel', category: 'Toys & Hobbies', aisle: 0, price: 34.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1671212684958-2e59c6bafaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0b3lzJTIwZWFzZWx8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 138, name: 'Toy Kitchen Set', category: 'Toys & Hobbies', aisle: 0, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1624895674048-ab6ed423555e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0b3lzJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },

  // Sporting Goods - Area
  { id: 139, name: 'Basketball', category: 'Sporting Goods', aisle: 0, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1646504458774-dbad0e941c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzcG9ydGluZyUyMGdvb2RzJTIwfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 140, name: 'Yoga Mat', category: 'Sporting Goods', aisle: 0, price: 24.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1607332749331-6db303fcbb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzcG9ydGluZyUyMGdvb2RzJTIwbWF0fGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 141, name: 'Dumbbells Set', category: 'Sporting Goods', aisle: 0, price: 39.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1738330194751-e096b51af7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzcG9ydGluZyUyMGdvb2RzJTIwc2V0fGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 142, name: 'Water Bottle', category: 'Sporting Goods', aisle: 0, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1682309832701-a29a1c2c6600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzcG9ydGluZyUyMGdvb2RzJTIwYm90dGxlfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 143, name: 'Soccer Ball', category: 'Sporting Goods', aisle: 0, price: 17.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1646504458774-dbad0e941c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzcG9ydGluZyUyMGdvb2RzJTIwYmFsbHxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 144, name: 'Jump Rope', category: 'Sporting Goods', aisle: 0, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1683639718582-8e02d698df7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzcG9ydGluZyUyMGdvb2RzJTIwcm9wZXxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 145, name: 'Baseball Glove', category: 'Sporting Goods', aisle: 0, price: 29.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1683726753519-d2e125b4f130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzcG9ydGluZyUyMGdvb2RzJTIwZ2xvdmV8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  
  // Auto - Area
  { id: 146, name: 'Motor Oil', category: 'Automotive', aisle: 0, price: 25.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1648485935110-5f4580282fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhdXRvJTIwb2lsfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 147, name: 'Windshield Wiper Fluid', category: 'Automotive', aisle: 0, price: 4.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1741084691985-3a2a88158000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhdXRvJTIwd2lwZXJ8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 148, name: 'Car Wash Soap', category: 'Automotive', aisle: 0, price: 8.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1505761283622-7fe50142c97f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YXV0byUyMHdhc2h8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 149, name: 'Tire Shine', category: 'Automotive', aisle: 0, price: 7.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1653144348937-9dc49c695217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YXV0byUyMHNoaW5lfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 150, name: 'Air Freshener', category: 'Automotive', aisle: 0, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1594611469190-94df2b517289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhdXRvJTIwZnJlc2hlbmVyfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 151, name: 'Jumper Cables', category: 'Automotive', aisle: 0, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1613935652232-974b5d7463f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhdXRvJTIwY2FibGVzfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 152, name: 'Microfiber Towels', category: 'Automotive', aisle: 0, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1737065183310-aef762bd011c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxhdXRvJTIwdG93ZWxzfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },

  // Health - Aisle 2
  { id: 153, name: 'Pain Reliever', category: 'Health & Wellness', aisle: 2, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 154, name: 'Band-Aids', category: 'Health & Wellness', aisle: 2, price: 4.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 155, name: 'Vitamins', category: 'Health & Wellness', aisle: 2, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 156, name: 'Cough Drops', category: 'Health & Wellness', aisle: 2, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 157, name: 'Hand Sanitizer', category: 'Health & Wellness', aisle: 2, price: 2.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 158, name: 'Allergy Medicine', category: 'Health & Wellness', aisle: 2, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 159, name: 'Sunscreen', category: 'Health & Wellness', aisle: 2, price: 10.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },

  // Home & Garden - Aisle 2/3
  { id: 160, name: 'Pillow', category: 'Home & Garden', aisle: 2, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1698746043955-42b03ddedfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxiZWRkaW5nJTIwfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 400 } },
  { id: 161, name: 'Sheet Set', category: 'Home & Garden', aisle: 2, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1609587639086-b4cbf85e4355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiZWRkaW5nJTIwc2V0fGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 400 } },
  { id: 162, name: 'Comforter', category: 'Home & Garden', aisle: 2, price: 79.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1728614669329-29e10a0698ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxiZWRkaW5nJTIwfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 400 } },
  { id: 167, name: 'Picture Frame', category: 'Home & Garden', aisle: 3, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1666934209832-f8daf644f622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxob21lJTIwZnJhbWV8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 300 } },
  { id: 168, name: 'Wall Clock', category: 'Home & Garden', aisle: 3, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1639257045623-1b30e0b71b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxob21lJTIwY2xvY2t8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 300 } },
  { id: 174, name: 'Hammer', category: 'Home & Garden', aisle: 3, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoYXJkd2FyZSUyMHxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 150 } },
  { id: 175, name: 'Screwdriver Set', category: 'Home & Garden', aisle: 3, price: 24.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1701817314148-861aa6d4b8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxoYXJkd2FyZSUyMHNldHxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 150 } },

  // Seasonal & Party - Aisle 4
  { id: 181, name: 'Beach Towel', category: 'Seasonal & Party', aisle: 4, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1737065183310-aef762bd011c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzZWFzb25hbCUyMHRvd2VsfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 500 } },
  { id: 182, name: 'Cooler', category: 'Seasonal & Party', aisle: 4, price: 39.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1510877761153-6913e66097f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzZWFzb25hbCUyMHxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 500 } },
  { id: 183, name: 'Holiday Lights', category: 'Seasonal & Party', aisle: 4, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1576536363836-febd06cddc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzZWFzb25hbCUyMGxpZ2h0c3xlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 500 } },
  { id: 188, name: 'Birthday Card', category: 'Seasonal & Party', aisle: 4, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1633929560891-2a39b42f67d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjZWxlYnJhdGUlMjBjYXJkfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 400 } },
  { id: 189, name: 'Gift Wrap', category: 'Seasonal & Party', aisle: 4, price: 5.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1512542194577-1db2e4eef915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjZWxlYnJhdGUlMjB3cmFwfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 400 } },
  { id: 190, name: 'Balloons', category: 'Seasonal & Party', aisle: 4, price: 8.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1612038750554-db2fa5d68752?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjZWxlYnJhdGUlMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 400 } },
  { id: 191, name: 'Party Plates', category: 'Seasonal & Party', aisle: 4, price: 6.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1719562646912-f0844440416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjZWxlYnJhdGUlMjBwbGF0ZXN8ZW58MHx8fHwxNzUyMTM2NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 400 } },

  // Electronics & Crafts - Aisle 5
  { id: 195, name: 'Yarn', category: 'Electronics & Crafts', aisle: 5, price: 5.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1488806374796-a4071c52353b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjcmFmdHMlMjB8ZW58MHx8fHwxNzUyMTM2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 300 } },
  { id: 196, name: 'Paint Brushes', category: 'Electronics & Crafts', aisle: 5, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1503236712874-d64b828dc314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjcmFmdHMlMjBicnVzaGVzfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 300 } },
  { id: 202, name: 'Phone Charger', category: 'Electronics & Crafts', aisle: 5, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1651807193058-5306a491c7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZWxlY3Ryb25pY3MlMjBjaGFyZ2VyfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  { id: 203, name: 'Headphones', category: 'Electronics & Crafts', aisle: 5, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxlbGVjdHJvbmljcyUyMHxlbnwwfHx8fDE3NTIxMzY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  { id: 204, name: 'HDMI Cable', category: 'Electronics & Crafts', aisle: 5, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1588541898947-71e9b3abf8d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxlbGVjdHJvbmljcyUyMGNhYmxlfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  { id: 205, name: 'Batteries (AA)', category: 'Electronics & Crafts', aisle: 5, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1619641805634-b867f535071c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxlbGVjdHJvbmljcyUyMCUyOGFhJTI5fGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  { id: 206, name: 'Portable Speaker', category: 'Electronics & Crafts', aisle: 5, price: 39.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1633181467330-3650d611e532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxlbGVjdHJvbmljcyUyMHNwZWFrZXJ8ZW58MHx8fHwxNzUyMTM2NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  
  // Apparel & Accessories - Aisle 10/11
  { id: 209, name: 'Silver Necklace', category: 'Apparel & Accessories', aisle: 11, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxqZXdlbHJ5JTIwfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 500 } },
  { id: 210, name: 'Watch', category: 'Apparel & Accessories', aisle: 11, price: 99.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxqZXdlbHJ5JTIwfGVufDB8fHx8MTc1MjEzNjU0NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 500 } },
  { id: 216, name: 'Running Shoes', category: 'Apparel & Accessories', aisle: 11, price: 79.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1668069226492-508742b03147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzaG9lcyUyMHNob2VzfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 400 } },
  { id: 223, name: "Kids T-Shirt", category: 'Apparel & Accessories', aisle: 12, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1680971315871-91f219b6cee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxraWRzJTIwY2xvdGhlcyUyMHQtc2hpcnR8ZW58MHx8fHwxNzUyMTM2NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 300 } },
  { id: 237, name: "Men's T-Shirt", category: 'Apparel & Accessories', aisle: 10, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1716541425103-fcfd4bf88c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxhcHBhcmVsJTIwdC1zaGlydHxlbnwwfHx8fDE3NTIxMzY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 450 } },
  { id: 238, name: "Women's Blouse", category: 'Apparel & Accessories', aisle: 10, price: 29.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1512746836079-301538b42339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YXBwYXJlbCUyMGJsb3VzZXxlbnwwfHx8fDE3NTIxMzY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 450 } },
  { id: 239, name: "Men's Jeans", category: 'Apparel & Accessories', aisle: 10, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1564400143653-f881883b52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhcHBhcmVsJTIwamVhbnN8ZW58MHx8fHwxNzUyMTM2NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 450 } },

  // Baby & Pet - Aisle 10/12
  { id: 230, name: 'Dog Food', category: 'Baby & Pet', aisle: 12, price: 34.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1592468257342-8375cb556a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwZXQlMjBmb29kfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 150 } },
  { id: 231, name: 'Cat Food', category: 'Baby & Pet', aisle: 12, price: 24.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1571151596869-2663a84c1e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwZXQlMjBmb29kfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 150 } },
  { id: 232, name: 'Kitty Litter', category: 'Baby & Pet', aisle: 12, price: 18.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1579723985163-28f30af7093b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwZXQlMjBsaXR0ZXJ8ZW58MHx8fHwxNzUyMTM2NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 150 } },
  { id: 244, name: 'Diapers', category: 'Baby & Pet', aisle: 10, price: 29.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1561567131-f7d83083aee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxiYWJ5JTIwfGVufDB8fHx8MTc1MjEzNjU0NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 300 } },
  { id: 245, name: 'Baby Wipes', category: 'Baby & Pet', aisle: 10, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1734599397715-f030c6d206a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiYWJ5JTIwd2lwZXN8ZW58MHx8fHwxNzUyMTM2NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 300 } },
  { id: 246, name: 'Baby Formula', category: 'Baby & Pet', aisle: 10, price: 34.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/flagged/photo-1570560558077-45ad028193e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwZm9ybXVsYXxlbnwwfHx8fDE3NTIxMzY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 300 } },
  { id: 247, name: 'Baby Food Jars', category: 'Baby & Pet', aisle: 10, price: 1.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1548289227-b7d966b70003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxiYWJ5JTIwZm9vZHxlbnwwfHx8fDE3NTIxMzY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 300 } },
];

export const storeEntrance = { x: 50, y: 50 };

export const storeLayout = {
  nodes: [
    // Entrances & Exits
    { id: 'entrance', label: 'Entrance', x: 625, y: 650, color: 'hsl(var(--primary-end))', radius: 15 },
    { id: 'checkout_1', label: 'Checkout', x: 925, y: 650, color: 'hsl(var(--primary-end))', radius: 15 },
    { id: 'checkout_2', label: 'Checkout', x: 325, y: 650, color: 'hsl(var(--primary-end))', radius: 15 },
    
    // Main paths
    { id: 'front_aisle_1', label: '', x: 250, y: 580, color: 'hsl(var(--muted))', radius: 5 },
    { id: 'front_aisle_2', label: '', x: 425, y: 580, color: 'hsl(var(--muted))', radius: 5 },
    { id: 'front_aisle_3', label: '', x: 625, y: 580, color: 'hsl(var(--muted))', radius: 5 },
    { id: 'front_aisle_4', label: '', x: 825, y: 580, color: 'hsl(var(--muted))', radius: 5 },
    { id: 'front_aisle_5', label: '', x: 1000, y: 580, color: 'hsl(var(--muted))', radius: 5 },
    
    { id: 'back_aisle_1', label: '', x: 175, y: 80, color: 'hsl(var(--muted))', radius: 5 },
    { id: 'back_aisle_2', label: '', x: 337, y: 80, color: 'hsl(var(--muted))', radius: 5 },
    { id: 'back_aisle_3', label: '', x: 525, y: 80, color: 'hsl(var(--muted))', radius: 5 },
    { id: 'back_aisle_4', label: '', x: 725, y: 80, color: 'hsl(var(--muted))', radius: 5 },
    { id: 'back_aisle_5', label: '', x: 912, y: 80, color: 'hsl(var(--muted))', radius: 5 },

    // Department Nodes
    { id: 'garden', label: 'Garden', x: 125, y: 450, color: '#f97316', radius: 10 },
    { id: 'toys', label: 'Toys', x: 125, y: 350, color: '#f97316', radius: 10 },
    { id: 'sporting_goods', label: 'Sporting Goods', x: 125, y: 250, color: '#f97316', radius: 10 },
    { id: 'auto', label: 'Auto', x: 125, y: 150, color: '#f97316', radius: 10 },
    
    { id: 'health_wellness', label: 'Health', x: 250, y: 500, color: '#f97316', radius: 10 },
    { id: 'bath_bedding', label: 'Bedding', x: 250, y: 400, color: '#f97316', radius: 10 },
    { id: 'home_furniture', label: 'Home', x: 250, y: 300, color: '#f97316', radius: 10 },
    { id: 'hardware_paint', label: 'Hardware', x: 250, y: 150, color: '#f97316', radius: 10 },

    { id: 'seasonal', label: 'Seasonal', x: 425, y: 500, color: '#f97316', radius: 10 },
    { id: 'celebrate', label: 'Celebrate', x: 425, y: 400, color: '#f97316', radius: 10 },
    { id: 'crafts', label: 'Crafts', x: 425, y: 300, color: '#f97316', radius: 10 },
    { id: 'electronics', label: 'Electronics', x: 425, y: 150, color: '#f97316', radius: 10 },
    
    { id: 'jewelry_accessories', label: 'Jewelry', x: 625, y: 500, color: '#f97316', radius: 10 },
    { id: 'shoes', label: 'Shoes', x: 625, y: 400, color: '#f97316', radius: 10 },
    { id: 'kids_clothes', label: 'Kids Clothes', x: 625, y: 300, color: '#f97316', radius: 10 },
    { id: 'pet', label: 'Pet', x: 625, y: 150, color: '#f97316', radius: 10 },

    { id: 'apparel', label: 'Apparel', x: 825, y: 450, color: '#f97316', radius: 10 },
    { id: 'baby', label: 'Baby', x: 825, y: 300, color: '#f97316', radius: 10 },
    { id: 'household', label: 'Household', x: 825, y: 150, color: '#f97316', radius: 10 },
    
    { id: 'produce', label: 'Produce', x: 1000, y: 500, color: '#f97316', radius: 10 },
    { id: 'frozen', label: 'Frozen', x: 1000, y: 400, color: '#f97316', radius: 10 },
    { id: 'grocery', label: 'Grocery', x: 1000, y: 300, color: '#f97316', radius: 10 },
    { id: 'snacks_beverages', label: 'Snacks', x: 1000, y: 200, color: '#f97316', radius: 10 },
    { id: 'dairy_deli', label: 'Dairy', x: 1000, y: 100, color: '#f97316', radius: 10 },
  ],
  edges: [
    // Main Aisles
    ['entrance', 'front_aisle_3'],
    ['front_aisle_1', 'front_aisle_2'],
    ['front_aisle_2', 'front_aisle_3'],
    ['front_aisle_3', 'front_aisle_4'],
    ['front_aisle_4', 'front_aisle_5'],
    
    ['back_aisle_1', 'back_aisle_2'],
    ['back_aisle_2', 'back_aisle_3'],
    ['back_aisle_3', 'back_aisle_4'],
    ['back_aisle_4', 'back_aisle_5'],
    
    // Vertical Connections
    ['front_aisle_1', 'back_aisle_1'],
    ['front_aisle_2', 'back_aisle_2'],
    ['front_aisle_3', 'back_aisle_3'],
    ['front_aisle_4', 'back_aisle_4'],
    ['front_aisle_5', 'back_aisle_5'],

    // Department Connections to Aisles
    ['front_aisle_1', 'garden'], ['garden', 'toys'], ['toys', 'sporting_goods'], ['sporting_goods', 'auto'], ['auto', 'back_aisle_1'],

    ['front_aisle_2', 'health_wellness'], ['health_wellness', 'bath_bedding'], ['bath_bedding', 'home_furniture'], ['home_furniture', 'hardware_paint'], ['hardware_paint', 'back_aisle_2'],
    
    ['front_aisle_3', 'seasonal'], ['seasonal', 'celebrate'], ['celebrate', 'crafts'], ['crafts', 'electronics'], ['electronics', 'back_aisle_3'],
    
    ['front_aisle_4', 'jewelry_accessories'], ['jewelry_accessories', 'shoes'], ['shoes', 'kids_clothes'], ['kids_clothes', 'pet'], ['pet', 'back_aisle_4'],
    
    ['front_aisle_5', 'apparel'], ['apparel', 'baby'], ['baby', 'household'], ['household', 'back_aisle_5'],

    ['front_aisle_5', 'produce'], ['produce', 'frozen'], ['frozen', 'grocery'], ['grocery', 'snacks_beverages'], ['snacks_beverages', 'dairy_deli'], ['dairy_deli', 'back_aisle_5'],
    
    // Checkout connections
    ['front_aisle_4', 'checkout_1'],
    ['front_aisle_2', 'checkout_2'],
    ['checkout_1', 'entrance'],
    ['checkout_2', 'entrance'],
  ]
};

export const categoryLocations: { [key: string]: string } = {
  // Food
  'Fresh Produce': 'produce',
  'Meat & Seafood': 'grocery',
  'Dairy & Deli': 'dairy_deli',
  'Bakery': 'frozen',
  'Frozen Foods': 'frozen',
  'Pantry': 'grocery',
  'Snacks': 'snacks_beverages',
  'Beverages': 'snacks_beverages',

  // General Merchandise
  'Household': 'household',
  'Health & Wellness': 'health_wellness',
  'Baby & Pet': 'baby',
  'Apparel & Accessories': 'apparel',
  'Home & Garden': 'home_furniture',
  'Automotive': 'auto',
  'Electronics & Crafts': 'electronics',
  'Toys & Hobbies': 'toys',
  'Sporting Goods': 'sporting_goods',
  'Seasonal & Party': 'seasonal',
};
