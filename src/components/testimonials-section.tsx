import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export function TestimonialsSection() {
  const rotations = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2'];

  return (
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-4xl font-bold text-primary">
          From My Clients
        </h2>
        <p className="mt-2 text-lg text-foreground/80">
          Kind words from people I've worked with.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`w-80 transform bg-secondary p-4 pb-12 shadow-lg transition-transform hover:scale-105 hover:z-10 ${rotations[index % rotations.length]}`}
            >
              <CardContent className="relative pt-6">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                   <div className="h-6 w-6 rounded-full bg-primary/50 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                   </div>
                </div>
                <p className="italic text-foreground/90">"{testimonial.quote}"</p>
                <div className="mt-4 text-right">
                  <p className="font-bold text-accent">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
