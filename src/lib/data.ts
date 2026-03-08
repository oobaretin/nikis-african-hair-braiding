import { Service, Testimonial, GalleryImage, BusinessHours, SocialLink } from '@/types';

export const services: Service[] = [
  {
    id: 'box-braids',
    name: 'Box Braids',
    description: 'Classic African box braids with premium synthetic or human hair extensions. Perfect for protective styling and low maintenance.',
    price: 120,
    duration: '4-6 hours',
    category: 'braids',
    features: [
      'Premium hair extensions included',
      'Scalp protection treatment',
      'Styling tips included',
      '2-week follow-up consultation'
    ],
    popular: true,
  },
  {
    id: 'boho-braids',
    name: 'Boho Braids',
    description: 'Trendy boho-style braids with loose, natural waves and effortless beauty for a free-spirited look.',
    price: 140,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Boho hair extensions included',
      'Custom wave pattern',
      'Natural styling techniques',
      'Maintenance guide included'
    ],
    popular: true,
  },
  {
    id: 'cornrows',
    name: 'Cornrows',
    description: 'Traditional African cornrow braids in various patterns and designs for a timeless, cultural look.',
    price: 80,
    duration: '2-3 hours',
    category: 'braids',
    features: [
      'Custom pattern design',
      'Scalp massage included',
      'Protective styling tips',
      'Touch-up recommendations'
    ],
  },
  {
    id: 'goddess-braids',
    name: 'Goddess Braids',
    description: 'Elegant goddess braids with added curls and waves for a stunning, versatile look.',
    price: 150,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Premium curly hair extensions',
      'Custom curl pattern',
      'Heat protection treatment',
      'Maintenance guide included'
    ],
  },
  {
    id: 'faux-locs',
    name: 'Faux Locs',
    description: 'Beautiful faux locs that mimic natural dreadlocks without the commitment.',
    price: 180,
    duration: '6-8 hours',
    category: 'braids',
    features: [
      'Premium loc hair included',
      'Custom length and thickness',
      'Installation care guide',
      '3-week follow-up included'
    ],
  },
  {
    id: 'braid-maintenance',
    name: 'Braid Maintenance',
    description: 'Professional maintenance service to keep your braids looking fresh and healthy.',
    price: 60,
    duration: '2-3 hours',
    category: 'maintenance',
    features: [
      'Scalp cleansing and conditioning',
      'Loose braid repair',
      'Edge touch-ups',
      'Styling refresh'
    ],
  },
  {
    id: 'consultation',
    name: 'Hair Consultation',
    description: 'Personalized consultation to determine the best braiding style for your hair type and lifestyle.',
    price: 25,
    duration: '30 minutes',
    category: 'consultation',
    features: [
      'Hair health assessment',
      'Style recommendations',
      'Maintenance planning',
      'Product recommendations'
    ],
  },
];

