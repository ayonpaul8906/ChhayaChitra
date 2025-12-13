import { cn } from '@/lib/utils';

export function ShutterLoader() {
  const blades = Array.from({ length: 6 });
  return (
    <div className="fixed inset-0 z-50 flex animate-loader-fade-out items-center justify-center bg-background">
      <div className="relative h-48 w-48 scale-150">
        {blades.map((_, i) => (
          <div
            key={i}
            className={cn(
              'absolute inset-0 origin-center animate-shutter-open'
            )}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div
              className="absolute left-1/2 top-0 h-1/2 w-1/4 -translate-x-1/2 bg-foreground"
              style={{
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                transform: `rotate(${i * 60}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="h-10 w-10 animate-pulse text-background"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
        </div>
      </div>
    </div>
  );
}
