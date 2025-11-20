'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { contactInfo } from '@/lib/data';
import { formatPhoneNumber } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to transform your look? Contact us today to schedule your appointment 
            or ask any questions about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-display font-semibold text-2xl text-secondary-900 mb-6">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="(281) 555-0123"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="appointment">Book Appointment</option>
                        <option value="consultation">Schedule Consultation</option>
                        <option value="service-question">Service Question</option>
                        <option value="pricing">Pricing Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us about your hair goals and any questions you have..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-1">Phone</h4>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {formatPhoneNumber(contactInfo.phone)}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-1">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-1">Address</h4>
                  <p className="text-secondary-600">{contactInfo.address}</p>
                  <p className="text-secondary-500 text-sm mt-2 font-medium">
                    Please call or text for exact location details
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <ClockIcon className="w-6 h-6 text-primary-600" />
                  <h3 className="font-display font-semibold text-xl text-secondary-900">
                    Business Hours
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {contactInfo.hours.map((hours) => (
                    <div key={hours.day} className="flex justify-between items-center">
                      <span className="font-medium text-secondary-900">{hours.day}</span>
                      <span className="text-secondary-600">
                        {hours.day === 'Sunday' 
                          ? `${hours.open} ${hours.close}`
                          : `${hours.open} - ${hours.close}`
                        }
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                  <p className="text-primary-700 text-sm font-medium text-center">
                    Walk-ins are welcome!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-primary-600 rounded-2xl p-8 text-white text-center">
              <h3 className="font-semibold text-2xl mb-4">
                Ready to Book?
              </h3>
              <p className="mb-6 opacity-90">
                Don&apos;t wait! Book your appointment today and experience the difference 
                of professional hair braiding.
              </p>
              <Link href="/services">
                <Button 
                  className="bg-white text-primary-600 hover:bg-primary-50"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