export const testimonials: Testimonial[] = [
  { id: '1', name: 'Giana Chavis', service: 'Braids', rating: 5, comment: "I had a great experience at Niki's. She was very professional and understanding. Talented with fast work getting the job done. Everything turned out perfect just how I wanted it. I couldn't thank Niki enough for helping me with my artistic hair style. I will be back thanks Niki!!!!", date: '2024-10-15' },
  { id: '2', name: 'Keane Clarke', service: 'Braids', rating: 5, comment: "After my first appointment, I knew I had to return. Niki is amazing. She understood how to braid my hair, hiding my flaws. I'm skeptical about trying new hairstylists, but Niki did an amazing job. After a month and 2 weeks, my hair still looked great. I returned and she ate it up. GREAT Job Niki. I'll keep coming.", date: '2024-06-15' },
  { id: '3', name: 'Hilda Iyasele', service: 'Braids', rating: 5, comment: "I moved down here last year and met Niki. I started making my hair and my daughter's with Niki for over a year now. She makes very neat braids and the braids are not painful, which is why my daughter loves making her hair with her.", date: '2024-03-15' },
  { id: '4', name: 'Seun Matthias', service: 'Braids', rating: 5, comment: "Wonderful stylist with the best touch. Her braids are very neat, painless and just well done.", date: '2024-10-15' },
  { id: '5', name: 'Isabel Ajibare', service: 'Braids', rating: 5, comment: "Nikki is absolutely amazing. I am stuck with her because I love the way she makes my hair.", date: '2024-10-15' },
  { id: '6', name: 'Princess Roberts', service: 'Boho Braids', rating: 5, comment: "I brought my daughter to get bohemian braids. They came out so perfect. She was fast, the area was clean and very nice. Will definitely go back again.", date: '2023-03-15' },
  { id: '7', name: 'G Taylor', service: 'Crochet', rating: 5, comment: "Niki has been doing my crochet hair for a while now. She's a very nice and polite lady. Niki does an excellent job and she's very fast. I will continue to go to her. Thanks Niki!", date: '2024-04-15' },
  { id: '8', name: 'karo A.', service: 'Braids', rating: 5, comment: "My braids came out amazing, and I will be back to try out other braided hairstyles! Her service was spectacular and she offers reasonable prices for great work. I will definitely recommend others to get their hair braided here.", date: '2024-03-15' },
  { id: '9', name: 'Theresa S', service: 'Boho Braids', rating: 5, comment: "She did an amazing job on my hair. I got boho braids for the first time, and they came out really nice. They were not painful at all, and they were a reasonable price. My mom got cornrows and they came out really nice too.", date: '2024-03-15' },
  { id: '10', name: 'Tiffany Collins', service: 'Braids', rating: 5, comment: "Not only is Niki a fast braider, but she's also very detailed. Every time I get my hair braided, I get so many compliments. My braids last for a long time, and she offers retouching appointments. I highly recommend Niki for any types of braid styles.", date: '2023-03-15' },
  { id: '11', name: 'Ramata Traore', service: 'Braids', rating: 5, comment: "I recommend this place to anyone looking for professional and quick service! Niki's was super nice and fast. Her braiding technique is neat. I have been looking for a braid salon since moving to Houston and happy to have found Niki's. She was on time and ready to start as soon as I walked in. I love this place and I recommend to anyone!", date: '2023-03-15' },
  { id: '12', name: 'Ciara Everson', service: 'Braids', rating: 5, comment: "Amazing customer service. Extremely lightweight and light handed. The service was very fast. Will highly recommend 10 out of 10. Plus the prices are reasonable and fair.", date: '2025-03-07' },
  { id: '13', name: 'Bola Akinola', service: 'Braids', rating: 5, comment: "My stylist is pleasant and does great, neat work! She also always fits me in last minute which I appreciate because not too many stylists allow same day appointments.", date: '2025-03-01' },
  { id: '14', name: 'Pam Zee', service: 'Braids', rating: 5, comment: "Best Stylist Ever. Nikki is amazing, prompt and efficient. I'm always eager to try new hairstyles, because Nikki brings it each time. Book her immediately, you will never go anywhere else.", date: '2023-03-15' },
  { id: '15', name: 'Eni Egbe', service: 'Knotless Braids', rating: 5, comment: "She was very pleasant and did my hair in great timing—4 hours for small/medium knotless braids (collarbone length). They look very neat and it wasn't painful. I'll definitely be back again.", date: '2023-03-15' },
];

export const galleryImages: GalleryImage[] = [];

export const businessHours: BusinessHours[] = [
  { day: 'Monday', open: '9:00 AM', close: '7:00 PM' },
  { day: 'Tuesday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Wednesday', open: '9:00 AM', close: '7:00 PM' },
  { day: 'Thursday', open: '9:00 AM', close: '7:00 PM' },
  { day: 'Friday', open: '8:00 AM', close: '9:00 PM' },
  { day: 'Saturday', open: '8:00 AM', close: '9:00 PM' },
  { day: 'Sunday', open: '9:00 AM', close: '7:00 PM' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/nikisafricanhair',
    icon: 'instagram',
  },
  {
    platform: 'Nextdoor',
    url: 'https://nextdoor.com/business/nikis-african-hair-braiding',
    icon: 'nextdoor',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/nikisafricanhair',
    icon: 'facebook',
  },
];

export const contactInfo = {
  phone: '+12814083091',
  email: 'info@nikisafricanhair.com',
  address: '5303 S Mason Rd, Katy, TX 77450',
  location: "Niki's African hair braiding and boho hair seller",
  hours: businessHours,
};
