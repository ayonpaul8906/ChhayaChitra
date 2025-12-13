import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  const portrait = PlaceHolderImages.find(
    (img) => img.id === 'photographer-portrait'
  );
  const polaroid1 = PlaceHolderImages.find(
    (img) => img.id === 'about-polaroid-1'
  );
  const polaroid2 = PlaceHolderImages.find(
    (img) => img.id === 'about-polaroid-2'
  );
  const camera = PlaceHolderImages.find((img) => img.id === 'about-camera');

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative h-96 lg:h-[500px]">
            {portrait && (
              <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl lg:left-1/4 lg:top-1/4">
                <Image
                  src="/joy2.jpg"
                  alt={portrait.description}
                  data-ai-hint={portrait.imageHint}
                  width={300}
                  height={800}
                  className="object-cover"
                />
              </Card>
            )}
            {polaroid1 && (
              <Card className="absolute bottom-0 left-4 rotate-[-15deg] transform overflow-hidden bg-white p-2 pb-8 shadow-lg transition-transform hover:scale-110 hover:rotate-[-5deg]">
                <Image
                  src={polaroid1.imageUrl}
                  alt={polaroid1.description}
                  data-ai-hint={polaroid1.imageHint}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </Card>
            )}
            {polaroid2 && (
              <Card className="absolute right-4 top-0 rotate-[10deg] transform overflow-hidden bg-white p-2 pb-8 shadow-lg transition-transform hover:scale-110 hover:rotate-[2deg]">
                <Image
                  src={polaroid2.imageUrl}
                  alt={polaroid2.description}
                  data-ai-hint={polaroid2.imageHint}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </Card>
            )}
            {camera && (
              <div className="absolute bottom-10 right-10 hidden lg:block">
                 <Image
                  src="/camera.png"
                  alt={camera.description}
                  data-ai-hint={camera.imageHint}
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
            )}
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-headline text-4xl font-bold text-primary">
              About Me
            </h2>
            <p className="text-lg text-foreground/80">
              I am a passionate photographer with a love for telling stories through my lens. My journey began over a decade ago, and since then, I've dedicated myself to capturing the fleeting moments that make life beautiful.
            </p>
            <p className="text-foreground/70">
              From the raw emotion of a wedding day to the quiet majesty of a wildlife encounter, I strive to create images that are not only visually stunning but also deeply meaningful. My style is a blend of cinematic, artistic, and authentic, ensuring that every photo is a timeless piece of art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
