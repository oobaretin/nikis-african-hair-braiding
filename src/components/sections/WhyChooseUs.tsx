'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  UserGroupIcon, 
  SparklesIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: HeartIcon,
    title: 'Passion for Beauty',
    description: 'We believe every client deserves to feel beautiful and confident in their own skin.'
  },
  {
    icon: UserGroupIcon,
    title: 'Expert Team',
    description: 'Our skilled professionals have years of experience in hair braiding and styling.'
  },
  {
    icon: SparklesIcon,
    title: 'Premium Quality',
    description: 'We use only the highest quality hair extensions and professional-grade products.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safe & Clean',
    description: 'Our salon maintains the highest standards of cleanliness and safety protocols.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional service and results that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
