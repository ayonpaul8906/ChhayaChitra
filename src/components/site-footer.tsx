import { Camera } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 py-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} ChaayaChitra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
