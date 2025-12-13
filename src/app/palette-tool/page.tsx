import { ColorPaletteGenerator } from '@/components/color-palette-generator';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function PaletteToolPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <section className="bg-background">
          <div className="container mx-auto text-center">
            <h1 className="font-headline text-4xl font-bold text-primary">
              AI Color Palette Harmonizer
            </h1>
            <p className="mt-2 text-lg text-foreground/80">
              Generate a harmonious color palette for your website based on your
              portfolio images.
            </p>
            <div className="mt-12">
              <ColorPaletteGenerator />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
