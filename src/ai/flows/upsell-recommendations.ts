'use server';

/**
 * @fileOverview AI-driven upsell recommendations during store navigation.
 *
 * - getUpsellRecommendations - A function that provides upsell recommendations.
 * - UpsellRecommendationsInput - The input type for the getUpsellRecommendations function.
 * - UpsellRecommendationsOutput - The return type for the getUpsellRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UpsellRecommendationsInputSchema = z.object({
  cartItems: z
    .array(z.string())
    .describe("The list of items currently in the user's cart."),
  navigationHistory: z
    .array(z.string())
    .describe("The user's recent navigation history within the store."),
});
export type UpsellRecommendationsInput = z.infer<typeof UpsellRecommendationsInputSchema>;

const RecommendationSchema = z.object({
  productName: z.string().describe('The name of the recommended product.'),
  reason: z
    .string()
    .describe(
      'A short, compelling reason why this product is recommended based on the cart items.'
    ),
});

const UpsellRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(RecommendationSchema)
    .describe(
      'A list of product recommendations with reasons for upselling.'
    ),
});
export type UpsellRecommendationsOutput = z.infer<typeof UpsellRecommendationsOutputSchema>;

export async function getUpsellRecommendations(
  input: UpsellRecommendationsInput
): Promise<UpsellRecommendationsOutput> {
  // Filter out recommendations for items already in the cart before returning
  const result = await upsellRecommendationsFlow(input);

  if (!result || !Array.isArray(result.recommendations)) {
    return {recommendations: []};
  }

  const cartItemsLower = input.cartItems.map(item => item.toLowerCase());
  result.recommendations = result.recommendations.filter(
    rec => !cartItemsLower.includes(rec.productName.toLowerCase())
  );
  return result;
}

const prompt = ai.definePrompt({
  name: 'upsellRecommendationsPrompt',
  input: {schema: UpsellRecommendationsInputSchema},
  output: {schema: UpsellRecommendationsOutputSchema},
  prompt: `You are a creative and helpful shopping assistant inside a grocery store app. Your goal is to provide genuinely useful and inspiring upsell recommendations to users based on what's in their shopping cart. Think about what they might be cooking or what they might need.

Current Cart Items:
{{#each cartItems}}
- {{this}}
{{/each}}

Based on the cart, generate a few recommendations. For each recommendation, provide the product name and a short, friendly reason. Be creative!

For example:
- If you see pasta and ground beef, suggest "Garlic Bread" with the reason "To complete your pasta night dinner!"
- If you see chips and cola, suggest "Salsa Dip" with the reason "The perfect partner for your movie night snacks."
- If you see milk and bananas, suggest "Breakfast Cereal" with the reason "For a quick and healthy breakfast."

Do not recommend items that are already in the cart.
Provide the recommendations in the specified JSON format.`,
});

const upsellRecommendationsFlow = ai.defineFlow(
  {
    name: 'upsellRecommendationsFlow',
    inputSchema: UpsellRecommendationsInputSchema,
    outputSchema: UpsellRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      // Return an empty list if the AI doesn't provide recommendations
      return {recommendations: []};
    }
    return output;
  }
);
