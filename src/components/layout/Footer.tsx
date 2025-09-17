import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Dining',
      links: [
        { name: 'Menu', href: '#menu' },
        { name: 'Private Events', href: '#events' },
        { name: 'Gift Cards', href: '/gift-cards' },
        { name: 'Catering', href: '/catering' },
        { name: 'Reservations', href: '/reservations' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '#story' },
        { name: 'Team', href: '/team' },
        { name: 'Press', href: '/press' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'Hours & Location', href: '#location' },
        { name: 'Contact', href: '#contact' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Allergens', href: '/allergens' },
        { name: 'Parking', href: '/parking' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/moroccan-oasis' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/moroccan-oasis' },
  ];

  return (
    <footer className="bg-background border-t border-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">M</span>
                </div>
                <span className="font-bold text-xl">Moroccan Oasis</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Experience authentic Moroccan cuisine in an enchanting atmosphere. Our traditional
                recipes and warm hospitality transport you to the heart of Marrakech.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">reservations@moroccan-oasis.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  789 Mediterranean Lane, Culinary District
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Join Our Family</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email for special offers"
                  className="flex-1 px-3 py-2 text-sm border border-muted rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Subscribe to receive updates on special events and exclusive offers
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-muted bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Moroccan Oasis. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> in Morocco
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
