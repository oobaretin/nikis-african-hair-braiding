import { Metadata } from 'next';
import { About } from '@/components/sections/About';

export const metadata: Metadata = {
  title: "About Us - Niki's African Hair Braiding | African Braids & Boho Hair in Katy, Texas",
  description: "Learn about Niki's African hair braiding and boho hair seller. Our mission and commitment to exceptional African braids and boho styles in Katy, Texas. Fast, professional, and gentle.",
  keywords: "about Niki's African hair braiding, boho hair, hair braiding salon, Katy Texas, professional braiding, Niki",
};

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32">
      <About />
    </div>
  );
}
