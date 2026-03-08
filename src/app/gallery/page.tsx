import { Metadata } from 'next';
import Gallery from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: "Gallery - Niki's African Hair Braiding | Hair Braiding Portfolio in Katy, Texas",
  description: "View our stunning portfolio of African hair braiding and boho hair work. See before and after photos, different braid styles, and our professional results in Katy, Texas.",
  keywords: "hair braiding gallery, African braids portfolio, boho hair photos, Katy Texas hair gallery, Niki's",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 md:pt-32">
      <Gallery />
    </div>
  );
}
