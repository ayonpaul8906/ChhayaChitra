import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Aperture, Camera, Iso, ShutterSpeed } from 'lucide-react'; // Using lucide-react, might need to create custom icons if these don't exist

const CustomIcon = ({ name }: { name: string }) => {
    // A placeholder for custom icons if needed
    if (name === "ISO") return <span className="font-bold text-xs">ISO</span>
    if (name === "Aperture") return <Aperture className="w-4 h-4"/>
    if (name === "Shutter") return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 7-5 5-5-5"/><path d="m7 17 5-5 5 5"/></svg>
    return null;
}

export function BehindTheLensSection() {
  const btsBefore = PlaceHolderImages.find((img) => img.id === 'bts-before');
  const btsAfter = PlaceHolderImages.find((img) => img.id === 'bts-after');
  const btsSetup = PlaceHolderImages.find((img) => img.id === 'bts-setup');

  const btsItems = [
    {
      title: 'The Shot vs. The Edit',
      before: btsBefore,
      after: btsAfter,
      settings: { iso: '100', aperture: 'f/2.8', shutter: '1/125s' },
    },
    {
      title: 'Studio Setup',
      image: btsSetup,
      settings: { iso: '400', aperture: 'f/8', shutter: '1/200s' },
    },
  ];

  return (
    <section id="behind-the-lens" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold text-primary">
            Behind The Lens
            </h2>
            <p className="mt-2 text-lg text-foreground/80">A glimpse into the creative process.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {btsItems.map((item, index) => (
                <div key={index}>
                    <h3 className="font-headline text-2xl mb-4 text-center">{item.title}</h3>
                    {item.before && item.after ? (
                        <div className="grid grid-cols-2 gap-2 group relative">
                            <Image src={item.before.imageUrl} alt="Before" width={600} height={800} className="rounded-lg object-cover" />
                            <Image src={item.after.imageUrl} alt="After" width={600} height={800} className="rounded-lg object-cover" />
                             <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <div className="flex gap-6 text-white">
                                    <div className="text-center"><CustomIcon name="ISO" /><p>{item.settings.iso}</p></div>
                                    <div className="text-center"><CustomIcon name="Aperture" /><p>{item.settings.aperture}</p></div>
                                    <div className="text-center"><CustomIcon name="Shutter" /><p>{item.settings.shutter}</p></div>
                                </div>
                            </div>
                        </div>
                    ) : item.image && (
                         <div className="group relative">
                            <Image src={item.image.imageUrl} alt={item.title} width={800} height={600} className="rounded-lg object-cover" />
                             <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <div className="flex gap-6 text-white">
                                     <div className="text-center"><CustomIcon name="ISO" /><p>{item.settings.iso}</p></div>
                                    <div className="text-center"><CustomIcon name="Aperture" /><p>{item.settings.aperture}</p></div>
                                    <div className="text-center"><CustomIcon name="Shutter" /><p>{item.settings.shutter}</p></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
