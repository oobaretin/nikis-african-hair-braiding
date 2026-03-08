import { Metadata } from 'next';
import ServiceMenu from '@/components/sections/ServiceMenu';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: "Services - Niki's African Hair Braiding | African Braids & Boho Hair in Katy, Texas",
  description: "Explore our African hair braiding and boho hair services including box braids, goddess braids, cornrows, and faux locs. Fast, professional, and gentle styling in Katy, Texas.",
  keywords: "African hair braiding services, boho hair, box braids, goddess braids, cornrows, faux locs, Katy Texas, knotless braids",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-32">
      <ServiceMenu />
      <Testimonials />
    </div>
  );
}
