'use server';

/**
 * @fileOverview An AI tool to suggest a color palette that harmonizes with the colors in the image portfolio.
 *
 * - harmonizePortfolioColors - A function that suggests a color palette for the website's UI elements to complement the photographer's work.
 * - HarmonizePortfolioColorsInput - The input type for the harmonizePortfolioColors function.
 * - HarmonizePortfolioColorsOutput - The return type for the harmonizePortfolioColors function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HarmonizePortfolioColorsInputSchema = z.object({
  imageUrls: z
    .array(z.string())
    .describe('An array of image URLs from the photographer’s portfolio.'),
  uiElements: z
    .array(z.string())
    .optional()
    .describe('Optional list of UI elements to be harmonized with the portfolio colors.'),
});
export type HarmonizePortfolioColorsInput = z.infer<typeof HarmonizePortfolioColorsInputSchema>;

const HarmonizePortfolioColorsOutputSchema = z.object({
  colorPalette: z
    .array(z.string())
    .describe(
      'An array of color hex codes that harmonize with the colors in the image portfolio.'
    ),
  suggestions: z
    .string()
    .optional()
    .describe('Additional suggestions or rationale for the chosen color palette.'),
});

export type HarmonizePortfolioColorsOutput = z.infer<typeof HarmonizePortfolioColorsOutputSchema>;

export async function harmonizePortfolioColors(input: HarmonizePortfolioColorsInput): Promise<HarmonizePortfolioColorsOutput> {
  return harmonizePortfolioColorsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'harmonizePortfolioColorsPrompt',
  input: {
    schema: HarmonizePortfolioColorsInputSchema,
  },
  output: {
    schema: HarmonizePortfolioColorsOutputSchema,
  },
  prompt: `You are an expert color palette designer for photographers’ websites.

You will receive an array of image URLs from the photographer’s portfolio and a list of UI elements to be harmonized.

Based on the colors in the images, suggest a color palette (an array of hex codes) that would best complement the photographer’s work and create a professional, cohesive look for the website.

{% if uiElements %}
Consider the following UI elements when suggesting the color palette: {{uiElements}}.
{% endif %}

Image URLs: {{imageUrls}}

Respond with the color palette and any additional suggestions or rationale for the chosen colors.
`,
});

const harmonizePortfolioColorsFlow = ai.defineFlow(
  {
    name: 'harmonizePortfolioColorsFlow',
    inputSchema: HarmonizePortfolioColorsInputSchema,
    outputSchema: HarmonizePortfolioColorsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

