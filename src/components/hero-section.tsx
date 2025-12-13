import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bg');

  return (
    <section
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center p-0"
    >
      {heroImage && (
        <Image
          src="/banner.jpg"
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          priority
          className="object-cover brightness-50"
        />
      )}
      <div className="relative z-10 text-center text-white">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
          ChhayaChitra
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Capturing stories through my lens.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="mouse-scroll"></div>
      </div>
      <style jsx>{`
        .mouse-scroll {
          width: 24px;
          height: 40px;
          border: 2px solid var(--primary-hsl);
          border-radius: 12px;
          position: relative;
        }
        .mouse-scroll::before {
          content: '';
          width: 4px;
          height: 8px;
          background: var(--primary-hsl);
          border-radius: 2px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll-animation 2s infinite;
        }
        @keyframes scroll-animation {
          0% {
            top: 8px;
            opacity: 1;
          }
          100% {
            top: 20px;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
