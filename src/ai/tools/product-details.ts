'use server';
/**
 * @fileOverview A tool for fetching product details like price and category.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { products as allProducts } from '@/lib/data';

const GetProductDetailsInputSchema = z.object({
  productName: z.string().describe('The name of the product to look up.'),
});

const GetProductDetailsOutputSchema = z.object({
  price: z
    .number()
    .describe('The price of the product.'),
  category: z
    .string()
    .describe('The category of the product.'),
});

export const getProductDetails = ai.defineTool(
  {
    name: 'getProductDetails',
    description: 'Get the price and category for a given product name. Use this for every item identified.',
    inputSchema: GetProductDetailsInputSchema,
    outputSchema: GetProductDetailsOutputSchema,
  },
  async ({ productName }) => {
    console.log(`Looking up details for: ${productName}`);
    const normalizedProductName = productName.toLowerCase();
    const foundProduct = allProducts.find(p => p.name.toLowerCase() === normalizedProductName);

    if (foundProduct) {
      return {
        price: foundProduct.price,
        category: foundProduct.category,
      };
    }

    // Simulate fetching from an external service for unknown items
    // Generate a random price between $0.99 and $29.99
    const randomPrice = Math.floor(Math.random() * 2900 + 99) / 100;
    return {
      price: randomPrice,
      category: 'Scanned',
    };
  }
);
