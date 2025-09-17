// components/hero/SplitHero.tsx
'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, UtensilsCrossed } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleReserveTable = () => {
    router.push('/reservations');
  };

  const handleViewMenu = () => {
    router.push('/menu');
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <MapPin className="h-4 w-4" />
              Authentic Moroccan Cuisine
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Experience the Magic of
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Moroccan Flavors
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Journey through the aromatic spices and traditional recipes of Morocco. Our expert
              chefs craft authentic tagines, couscous, and pastries in an enchanting atmosphere.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                'Traditional Tagine Dishes',
                'Fresh Baked Breads',
                'Imported Spices',
                'Halal Certified',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <UtensilsCrossed className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group px-7 text-base" onClick={handleReserveTable}>
                Reserve Table
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base" onClick={handleViewMenu}>
                View Menu
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/moroccan-restaurant.jpg"
                  alt="Moroccan restaurant interior with traditional lanterns and archways"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium shadow">
                Now Serving
              </div>
            </div>

            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Open Today</p>
              <p className="text-sm">
                <span className="font-semibold">11:30</span> - 22:00
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Reviews</p>
              <p className="text-sm">
                <span className="font-semibold">4.9</span> Stars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
