'use server';
/**
 * @fileOverview AI-driven recipe suggestion based on cart items.
 *
 * - getRecipeSuggestion - A function that provides a recipe suggestion.
 * - RecipeSuggestionInput - The input type for the getRecipeSuggestion function.
 * - RecipeSuggestionOutput - The return type for the getRecipeSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeSuggestionInputSchema = z.object({
  cartItems: z
    .array(z.string())
    .describe("A list of product names currently in the user's shopping cart."),
});
export type RecipeSuggestionInput = z.infer<typeof RecipeSuggestionInputSchema>;

const RecipeSuggestionOutputSchema = z.object({
  recipeName: z.string().describe('The name of the suggested recipe.'),
  description: z.string().describe('A short, enticing description of the recipe.'),
  ingredients: z.array(z.string()).describe('A list of ingredients required for the recipe.'),
  instructions: z.array(z.string()).describe('Step-by-step cooking instructions.'),
  imageUrl: z.string().describe("A generated image of the final dish as a data URI."),
});
export type RecipeSuggestionOutput = z.infer<typeof RecipeSuggestionOutputSchema>;

export async function getRecipeSuggestion(
  input: RecipeSuggestionInput
): Promise<RecipeSuggestionOutput> {
  return recipeSuggestionFlow(input);
}

const recipeSuggestionFlow = ai.defineFlow(
  {
    name: 'recipeSuggestionFlow',
    inputSchema: RecipeSuggestionInputSchema,
    outputSchema: RecipeSuggestionOutputSchema,
  },
  async input => {
    // Generate the recipe text first
    const recipePrompt = ai.definePrompt({
      name: 'recipeTextPrompt',
      input: {schema: RecipeSuggestionInputSchema},
      output: {schema: z.object({
        recipeName: RecipeSuggestionOutputSchema.shape.recipeName,
        description: RecipeSuggestionOutputSchema.shape.description,
        ingredients: RecipeSuggestionOutputSchema.shape.ingredients,
        instructions: RecipeSuggestionOutputSchema.shape.instructions,
      })},
      prompt: `You are an expert chef who creates simple, delicious recipes.
      Based on the following items in a user's shopping cart, create a single, amazing recipe.
      The recipe should ideally use some of the items in the cart.
      Keep the recipe creative but approachable for a home cook.

      Cart Items:
      {{#each cartItems}}
      - {{this}}
      {{/each}}

      Generate a recipe name, a short description, a list of ingredients, and step-by-step instructions.
      Ensure the ingredients list includes items from the cart and any other necessary items.
      Format the output as JSON.`,
    });

    const { output: recipeDetails } = await recipePrompt(input);
    if (!recipeDetails) {
      throw new Error('Failed to generate recipe details.');
    }

    // Now, generate an image for the recipe
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate a photorealistic image of a delicious looking "${recipeDetails.recipeName}". The style should be bright, modern food photography.`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media) {
      throw new Error('Failed to generate recipe image.');
    }
    
    return {
      ...recipeDetails,
      imageUrl: media.url,
    };
  }
);
