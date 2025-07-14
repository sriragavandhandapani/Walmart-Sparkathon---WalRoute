'use server';
/**
 * @fileOverview AI-driven shopping route optimization.
 *
 * - getOptimizedRoute - A function that provides an optimized shopping route.
 * - OptimizeRouteInput - The input type for the getOptimizedRoute function.
 * - OptimizeRouteOutput - The return type for the getOptimizedRoute function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define a schema for a single product in the cart
const ProductInfoSchema = z.object({
  id: z.number(),
  name: z.string(),
  aisle: z.number(),
});

const OptimizeRouteInputSchema = z.object({
  products: z
    .array(ProductInfoSchema)
    .describe("The list of products in the user's shopping cart."),
  startPoint: z.string().describe("The starting point for the route, e.g., 'Entrance'."),
});
export type OptimizeRouteInput = z.infer<typeof OptimizeRouteInputSchema>;

const OptimizeRouteOutputSchema = z.object({
  optimized_list: z
    .array(z.string())
    .describe('An ordered list of product names representing the most efficient shopping route.'),
});
export type OptimizeRouteOutput = z.infer<typeof OptimizeRouteOutputSchema>;

export async function getOptimizedRoute(
  input: OptimizeRouteInput
): Promise<OptimizeRouteOutput> {
  return optimizeRouteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeRoutePrompt',
  input: {schema: OptimizeRouteInputSchema},
  output: {schema: OptimizeRouteOutputSchema},
  prompt: `You are an expert in-store logistics planner, solving a variation of the Traveling Salesperson Problem for a grocery store. Your single most important goal is to create the most efficient shopping route that visits all necessary aisles to collect the listed products, minimizing total walking distance. The route must start at the entrance and visit all required locations before proceeding to the checkout.

The user starts at the {{startPoint}}.
The shopping list contains the following items with their aisle numbers:
{{#each products}}
- {{name}} (Aisle {{aisle}})
{{/each}}

Analyze the aisle numbers and create the sequence of products that results in the absolute shortest path. The order of products in your output determines the path. Avoid any backtracking and unnecessary movement. The final output must be an ordered list of product names representing the single most efficient route.

Please provide the optimized shopping list as an ordered array of product names in the 'optimized_list' field.`,
});

const optimizeRouteFlow = ai.defineFlow(
  {
    name: 'optimizeRouteFlow',
    inputSchema: OptimizeRouteInputSchema,
    outputSchema: OptimizeRouteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI failed to generate an optimized route.');
    }
    return output;
  }
);
