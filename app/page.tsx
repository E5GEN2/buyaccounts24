'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { Send, Zap, Shield, Headphones, RotateCw } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Facebook Account',
    vendor: 'Aged 2+ Years',
    price: '$24.99',
    badge: 'new' as const,
    category: 'social',
    imageUrl: 'https://via.placeholder.com/280x280/4267B2/ffffff?text=Facebook',
  },
  {
    id: 2,
    title: 'Netflix Premium',
    vendor: '1 Month Warranty',
    price: '$14.99',
    originalPrice: '$19.99',
    badge: 'hot' as const,
    category: 'streaming',
    imageUrl: 'https://via.placeholder.com/280x280/E50914/ffffff?text=Netflix',
  },
  {
    id: 3,
    title: 'Twitter/X Account',
    vendor: 'Verified Email',
    price: '$19.99',
    category: 'social',
    imageUrl: 'https://via.placeholder.com/280x280/1DA1F2/ffffff?text=Twitter',
  },
  {
    id: 4,
    title: 'Steam Account',
    vendor: '5+ Years Old',
    price: '$29.99',
    originalPrice: '$39.99',
    badge: 'sale' as const,
    category: 'gaming',
    imageUrl: 'https://via.placeholder.com/280x280/00A86B/ffffff?text=Steam',
  },
  {
    id: 5,
    title: 'Spotify Premium',
    vendor: '3 Months',
    price: '$9.99',
    category: 'streaming',
    imageUrl: 'https://via.placeholder.com/280x280/1DB954/ffffff?text=Spotify',
  },
  {
    id: 6,
    title: 'Instagram Account',
    vendor: '1K+ Followers',
    price: '$34.99',
    badge: 'new' as const,
    category: 'social',
    imageUrl: 'https://via.placeholder.com/280x280/E4405F/ffffff?text=Instagram',
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'social', name: 'Social Media' },
  { id: 'streaming', name: 'Streaming' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'other', name: 'Other' },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState(products);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setVisibleProducts(products);
    } else {
      setVisibleProducts(products.filter(p => p.category === category));
    }
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Premium Digital Accounts</h1>
          <p className="text-xl mb-8 opacity-90">
            Instant delivery, secure payment, 24/7 support
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="#catalog"
              className="bg-blue-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Browse Catalog
            </Link>
            <a
              href="https://t.me/buyaccounts24"
              className="bg-[#0088cc] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0077b3] transition flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Contact on Telegram
            </a>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Featured Accounts</h2>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeFilter === cat.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gray-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-700 transition">
              Load More Products
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
              <p className="text-gray-600">Get your accounts immediately after payment</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Multiple payment methods with buyer protection</p>
            </div>
            <div className="text-center">
              <Headphones className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help via Telegram</p>
            </div>
            <div className="text-center">
              <RotateCw className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Replacement Warranty</h3>
              <p className="text-gray-600">Free replacements within warranty period</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90">
              Get exclusive deals and new arrivals notifications
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}