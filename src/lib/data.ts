
import type { Product } from './types';

export const products: Product[] = [
  // Produce - Aisle 1
  { id: 1, name: 'Organic Bananas', category: 'Fresh Produce', aisle: 1, price: 1.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1721330905294-e1d240461261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMHByb2R1Y2UlMjBiYW5hbmFzfGVufDB8fHx8MTc1MjMwMzk2NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 }, },
  { id: 6, name: 'Avocado', category: 'Fresh Produce', aisle: 1, price: 2.19, inventory: 'Out of Stock', imageUrl: 'https://images.unsplash.com/photo-1605279682024-5a25531582dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmcmVzaCUyMHByb2R1Y2UlMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 }, },
  { id: 13, name: 'Roma Tomatoes', category: 'Fresh Produce', aisle: 1, price: 2.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1722775509899-23415f7a9407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmcmVzaCUyMHByb2R1Y2UlMjB0b21hdG9lc3xlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 }, },
  { id: 14, name: 'Leafy Greens Mix', category: 'Fresh Produce', aisle: 1, price: 3.99, inventory: 'Low Stock', imageUrl: 'https://images.unsplash.com/photo-1627798133922-270bb80af5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmcmVzaCUyMHByb2R1Y2UlMjBncmVlbnN8ZW58MHx8fHwxNzUyMzAzOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 }, },
  { id: 101, name: 'Red Apples', category: 'Fresh Produce', aisle: 1, price: 3.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhcHBsZXxlbnwwfHx8fDE3NTIyMTE1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 } },
  { id: 102, name: 'Carrots', category: 'Fresh Produce', aisle: 1, price: 1.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1489450278009-822e9be04dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmcmVzaCUyMHByb2R1Y2UlMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 } },
  { id: 103, name: 'Broccoli', category: 'Fresh Produce', aisle: 1, price: 2.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1657288089316-c0350003ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmcmVzaCUyMHByb2R1Y2UlMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 500 } },

  // Dairy & Eggs - Aisle 12
  { id: 2, name: 'Whole Milk', category: 'Dairy & Deli', aisle: 12, price: 3.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 }, },
  { id: 3, name: 'Cheddar Cheese', category: 'Dairy & Deli', aisle: 12, price: 4.99, inventory: 'Low Stock', imageUrl: 'https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 }, },
  { id: 15, name: 'Greek Yogurt', category: 'Dairy & Deli', aisle: 12, price: 4.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1602153508753-4ace888c10a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 }, },
  { id: 104, name: 'Large Eggs', category: 'Dairy & Deli', aisle: 12, price: 3.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1602153508753-4ace888c10a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 } },
  { id: 105, name: 'Butter', category: 'Dairy & Deli', aisle: 12, price: 4.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1502590464431-3b66d77494d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 } },
  { id: 106, name: 'Orange Juice', category: 'Beverages', aisle: 12, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1625480493490-7866e658703a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxiZXZlcmFnZXMlMjBqdWljZXxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 } },
  { id: 107, name: 'Cream Cheese', category: 'Dairy & Deli', aisle: 12, price: 2.79, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 } },

  // Meat & Seafood (in Grocery) - Aisle 7
  { id: 16, name: 'Ground Beef', category: 'Meat & Seafood', aisle: 7, price: 6.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1606677661991-446cea8ee182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtZWF0JTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 17, name: 'Chicken Breast', category: 'Meat & Seafood', aisle: 7, price: 8.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1606677661991-446cea8ee182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtZWF0JTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 18, name: 'Salmon Fillet', category: 'Meat & Seafood', aisle: 7, price: 12.99, inventory: 'Low Stock', imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtZWF0JTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 5, name: 'Rotisserie Chicken', category: 'Dairy & Deli', aisle: 12, price: 7.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxkYWlyeSUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 100 }, },

  // Bakery (near Frozen) - Aisle 6
  { id: 4, name: 'Sourdough Bread', category: 'Bakery', aisle: 6, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1631131799562-5acc477d8252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiYWtlcnklMjBicmVhZHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },
  { id: 19, name: 'Croissants', category: 'Bakery', aisle: 6, price: 5.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YmFrZXJ5JTIwfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },

  // Frozen - Aisle 6
  { id: 9, name: 'Frozen Pizza', category: 'Frozen Foods', aisle: 6, price: 6.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1623398969394-2c02e167498e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxmcm96ZW4lMjBmb29kcyUyMHBpenphfGVufDB8fHx8MTc1MjMwMzk2NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },
  { id: 10, name: 'Ice Cream', category: 'Frozen Foods', aisle: 6, price: 5.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1628815756611-7b1b8f68d460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmcm96ZW4lMjBmb29kcyUyMGNyZWFmfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },
  { id: 20, name: 'Frozen Berries', category: 'Frozen Foods', aisle: 6, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1613082410785-22292e8426e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmcm96ZW4lMjBmb29kcyUyMGJlcnJpZXN8ZW58MHx8fHwxNzUyMzAzOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 }, },
  { id: 108, name: 'Frozen Waffles', category: 'Frozen Foods', aisle: 6, price: 3.79, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1709042641871-c6c092361372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmcm96ZW4lMjBmb29kcyUyMHdhZmZsZXN8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 } },
  { id: 109, name: 'Frozen Vegetables', category: 'Frozen Foods', aisle: 6, price: 2.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1738220542905-6e477c1f1c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmcm96ZW4lMjBmb29kcyUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzUyMzAzOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 } },
  { id: 110, name: 'Chicken Nuggets', category: 'Frozen Foods', aisle: 6, price: 8.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1549099609-a3695f648b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmcm96ZW4lMjBmb29kcyUyMG51Z2dldHN8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 } },
  { id: 111, name: 'Tater Tots', category: 'Frozen Foods', aisle: 6, price: 4.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1583863733865-9c33d84b2907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmcm96ZW4lMjBmb29kcyUyMHRvdHN8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 400 } },

  // Pantry, Snacks & Beverages - Aisle 7/8
  { id: 11, name: 'Cola 12-pack', category: 'Beverages', aisle: 8, price: 8.99, inventory: 'Low Stock', imageUrl: 'https://images.unsplash.com/photo-1653070892025-a85e92d0fa3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YmV2ZXJhZ2VzJTIwMTItcGFja3xlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 }, },
  { id: 12, name: 'Potato Chips', category: 'Snacks', aisle: 8, price: 4.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1701341964637-94945a277fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzbmFja3MlMjBjaGlwc3xlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 }, },
  { id: 21, name: 'Pasta', category: 'Pantry', aisle: 7, price: 1.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1645567454567-901dc409551b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwYW50cnklMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 22, name: 'Pasta Sauce', category: 'Pantry', aisle: 7, price: 3.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1691480208637-6ed63aac6694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwYW50cnklMjBzYXVjZXxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 }, },
  { id: 112, name: 'Pretzels', category: 'Snacks', aisle: 8, price: 3.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1599629974232-2365495b9ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzbmFja3MlMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 } },
  { id: 113, name: 'Cookies', category: 'Snacks', aisle: 8, price: 4.59, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1599629974232-2365495b9ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzbmFja3MlMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 } },
  { id: 114, name: 'Granola Bars', category: 'Snacks', aisle: 8, price: 5.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1653946402569-a493931970c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzbmFja3MlMjBiYXJzfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 } },
  { id: 115, name: 'Salsa', category: 'Snacks', aisle: 8, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1569419915350-4618d98b08f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzbmFja3MlMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 200 } },
  { id: 116, name: 'Cereal', category: 'Pantry', aisle: 7, price: 4.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1590311825124-73ec5233cb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwYW50cnklMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 } },
  { id: 117, name: 'Peanut Butter', category: 'Pantry', aisle: 7, price: 3.79, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1590912710024-6d51a6771abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwYW50cnklMjBidXR0ZXJ8ZW58MHx8fHwxNzUyMzAzOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 } },
  { id: 118, name: 'Jelly', category: 'Pantry', aisle: 7, price: 3.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1738618141234-1ee52c6475a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwYW50cnklMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 } },
  { id: 119, name: 'Coffee', category: 'Beverages', aisle: 7, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiZXZlcmFnZXMlMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 1000, y: 300 } },

  // Household & Personal Care - Aisle 9/10
  { id: 7, name: 'Paper Towels', category: 'Household', aisle: 9, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1740760188069-ad88835726c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxob3VzZWhvbGQlMjB0b3dlbHN8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 }, },
  { id: 8, name: 'Laundry Detergent', category: 'Household', aisle: 9, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1649005011845-ef225c89da86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob3VzZWhvbGQlMjBkZXRlcmdlbnR8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 }, },
  { id: 23, name: 'Shampoo', category: 'Health & Wellness', aisle: 2, price: 7.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 }, },
  { id: 24, name: 'Toothpaste', category: 'Health & Wellness', aisle: 2, price: 3.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 }, },
  { id: 120, name: 'Toilet Paper', category: 'Household', aisle: 9, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1585809913760-4fb4ed7d33e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxob3VzZWhvbGQlMjBwYXBlcnxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },
  { id: 121, name: 'Dish Soap', category: 'Household', aisle: 9, price: 4.49, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1588718570100-87869a88cf44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxob3VzZWhvbGQlMjBzb2FwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },
  { id: 122, name: 'Trash Bags', category: 'Household', aisle: 9, price: 10.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1723018649586-80d15d188510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxob3VzZWhvbGQlMjBiYWdzfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },
  { id: 123, name: 'Sponges', category: 'Household', aisle: 9, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1628843226223-989e20810393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxob3VzZWhvbGQlMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },
  { id: 124, name: 'All-Purpose Cleaner', category: 'Household', aisle: 9, price: 5.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1727510160238-3c17eb5e6120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxob3VzZWhvbGQlMjBjbGVhbmVyfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 150 } },

  // Garden - Area
  { id: 125, name: 'Potting Soil', category: 'Home & Garden', aisle: 0, price: 8.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob21lJTIwfGVufDB8fHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 126, name: 'Garden Gloves', category: 'Home & Garden', aisle: 0, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxob21lJTIwfGVufDB8fHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 127, name: 'Watering Can', category: 'Home & Garden', aisle: 0, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxob21lJTIwfGVufDB8fHx8MTc1MjMxMjY5NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 128, name: 'Flower Seeds', category: 'Home & Garden', aisle: 0, price: 2.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxob21lJTIwfGVufDB8fHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 129, name: 'Shovel', category: 'Home & Garden', aisle: 0, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxob21lJTIwfGVufDB8fHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 130, name: 'Plant Food', category: 'Home & Garden', aisle: 0, price: 7.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxob21lJTIwfGVufDB8fHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },
  { id: 131, name: 'Hose Nozzle', category: 'Home & Garden', aisle: 0, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxob21lJTIwfGVufDB8fHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 450 } },

  // Toys - Area
  { id: 132, name: 'Building Blocks Set', category: 'Toys & Hobbies', aisle: 0, price: 24.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1500995617113-cf789362a3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0b3lzJTIwfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 133, name: 'Action Figure', category: 'Toys & Hobbies', aisle: 0, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx0b3lzJTIwfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 134, name: 'Board Game', category: 'Toys & Hobbies', aisle: 0, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0b3lzJTIwfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 135, name: 'Plush Toy', category: 'Toys & Hobbies', aisle: 0, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1595550903979-1969e5adeb92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx0b3lzJTIwfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 136, name: 'Remote Control Car', category: 'Toys & Hobbies', aisle: 0, price: 29.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0b3lzJTIwfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 137, name: 'Art Easel', category: 'Toys & Hobbies', aisle: 0, price: 34.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0b3lzJTIwfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },
  { id: 138, name: 'Toy Kitchen Set', category: 'Toys & Hobbies', aisle: 0, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx0b3lzJTIwfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 350 } },

  // Sporting Goods - Area
  { id: 139, name: 'Basketball', category: 'Sporting Goods', aisle: 0, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1669139185686-5e0b2355a104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3BvcnRpbmclMjBnb29kcyUyMHxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 140, name: 'Yoga Mat', category: 'Sporting Goods', aisle: 0, price: 24.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1566386044867-0ee5c7bae7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzcG9ydGluZyUyMGdvb2RzJTIwbWF0fGVufDB8fHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 141, name: 'Dumbbells Set', category: 'Sporting Goods', aisle: 0, price: 39.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1711825051016-120172795f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3BvcnRpbmclMjBnb29kcyUyMHNldHxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 142, name: 'Water Bottle', category: 'Sporting Goods', aisle: 0, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1698664434322-94a43b98b9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzcG9ydGluZyUyMGdvb2RzJTIwYm90dGxlfGVufDB8fHx8MTc1MjMwMzk2NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 143, name: 'Soccer Ball', category: 'Sporting Goods', aisle: 0, price: 17.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1651863208590-68749bebc335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzcG9ydGluZyUyMGdvb2RzJTIwYmFsbHxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 144, name: 'Jump Rope', category: 'Sporting Goods', aisle: 0, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1745074685553-327c3d8a8f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzcG9ydGluZyUyMGdvb2RzJTIwcm9wZXxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  { id: 145, name: 'Baseball Glove', category: 'Sporting Goods', aisle: 0, price: 29.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1570442387127-66eb80e00938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3BvcnRpbmclMjBnb29kcyUyMGdsb3ZlfGVufDB8fHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 250 } },
  
  // Auto - Area
  { id: 146, name: 'Motor Oil', category: 'Automotive', aisle: 0, price: 25.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1625055930842-b9ad84b7facd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhdXRvbW90aXZlJTIwb2lsfGVufDB8fHx8MTc1MjMwMzk2NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 147, name: 'Windshield Wiper Fluid', category: 'Automotive', aisle: 0, price: 4.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1737676152541-cc42b1005260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxhdXRvbW90aXZlJTIwd2lwZXJ8ZW58MHx8fHwxNzUyMzAzOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 148, name: 'Car Wash Soap', category: 'Automotive', aisle: 0, price: 8.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1679652851578-29f39f420e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd2FzaHxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 149, name: 'Tire Shine', category: 'Automotive', aisle: 0, price: 7.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1597183246192-1becc8a79875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YXV0b21vdGl2ZSUyMHNoaW5lfGVufDB8fHx8MTc1MjMwMzk2NXww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 150, name: 'Air Freshener', category: 'Automotive', aisle: 0, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1603935150427-2a3eea8ca754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhdXRvbW90aXZlJTIwZnJlc2hlbmVyfGVufDB8fHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 151, name: 'Jumper Cables', category: 'Automotive', aisle: 0, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1696150874769-ea4f30453c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhdXRvbW90aXZlJTIwY2FibGVzfGVufDB8fHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },
  { id: 152, name: 'Microfiber Towels', category: 'Automotive', aisle: 0, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1639298108944-76a403a7c38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhdXRvbW90aXZlJTIwdG93ZWxzfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 125, y: 150 } },

  // Health - Aisle 2
  { id: 153, name: 'Pain Reliever', category: 'Health & Wellness', aisle: 2, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 154, name: 'Band-Aids', category: 'Health & Wellness', aisle: 2, price: 4.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 155, name: 'Vitamins', category: 'Health & Wellness', aisle: 2, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 156, name: 'Cough Drops', category: 'Health & Wellness', aisle: 2, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 157, name: 'Hand Sanitizer', category: 'Health & Wellness', aisle: 2, price: 2.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 158, name: 'Allergy Medicine', category: 'Health & Wellness', aisle: 2, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxoZWFsdGglMjB8ZW58MHx8fHwxNzUyMzAzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },
  { id: 159, name: 'Sunscreen', category: 'Health & Wellness', aisle: 2, price: 10.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1444312645910-ffa973656eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aGVhbHRoJTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 500 } },

  // Home & Garden - Aisle 2/3
  { id: 160, name: 'Pillow', category: 'Home & Garden', aisle: 2, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob21lJTIwfGVufDB8fHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 400 } },
  { id: 161, name: 'Sheet Set', category: 'Home & Garden', aisle: 2, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxob21lJTIwfGVufDB8fHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 400 } },
  { id: 162, name: 'Comforter', category: 'Home & Garden', aisle: 2, price: 79.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxob21lJTIwfGVufDB8fHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 400 } },
  { id: 167, name: 'Picture Frame', category: 'Home & Garden', aisle: 3, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxob21lJTIwfGVufDB8fHx8MTc1MjMxMjY5NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 300 } },
  { id: 168, name: 'Wall Clock', category: 'Home & Garden', aisle: 3, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aG9tZSUyMHxlbnwwfHx8fDE3NTIzMTI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 300 } },
  { id: 174, name: 'Hammer', category: 'Home & Garden', aisle: 3, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxob21lJTIwfGVufDB8fHx8MTc1MjMxMjY5NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 150 } },
  { id: 175, name: 'Screwdriver Set', category: 'Home & Garden', aisle: 3, price: 24.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxob21lJTIwfGVufDB8fHx8MTc1MjMxMjY5NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 250, y: 150 } },

  // Seasonal & Party - Aisle 4
  { id: 181, name: 'Beach Towel', category: 'Seasonal & Party', aisle: 4, price: 15.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1564461552109-96ff00b8c04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzZWFzb25hbCUyMHxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 500 } },
  { id: 182, name: 'Cooler', category: 'Seasonal & Party', aisle: 4, price: 39.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1730191451915-668c70dfb9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzZWFzb25hbCUyMHxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 500 } },
  { id: 183, name: 'Holiday Lights', category: 'Seasonal & Party', aisle: 4, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1510877761153-6913e66097f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzZWFzb25hbCUyMHxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 500 } },
  { id: 188, name: 'Birthday Card', category: 'Seasonal & Party', aisle: 4, price: 3.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1670776056086-b48f53505cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxzZWFzb25hbCUyMHxlbnwwfHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 400 } },
  { id: 189, name: 'Gift Wrap', category: 'Seasonal & Party', aisle: 4, price: 5.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1602883522093-3bb023cc4f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c2Vhc29uYWwlMjB8ZW58MHx8fHwxNzUyMzAzOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 400 } },
  { id: 190, name: 'Balloons', category: 'Seasonal & Party', aisle: 4, price: 8.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 400 } },
  { id: 191, name: 'Party Plates', category: 'Seasonal & Party', aisle: 4, price: 6.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1685776889351-04958c3aba27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzZWFzb25hbCUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 400 } },

  // Electronics & Crafts - Aisle 5
  { id: 195, name: 'Yarn', category: 'Electronics & Crafts', aisle: 5, price: 5.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxlbGVjdHJvbmljcyUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 300 } },
  { id: 196, name: 'Paint Brushes', category: 'Electronics & Crafts', aisle: 5, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlbGVjdHJvbmljcyUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 300 } },
  { id: 202, name: 'Phone Charger', category: 'Electronics & Crafts', aisle: 5, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxlbGVjdHJvbmljcyUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  { id: 203, name: 'Headphones', category: 'Electronics & Crafts', aisle: 5, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxlbGVjdHJvbmljcyUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  { id: 204, name: 'HDMI Cable', category: 'Electronics & Crafts', aisle: 5, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxlbGVjdHJvbmljcyUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  { id: 205, name: 'Batteries (AA)', category: 'Electronics & Crafts', aisle: 5, price: 9.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxlbGVjdHJvbmljcyUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  { id: 206, name: 'Portable Speaker', category: 'Electronics & Crafts', aisle: 5, price: 39.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxlbGVjdHJvbmljcyUyMHxlbnwwfHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 425, y: 150 } },
  
  // Apparel & Accessories - Aisle 10/11
  { id: 209, name: 'Silver Necklace', category: 'Apparel & Accessories', aisle: 11, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhcHBhcmVsJTIwfGVufDB8fHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 500 } },
  { id: 210, name: 'Watch', category: 'Apparel & Accessories', aisle: 11, price: 99.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxhcHBhcmVsJTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 500 } },
  { id: 216, name: 'Running Shoes', category: 'Apparel & Accessories', aisle: 11, price: 79.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhcHBhcmVsJTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 400 } },
  { id: 223, name: "Kids T-Shirt", category: 'Apparel & Accessories', aisle: 12, price: 14.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhcHBhcmVsJTIwfGVufDB8fHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 300 } },
  { id: 237, name: "Men's T-Shirt", category: 'Apparel & Accessories', aisle: 10, price: 19.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhcHBhcmVsJTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 450 } },
  { id: 238, name: "Women's Blouse", category: 'Apparel & Accessories', aisle: 10, price: 29.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhcHBhcmVsJTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 450 } },
  { id: 239, name: "Men's Jeans", category: 'Apparel & Accessories', aisle: 10, price: 49.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhcHBhcmVsJTIwfGVufDB8fHx8fDE3NTIzMDM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 450 } },

  // Baby & Pet - Aisle 10/12
  { id: 230, name: 'Dog Food', category: 'Baby & Pet', aisle: 12, price: 34.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1588410670460-cdab54625253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxiYWJ5JTIwfGVufDB8fHx8MTc1MjMwMzk2NHww&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 150 } },
  { id: 231, name: 'Cat Food', category: 'Baby & Pet', aisle: 12, price: 24.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1561567131-f7d83083aee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxiYWJ5JTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 150 } },
  { id: 232, name: 'Kitty Litter', category: 'Baby & Pet', aisle: 12, price: 18.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiYWJ5JTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 625, y: 150 } },
  { id: 244, name: 'Diapers', category: 'Baby & Pet', aisle: 10, price: 29.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1480985041486-c65b20c01d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxiYWJ5JTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 300 } },
  { id: 245, name: 'Baby Wipes', category: 'Baby & Pet', aisle: 10, price: 12.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiYWJ5JTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 300 } },
  { id: 246, name: 'Baby Formula', category: 'Baby & Pet', aisle: 10, price: 34.99, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1480985041486-c65b20c01d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxiYWJ5JTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 300 } },
  { id: 247, name: 'Baby Food Jars', category: 'Baby & Pet', aisle: 10, price: 1.29, inventory: 'In Stock', imageUrl: 'https://images.unsplash.com/photo-1561567131-f7d83083aee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxiYWJ5JTIwfGVufDB8fHx8fDE3NTIzMDM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', coords: { x: 825, y: 300 } },
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

    
    