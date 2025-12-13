import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function ServicesSection() {
  return (
    <section id="services" className="bg-card/20">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-4xl font-bold text-primary">
          Services
        </h2>
        <p className="mt-2 text-lg text-foreground/80">
          Tailored photography packages to meet your needs.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="group perspective-1000">
              <div className="relative h-96 w-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of the card */}
                <Card className="absolute backface-hidden h-full w-full overflow-hidden bg-background p-4 pb-16 shadow-xl">
                  <CardHeader className="flex flex-col items-center justify-center p-6">
                    <CardTitle className="font-headline text-2xl text-accent">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>

                {/* Back of the card */}
                <Card className="absolute backface-hidden h-full w-full rotate-y-180 overflow-hidden bg-secondary p-4 shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-left">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-accent" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
