'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <nav className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-300 group">
            {/* Gradient Box with Icon */}
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-purple-600 via-pink-600 to-red-600 rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-black">✨</span>
            </div>
            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-lg font-black text-purple-700">DREAM</span>
              <span className="text-xs font-bold text-pink-600 tracking-[0.15em]">DECOR</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold relative group px-2 py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-4">
            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-purple-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 animate-slide-up">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-purple-600 py-2 font-semibold transition-colors"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block btn-primary text-center"
            >
              Get Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
