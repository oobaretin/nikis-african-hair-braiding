'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Brand and Navigation Group */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="flex items-center flex-shrink-0">
              <img 
                src="/images/no%20background.png" 
                alt="Niki's African Hair Braiding" 
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'text-primary-600'
                      : 'text-secondary-700 hover:text-primary-600'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button - 44px min touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 -m-1 rounded-lg transition-colors duration-200 text-secondary-700 hover:bg-secondary-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/services" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
