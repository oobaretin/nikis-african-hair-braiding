import React from 'react';
import Link from 'next/link';
import { contactInfo, socialLinks } from '@/lib/data';
import { formatPhoneNumber } from '@/lib/utils';
import { 
  HomeIcon
} from '@heroicons/react/24/outline';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="h-40 md:h-32 w-auto min-w-[220px] md:min-w-0">
                <img 
                  src="/images/6383B831-AD0A-49E3-87EA-02AD4B1AFB8B-removebg-preview.png" 
                  alt="Magic Braiding Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
            <p className="text-secondary-300 mb-6">
              Transform your look with expert hair braiding services. Fast, professional, 
              and gentle braiding in Richmond, Texas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const getIcon = () => {
                  switch (social.platform) {
                    case 'Instagram':
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      );
                    case 'Nextdoor':
                      return <HomeIcon className="w-5 h-5" />;
                    case 'Facebook':
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      );
                    default:
                      return <span className="text-sm font-medium">{social.platform.charAt(0)}</span>;
                  }
                };

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                    title={`Follow us on ${social.platform}`}
                  >
                    <span className="sr-only">{social.platform}</span>
                    {getIcon()}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#box-braids" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Box Braids
                </Link>
              </li>
              <li>
                <Link href="/services#boho-braids" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Boho Braids
                </Link>
              </li>
              <li>
                <Link href="/services#goddess-braids" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Goddess Braids
                </Link>
              </li>
              <li>
                <Link href="/services#cornrows" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Cornrows
                </Link>
              </li>
              <li>
                <Link href="/services#faux-locs" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Faux Locs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-secondary-300 text-sm">Phone</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white hover:text-primary-400 transition-colors duration-200"
                >
                  {formatPhoneNumber(contactInfo.phone)}
                </a>
              </div>
              <div>
                <p className="text-secondary-300 text-sm">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:text-primary-400 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="text-secondary-300 text-sm">Address</p>
                <p className="text-white">{contactInfo.address}</p>
                <p className="text-secondary-400 text-xs mt-1">Call or text for exact location</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <h3 className="font-display font-semibold text-lg mb-4">Business Hours</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {contactInfo.hours.map((hours) => (
              <div key={hours.day} className="text-center">
                <p className="font-medium text-white">{hours.day}</p>
                <p className="text-secondary-300 text-sm">
                  {hours.day === 'Sunday' 
                    ? `${hours.open} ${hours.close}`
                    : `${hours.open} - ${hours.close}`
                  }
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-primary-400 font-medium">Walk-ins are welcome!</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary-800 text-center">
          <p className="text-secondary-400">
            © {new Date().getFullYear()} Magic Braiding. All rights reserved.
          </p>
          <p className="text-secondary-500 text-sm mt-2">
            Designed by{' '}
            <a 
              href="https://tenqdesigns.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              TenQ Designs LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
