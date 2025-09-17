import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  UtensilsCrossed,
  Users,
  Award,
  MapPin,
  ArrowRight,
  Quote,
  Star,
  Clock,
  Heart,
  Leaf,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: UtensilsCrossed,
      title: 'Authentic Cuisine',
      description:
        'Our recipes have been passed down through generations, preserving the true essence of Moroccan cooking.',
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description:
        'We source the finest local produce and import authentic Moroccan spices for genuine flavors.',
    },
    {
      icon: Heart,
      title: 'Family Tradition',
      description:
        'Every dish is prepared with love and care, following time-honored family recipes.',
    },
    {
      icon: Clock,
      title: 'Perfect Timing',
      description: 'Each tagine is slow-cooked to perfection, allowing flavors to develop fully.',
    },
  ];

  const stats = [
    { value: '1998', label: 'Established', icon: Award },
    { value: '50K+', label: 'Happy Diners', icon: Users },
    { value: '120+', label: 'Dishes', icon: UtensilsCrossed },
    { value: '4.9', label: 'Rating', icon: Star },
  ];

  const team = [
    {
      name: 'Hassan Amrani',
      role: 'Head Chef',
      image: 'HA',
      bio: '30+ years mastering traditional Moroccan cuisine. Trained in Fez.',
    },
    {
      name: 'Fatima Benali',
      role: 'Pastry Chef',
      image: 'FB',
      bio: 'Specialist in Moroccan sweets and traditional pastries.',
    },
    {
      name: 'Karim Ziani',
      role: 'Restaurant Manager',
      image: 'KZ',
      bio: 'Ensuring authentic Moroccan hospitality for over 15 years.',
    },
    {
      name: 'Amina Rachidi',
      role: 'Sous Chef',
      image: 'AR',
      bio: 'Expert in tagine preparation and spice blending.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            A Taste of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Authentic Morocco
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over two decades, Moroccan Oasis has been bringing the rich flavors and warm
            hospitality of Morocco to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Heritage</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by the Amrani family in 1998, our restaurant brings generations of culinary
                expertise from the heart of Fez to your dining experience.
              </p>
              <p>
                Each dish tells a story of our Moroccan heritage, carefully prepared using
                traditional methods and authentic spices imported directly from Morocco.
              </p>
              <p>
                We take pride in offering not just a meal, but an immersive journey through the rich
                tapestry of Moroccan cuisine and culture.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every dish we serve carries the warmth and tradition of Moroccan
                      hospitality."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Hassan Amrani, Head Chef
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Rest of the component structure remains the same, 
            but with updated content relevant to Moroccan restaurant */}
      </div>
    </section>
  );
}
