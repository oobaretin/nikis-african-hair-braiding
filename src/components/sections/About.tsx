'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-6">
              About Niki&apos;s African Hair Braiding
            </h2>
            
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              Niki&apos;s African hair braiding and boho hair seller is led by Niki, a professional 
              braider with years of experience, committed to delivering exceptional African hair 
              braiding and boho styles designed to enhance and celebrate your natural beauty. 
              We prioritize quality, speed, and gentleness to ensure every client leaves satisfied and beautiful.
            </p>
            
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              We are professional braiders with years of experience. Our happiness is 
              the customer happiness. Every appointment is an opportunity to create something 
              beautiful that reflects your unique style and personality, backed by expertise 
              and genuine care for our clients. Fast, neat, and gentle - that&apos;s the Niki&apos;s promise.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-primary-600 mb-1">20+</div>
                <div className="text-secondary-600 text-sm">Years Experience</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-accent-600 mb-1">1000+</div>
                <div className="text-secondary-600 text-sm">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
