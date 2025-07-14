
'use server';
/**
 * @fileOverview AI-driven inventory insights generation.
 *
 * - getInventoryInsights - Analyzes inventory data to provide actionable insights.
 * - InventoryInsightsInput - The input type for the getInventoryInsights function.
 * - InventoryInsightsOutput - The return type for the getInventoryInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DataPointSchema = z.object({
  date: z.string(),
  overstock: z.number(),
  understock: z.number(),
  expired: z.number(),
});

const InventoryInsightsInputSchema = z.object({
  data: z.array(DataPointSchema).describe("A time-series array of inventory data points."),
});
export type InventoryInsightsInput = z.infer<typeof InventoryInsightsInputSchema>;

const InventoryInsightsOutputSchema = z.object({
  positiveInsight: z.string().describe("A key positive observation from the data, e.g., 'Understock levels have been consistently decreasing.'"),
  negativeInsight: z.string().describe("A key area of concern from the data, e.g., 'Overstocking has sharply increased in the last quarter.'"),
  recommendation: z.string().describe("A single, actionable recommendation based on the most critical insight, e.g., 'Focus on reducing overstock by implementing a just-in-time ordering system for categories with high spoilage rates.'"),
});
export type InventoryInsightsOutput = z.infer<typeof InventoryInsightsOutputSchema>;

export async function getInventoryInsights(
  input: InventoryInsightsInput
): Promise<InventoryInsightsOutput> {
  return inventoryInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'inventoryInsightsPrompt',
  input: {schema: InventoryInsightsInputSchema},
  output: {schema: InventoryInsightsOutputSchema},
  prompt: `You are a senior inventory management analyst for a major retailer like Walmart. Your task is to analyze the provided time-series data on inventory status and provide concise, actionable insights for management.

The data represents monthly counts of items in different states:
- overstock: Items with excess inventory.
- understock: Items that are running low or out of stock.
- expired: Items that have passed their expiry date.

Your analysis should be brief and to the point. Identify the most significant positive trend, the most concerning negative trend, and provide one high-impact recommendation.

Here is the data:
{{#each data}}
Date: {{date}}, Overstocked: {{overstock}}, Understocked: {{understock}}, Expired: {{expired}}
{{/each}}

Based on this data, provide your analysis in the specified JSON format. The insights should be clear, professional, and directly derived from the data trends.
`,
});

const inventoryInsightsFlow = ai.defineFlow(
  {
    name: 'inventoryInsightsFlow',
    inputSchema: InventoryInsightsInputSchema,
    outputSchema: InventoryInsightsOutputSchema,
  },
  async input => {
    if (input.data.length === 0) {
      return {
        positiveInsight: "No data available for this period.",
        negativeInsight: "No data available for this period.",
        recommendation: "Select a valid time range to see insights."
      };
    }

    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI failed to generate inventory insights.');
    }
    return output;
  }
);
