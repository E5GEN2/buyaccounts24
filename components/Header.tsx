'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, Sparkles, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Buy<span className="text-blue-500">Accounts</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <Link href="/cart" className="relative p-2 text-gray-300 hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="hidden lg:flex items-center space-x-3">
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors px-3 py-2">
                Sign in
              </Link>
              <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="container py-4 space-y-2">
            <Link href="/products" className="block text-gray-300 hover:text-white transition-colors py-2">
              Products
            </Link>
            <Link href="/pricing" className="block text-gray-300 hover:text-white transition-colors py-2">
              Pricing
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-white transition-colors py-2">
              About
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors py-2">
              Contact
            </Link>
            <div className="pt-2 border-t border-gray-800 space-y-2">
              <Link href="/login" className="block text-gray-300 hover:text-white transition-colors py-2">
                Sign in
              </Link>
              <Link href="/signup" className="block bg-blue-500 text-white rounded-lg py-2 text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}