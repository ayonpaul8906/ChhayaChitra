'use client';
import { useState } from 'react';
import {
  harmonizePortfolioColors,
  type HarmonizePortfolioColorsOutput,
} from '@/ai/flows/harmonize-portfolio-colors';
import { portfolioItems } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ColorPaletteGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] =
    useState<HarmonizePortfolioColorsOutput | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    setResult(null);
    const imageUrls = portfolioItems.slice(0, 5).map((item) => item.image.imageUrl);

    try {
      const response = await harmonizePortfolioColors({ imageUrls });
      setResult(response);
      toast({
        title: 'Palette Generated!',
        description: 'Your new color palette is ready.',
      });
    } catch (error) {
      console.error('Error generating color palette:', error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description:
          'There was an error generating the color palette. Please try again.',
      });
    }
    setLoading(false);
  };

  return (
    <Card className="mx-auto max-w-2xl bg-card/20">
      <CardHeader>
        <CardTitle>Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          Click the button below to use AI to analyze the first 5 images in your
          portfolio and suggest a harmonious color palette.
        </p>
        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {loading ? 'Analyzing Images...' : 'Generate Palette'}
        </Button>

        {result && (
          <div className="space-y-4 pt-4">
            <div>
              <h3 className="mb-2 font-semibold">Generated Color Palette:</h3>
              <div className="flex flex-wrap gap-4">
                {result.colorPalette.map((color, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="h-16 w-16 rounded-lg border-2 border-border"
                      style={{ backgroundColor: color }}
                    />
                    <p className="mt-1 text-xs font-mono">{color}</p>
                  </div>
                ))}
              </div>
            </div>
            {result.suggestions && (
              <div>
                <h3 className="mb-2 font-semibold">Suggestions:</h3>
                <p className="text-sm text-muted-foreground">
                  {result.suggestions}
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
