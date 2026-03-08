'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-600 z-10" />
        <div className="w-full h-full bg-[url('/images/hero-braids.jpg')] bg-cover bg-center bg-no-repeat opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-kablammo text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Niki&apos;s African Hair Braiding
            <span className="block text-primary-200">African Hair Braiding & Boho Hair</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fast, professional, and gentle hair braiding services in Katy, Texas. 
            Beautiful African braids and boho styles that enhance your natural beauty.
          </p>

          <div className="flex justify-center mb-16">
            <Link href="/services">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                Book Your Appointment
              </Button>
            </Link>
          </div>

          {/* Trust Indicators - inline with content, spaced from scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">20+</div>
              <div className="text-white/80 text-sm mt-1">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">1000+</div>
              <div className="text-white/80 text-sm mt-1">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">5★</div>
              <div className="text-white/80 text-sm mt-1">Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
