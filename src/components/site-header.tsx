'use client';

import Link from 'next/link';
import { Camera, Palette } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-40 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">
            ChhayaChitra
          </span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Link href="/palette-tool" passHref>
             <Button variant="ghost" size="icon" aria-label="Color Palette Tool">
               <Palette className="h-5 w-5" />
             </Button>
           </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
