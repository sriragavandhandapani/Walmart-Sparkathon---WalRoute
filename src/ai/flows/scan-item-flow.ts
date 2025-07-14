
'use server';
/**
 * @fileOverview AI-driven item scanning and identification.
 *
 * - scanItem - A function that identifies a product from a photo.
 * - ScanItemInput - The input type for the scanItem function.
 * - ScanItemOutput - The return type for the scanItem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getProductDetails } from '@/ai/tools/product-details';

const ScanItemInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a product, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ScanItemInput = z.infer<typeof ScanItemInputSchema>;

const ScanItemOutputSchema = z.object({
  productName: z.string().describe('The full name of the identified product.'),
  price: z.number().describe('The price of the product.'),
  category: z.string().describe('The product category.'),
});
export type ScanItemOutput = z.infer<typeof ScanItemOutputSchema>;

export async function scanItem(input: ScanItemInput): Promise<ScanItemOutput> {
  return scanItemFlow(input);
}

const prompt = ai.definePrompt({
  name: 'scanItemPrompt',
  input: {schema: ScanItemInputSchema},
  output: {schema: ScanItemOutputSchema},
  tools: [getProductDetails],
  prompt: `You are an expert product identifier working in a grocery store.
Your goal is to accurately identify the product shown in the image and retrieve its details.

1.  Analyze the image and determine the full, specific product name.
    For example, if you see a can of Coca-Cola, identify it as "Cola 12-pack".
    If you see a yellow fruit, identify it as "Organic Bananas".
2.  After identifying the product name, you MUST use the getProductDetails tool to retrieve its price and category.
3.  Return the final product name, price, and category.

Photo: {{media url=photoDataUri}}

Identify the product, use the tool to get its details, and provide the final information in the specified JSON format.`,
});

const scanItemFlow = ai.defineFlow(
  {
    name: 'scanItemFlow',
    inputSchema: ScanItemInputSchema,
    outputSchema: ScanItemOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI failed to identify the item.');
    }
    return output;
  }
);
