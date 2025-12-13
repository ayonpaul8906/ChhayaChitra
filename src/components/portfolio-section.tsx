'use client';

import * as React from 'react';
import Image from 'next/image';
import { portfolioItems, type PortfolioItem } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Rows3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PortfolioSection() {
  const [viewMode, setViewMode] = React.useState<'reel' | 'grid'>('reel');
  const [selectedItem, setSelectedItem] = React.useState<PortfolioItem | null>(
    null
  );

  return (
    <section id="portfolio" className="bg-card/20">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-4xl font-bold text-primary">
            My Works
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'reel' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('reel')}
              aria-label="Reel View"
            >
              <Rows3 className="h-5 w-5" />
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
            >
              <LayoutGrid className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          className={cn('flex transition-all duration-500', {
            'overflow-x-auto space-x-4 pb-4': viewMode === 'reel',
            'flex-wrap gap-4 justify-center': viewMode === 'grid',
          })}
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={cn('group relative cursor-pointer overflow-hidden rounded-lg shadow-lg', {
                'flex-shrink-0 w-80': viewMode === 'reel',
                'w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)]': viewMode === 'grid',
              })}
              onClick={() => setSelectedItem(item)}
            >
              <Image
                src={item.image.imageUrl}
                alt={item.title}
                data-ai-hint={item.image.imageHint}
                width={viewMode === 'reel' ? 320 : 600}
                height={viewMode === 'reel' ? 480 : 900}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-full flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedItem && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <Image
                  src={selectedItem.image.imageUrl}
                  alt={selectedItem.title}
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>
              <div className="flex flex-col p-6">
                <DialogHeader>
                  <DialogTitle className="font-headline text-3xl text-primary">
                    {selectedItem.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    {selectedItem.date}
                  </DialogDescription>
                </DialogHeader>
                <p className="mt-4 flex-1 text-foreground/80">
                  {selectedItem.description}
                </p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                  {selectedItem.category}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
