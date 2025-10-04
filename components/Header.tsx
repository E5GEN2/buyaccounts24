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
      isScrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-lg group-hover:blur-xl transition-all opacity-70"></div>
              <div className="relative bg-black rounded-lg p-2">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">
              Buy<span className="gradient-text">Accounts</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full mt-2 w-48 glass-effect rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/social" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  Social Media
                </Link>
                <Link href="/streaming" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  Streaming
                </Link>
                <Link href="/gaming" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  Gaming
                </Link>
                <Link href="/tools" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  Tools & VPN
                </Link>
              </div>
            </div>

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
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="hidden lg:flex items-center space-x-3">
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                Sign in
              </Link>
              <Link href="/signup" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur group-hover:blur-lg transition-all"></div>
                <span className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg inline-block hover:shadow-lg transition-all">
                  Get Started
                </span>
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
        <div className="lg:hidden glass-effect border-t border-white/10">
          <div className="container mx-auto px-6 py-4 space-y-3">
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
            <div className="pt-3 border-t border-white/10 space-y-3">
              <Link href="/login" className="block text-center text-gray-300 hover:text-white transition-colors py-2">
                Sign in
              </Link>
              <Link href="/signup" className="block text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg py-2">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}