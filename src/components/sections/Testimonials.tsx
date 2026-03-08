'use client';

import React from 'react';
import Link from 'next/link';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

export const Testimonials: React.FC = () => {


  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say 
                about their experience with Niki&apos;s African Hair Braiding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-yellow-400'
                            : 'text-secondary-200'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-secondary-700 mb-6 leading-relaxed">
                    &ldquo;{testimonial.comment}&rdquo;
                  </blockquote>

                  {/* Client Info */}
                  <div className="border-t border-secondary-200 pt-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-secondary-500 text-sm">
                          {testimonial.service} • {new Date(testimonial.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-secondary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-display font-semibold text-2xl text-secondary-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-secondary-600 mb-6">
                  Join hundreds of satisfied clients who trust Niki&apos;s African Hair Braiding for their hair braiding needs.
            </p>
            <div className="flex justify-center">
              <Link href="/gallery">
                <button className="btn-outline">
                  View Gallery
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
