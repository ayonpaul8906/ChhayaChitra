import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export type PortfolioItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  image: string | ImagePlaceholder;
};

const findImage = (id: string) => {
  const img = PlaceHolderImages.find((img) => img.id === id);
  if (!img) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return img;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Lakeside Vows',
    date: 'June 2023',
    description: 'A serene wedding ceremony by the calm lake, capturing the couple\'s intimate moments.',
    category: 'Weddings',
    image: findImage('portfolio-wedding'),
  },
  {
    id: '2',
    title: 'Urban Elegance',
    date: 'September 2023',
    description: 'A high-fashion shoot exploring the contrast between modern architecture and classic style.',
    category: 'Fashion',
    image: findImage('portfolio-fashion'),
  },
  {
    id: '3',
    title: 'Savanna King',
    date: 'April 2022',
    description: 'A powerful shot of a male lion, showcasing its majestic presence in the wild.',
    category: 'Wildlife',
    image: findImage('portfolio-wildlife'),
  },
  {
    id: '4',
    title: 'Joyful Gaze',
    date: 'November 2023',
    description: 'A candid portrait capturing a moment of pure joy and laughter.',
    category: 'Portraits',
    image: findImage('portfolio-portrait'),
  },
  {
    id: '5',
    title: 'Concrete Dreams',
    date: 'July 2023',
    description: 'An abstract look at cityscapes, focusing on lines, shadows, and form.',
    category: 'Architecture',
    image: findImage('portfolio-architecture'),
  },
  {
    id: '6',
    title: 'Culinary Art',
    date: 'February 2024',
    description: 'A feast for the eyes, this series captures the artistry of gourmet food presentation.',
    category: 'Food',
    image: findImage('portfolio-food'),
  },
  {
    id: '7',
    title: 'Corporate Vision',
    date: 'May 2023',
    description: 'Capturing the energy and collaboration of a major corporate event.',
    category: 'Events',
    image: findImage('portfolio-event'),
  },
  {
    id: '8',
    title: 'Sleek Design',
    date: 'October 2023',
    description: 'A product photoshoot emphasizing clean lines and modern aesthetics.',
    category: 'Product',
    image: findImage('portfolio-product'),
  },
];

export type Service = {
  title: string;
  description: string;
  details: string[];
};

export const services: Service[] = [
  {
    title: 'Weddings',
    description: 'Capturing your special day with elegance and emotion.',
    details: ['Full-day coverage', 'Engagement session', 'Custom album design', 'Online gallery'],
  },
  {
    title: 'Portraits',
    description: 'Creative and personal portrait sessions for individuals and families.',
    details: ['Studio or location shoot', 'Professional retouching', 'Multiple outfit changes', 'Digital and print options'],
  },
  {
    title: 'Fashion',
    description: 'High-end fashion and editorial photography for brands and designers.',
    details: ['Lookbook creation', 'Campaign imagery', 'Model casting assistance', 'On-location or studio'],
  },
  {
    title: 'Wildlife',
    description: 'Documenting the beauty of nature and its inhabitants.',
    details: ['Guided expeditions', 'Fine art prints', 'Stock photography licensing', 'Conservation projects'],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  event: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'The photos are absolutely breathtaking! You captured the essence of our wedding day perfectly. We couldn\'t be happier.',
    author: 'Emily & James',
    event: 'Wedding',
  },
  {
    quote: 'An incredibly professional and creative photographer. The final images for our campaign exceeded all expectations.',
    author: 'Aria Clothing Co.',
    event: 'Fashion Shoot',
  },
  {
    quote: 'I\'ve never felt so comfortable in front of a camera. The portraits are stunning and truly represent me. Thank you!',
    author: 'Sophia L.',
    event: 'Portrait Session',
  },
];
