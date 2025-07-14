'use server';
/**
 * @fileOverview AI-driven product tips.
 *
 * - getProductTips - A function that provides tips for a given product.
 * - ProductTipsInput - The input type for the getProductTips function.
 * - ProductTipsOutput - The return type for the getProductTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductTipsInputSchema = z.object({
  productName: z.string().describe('The name of the product to get tips for.'),
});
export type ProductTipsInput = z.infer<typeof ProductTipsInputSchema>;

const ProductTipsOutputSchema = z.object({
  tips: z
    .array(z.string())
    .describe('A list of helpful tips for the product.'),
});
export type ProductTipsOutput = z.infer<typeof ProductTipsOutputSchema>;

export async function getProductTips(
  input: ProductTipsInput
): Promise<ProductTipsOutput> {
  return productTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productTipsPrompt',
  input: {schema: ProductTipsInputSchema},
  output: {schema: ProductTipsOutputSchema},
  prompt: `You are a helpful and creative shopping assistant. Your goal is to provide 2-3 concise and genuinely useful tips for the following product: {{productName}}.

  The tips should be about storage, usage, preparation, or interesting pairings. Keep them short and easy to understand.

  For example, for "Avocado":
  - "To ripen it faster, place it in a paper bag with a banana."
  - "Store cut avocados with the pit in and a little lemon juice to prevent browning."

  For "Sourdough Bread":
  - "Store it cut-side down on a wooden board to keep it fresh without a bag."
  - "Revive a stale loaf by running it under water and baking at 350°F for 5-10 minutes."

  Provide the tips in the specified JSON format.`,
});

const productTipsFlow = ai.defineFlow(
  {
    name: 'productTipsFlow',
    inputSchema: ProductTipsInputSchema,
    outputSchema: ProductTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      return {tips: []};
    }
    return output;
  }
);
