'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <select className="px-3 py-1 border border-gray-300 rounded-md bg-white">
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="GBP">GBP £</option>
            </select>
            <div className="flex gap-4">
              <Link href="/account" className="flex items-center gap-1 hover:text-blue-500 transition">
                <User className="w-4 h-4" /> Account
              </Link>
              <Link href="/cart" className="flex items-center gap-1 hover:text-blue-500 transition">
                <ShoppingCart className="w-4 h-4" />
                Cart {cartCount > 0 && (
                  <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link href="/" className="text-2xl font-bold">
            BuyAccounts<span className="text-blue-500">24</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="font-medium hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="/catalog" className="font-medium hover:text-blue-500 transition">
              Catalog
            </Link>
            <Link href="/contact" className="font-medium hover:text-blue-500 transition">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hover:text-blue-500 transition"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="font-medium hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="/catalog" className="font-medium hover:text-blue-500 transition">
              Catalog
            </Link>
            <Link href="/contact" className="font-medium hover:text-blue-500 transition">
              Contact
            </Link>
          </div>
        </nav>
      )}

      {isSearchOpen && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4 py-4">
            <form className="max-w-2xl mx-auto flex">
              <input
                type="text"
                placeholder="Search for accounts..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}