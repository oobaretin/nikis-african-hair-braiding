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
  {
    id: '1',
    name: 'Janice Blount',
    service: 'Twisting',
    rating: 5,
    comment: 'This is 50 minute drive for me and is 100% worth it. Do not hesitate. I was referred her by a coworker after I saw her hair I just had to know who did it and I am 100% satisfied. Very clean, polite, and swift. Not heavy handed at all.',
    date: '2024-06-15',
  },
  {
    id: '2',
    name: 'Larrina Rogers',
    service: 'Braids',
    rating: 5,
    comment: 'Mrs. Stella is hands down, one of the BEST! She took me as a last minute client and I am grateful for her! She\'s so nice, very professional and has a very neat/clean space! She has definitely gained me as a regular client! My hair turned out beautiful.',
    date: '2024-01-15',
  },
  {
    id: '3',
    name: 'Angela Kulhanek',
    service: 'Braids',
    rating: 5,
    comment: 'Stella put beautiful braids in my daughter\'s hair (she\'s 9–first time getting braids)!! The braids with the beads were so beautiful!! She was very happy! Stella was gentle AND very fast at braiding!! (Was fun to watch!!) Stella was kind and professional! Definitely going to come back when we need braids again!!',
    date: '2023-01-15',
  },
  {
    id: '4',
    name: 'Lex Leak',
    service: 'Braids & Crochet',
    rating: 5,
    comment: 'Stella is amazing! I found her on Google and texted her. She responded quickly for my request for braiding my daughter\'s hair and crochet braids for me on a Saturday. She finished us both in 3 hours! Super professional and so fast!! We have been coming back ever since.',
    date: '2019-01-15',
  },
  {
    id: '5',
    name: 'Jahira Santana',
    service: 'Braids',
    rating: 5,
    comment: 'Stella was a life saver! So I had an appointment else where that backed out on me last minute. I reached out to various businesses they either refused to do it or never responded. So I called her Sunday and that same day she fit me in. She did an amazing job!',
    date: '2021-01-15',
  },
  {
    id: '6',
    name: 'Michelle Jennings',
    service: 'Box Braids',
    rating: 5,
    comment: 'I called Stella yesterday at 3, I was at her house at 4, back at my own house by 8:30. I got long, small box braids! That\'s what you call excellent customer service. She was very nice and hospitable. I would highly recommend Stella if you need braids.',
    date: '2018-01-15',
  },
  {
    id: '7',
    name: 'Shon B',
    service: 'Braids',
    rating: 5,
    comment: 'Stella is an angel! She took both of my girls last minute after our other braider ghosted us! I\'m glad she did so because we were blessed with a better person and experience! Stella wasn\'t heavy handed and her work is fast and neat! She is amazing!',
    date: '2021-01-15',
  },
  {
    id: '8',
    name: 'Kaeylor Joseph',
    service: 'Braids',
    rating: 5,
    comment: 'I love my braids. Stella did a great job. First and foremost, she didn\'t have my edges tight and my braids lasted. Thanks so much. She is very, very fast and has my hair very neat. Thank you Stella. See you soon.',
    date: '2019-01-15',
  },
  {
    id: '9',
    name: 'Megan Dickerson',
    service: 'Box Braids',
    rating: 5,
    comment: 'This kind young lady was fast, efficient, and her braiding studio was clean. She had me out of the chair in four hours...you can\'t beat that. My braids are neat and they look like the photo! I\'d recommend her again and again. Stella you have a customer for life!',
    date: '2019-01-15',
  },
  {
    id: '10',
    name: 'Faith Ortiz',
    service: 'Knotless Braids',
    rating: 5,
    comment: 'I was referred to Stella by a friend! Stella is the fastest most accurate Braider I\'ve ever had do my hair! I got medium knotless braids and she finished them BY HERSELF in less than 3 hours!!! My hair looks beautiful and neat and tight!',
    date: '2021-01-15',
  },
  {
    id: '11',
    name: 'Keda Taytay',
    service: 'Tribal Braids',
    rating: 5,
    comment: 'Love Stella! Got tribal braid style with box braids. 2 hours! She is so fast. And so many compliments about how clean the braids are.',
    date: '2023-01-15',
  },
  {
    id: '12',
    name: 'Kennedye Miller',
    service: 'Box Braids',
    rating: 5,
    comment: 'She is such a kind woman, with a very comfortable setting. She does amazing work for such a reasonable price! Her braids are neat and very lightweight, minimal pain. Took about 3.5 hours for medium box braids to my back, which is amazing considering it normally takes 6+ hours anywhere else. I highly recommend!',
    date: '2018-01-15',
  },
];

export const galleryImages: GalleryImage[] = [];

export const businessHours: BusinessHours[] = [
  { day: 'Monday', open: '7:00 AM', close: '7:00 PM' },
  { day: 'Tuesday', open: '7:00 AM', close: '7:00 PM' },
  { day: 'Wednesday', open: '7:00 AM', close: '7:00 PM' },
  { day: 'Thursday', open: '7:00 AM', close: '7:00 PM' },
  { day: 'Friday', open: '7:00 AM', close: '7:00 PM' },
  { day: 'Saturday', open: '7:00 AM', close: '7:00 PM' },
  { day: 'Sunday', open: '7:00 AM', close: '7:00 PM' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/magicbraiding',
    icon: 'instagram',
  },
  {
    platform: 'Nextdoor',
    url: 'https://nextdoor.com/business/magic-braiding',
    icon: 'nextdoor',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/magicbraiding',
    icon: 'facebook',
  },
];

export const contactInfo = {
  phone: '+18325267055',
  email: 'info@magicbraiding.com',
  address: 'Richmond Texas 77407',
  location: 'Magic Braiding',
  hours: businessHours,
};
