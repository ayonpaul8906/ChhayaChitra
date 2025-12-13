import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="bg-card/20">
      <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-headline text-4xl font-bold text-primary">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80">
            Have a project in mind or want to book a session? Let's talk.
          </p>
          <div className="flex space-x-4 pt-4">
            {[
              { icon: <Instagram />, label: 'Instagram' },
              { icon: <Facebook />, label: 'Facebook' },
              { icon: <Twitter />, label: 'Twitter' },
            ].map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                aria-label={social.label}
              >
                {social.icon}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative rounded-lg bg-background p-8 shadow-2xl">
            {/* Sprocket holes effect */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-around py-4 -translate-x-full">
                {Array(8).fill(0).map((_, i) => <div key={i} className="w-2 h-4 bg-muted rounded-sm my-1"></div>)}
            </div>
             <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-around py-4 translate-x-full">
                {Array(8).fill(0).map((_, i) => <div key={i} className="w-2 h-4 bg-muted rounded-sm my-1"></div>)}
            </div>

          <form className="space-y-6">
            <Input
              type="text"
              placeholder="Your Name"
              className="border-0 border-b-2 bg-transparent ring-offset-0 focus:ring-0 focus-visible:ring-0"
            />
            <Input
              type="email"
              placeholder="Your Email"
               className="border-0 border-b-2 bg-transparent ring-offset-0 focus:ring-0 focus-visible:ring-0"
            />
            <Textarea
              placeholder="Your Message"
               className="border-0 border-b-2 bg-transparent ring-offset-0 focus:ring-0 focus-visible:ring-0"
            />
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
