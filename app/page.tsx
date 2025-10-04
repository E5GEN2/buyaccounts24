'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, Zap, Shield, Clock, Star, Play, Code, Users, TrendingUp } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Facebook Account',
    description: 'Premium aged account with full access',
    price: '$24.99',
    originalPrice: '$34.99',
    badge: 'popular' as const,
    category: 'social',
    rating: 4.9,
    sales: 2847,
    imageUrl: 'https://via.placeholder.com/400x300/1877F2/ffffff?text=Facebook',
    features: ['2+ Years Old', 'Email Included', 'Phone Verified'],
  },
  {
    id: 2,
    title: 'Netflix Premium',
    description: 'Ultra HD streaming with multiple profiles',
    price: '$14.99',
    originalPrice: '$19.99',
    badge: 'trending' as const,
    category: 'streaming',
    rating: 4.8,
    sales: 1932,
    imageUrl: 'https://via.placeholder.com/400x300/E50914/ffffff?text=Netflix',
    features: ['1 Month Warranty', '4K Quality', 'Multiple Profiles'],
  },
  {
    id: 3,
    title: 'Discord Nitro',
    description: 'Enhanced Discord experience with perks',
    price: '$19.99',
    category: 'gaming',
    rating: 4.7,
    sales: 1456,
    imageUrl: 'https://via.placeholder.com/400x300/5865F2/ffffff?text=Discord',
    features: ['Nitro Classic', 'Custom Emojis', 'HD Video'],
  },
  {
    id: 4,
    title: 'Spotify Premium',
    description: 'Ad-free music streaming experience',
    price: '$9.99',
    originalPrice: '$12.99',
    badge: 'deal' as const,
    category: 'streaming',
    rating: 4.9,
    sales: 3241,
    imageUrl: 'https://via.placeholder.com/400x300/1DB954/ffffff?text=Spotify',
    features: ['3 Months', 'Offline Mode', 'High Quality'],
  },
  {
    id: 5,
    title: 'Steam Account',
    description: 'Gaming account with established history',
    price: '$29.99',
    originalPrice: '$39.99',
    category: 'gaming',
    rating: 4.6,
    sales: 987,
    imageUrl: 'https://via.placeholder.com/400x300/171A21/ffffff?text=Steam',
    features: ['5+ Years Old', 'Games Included', 'Trading Cards'],
  },
  {
    id: 6,
    title: 'Twitter Blue',
    description: 'Verified Twitter account with blue checkmark',
    price: '$34.99',
    badge: 'new' as const,
    category: 'social',
    rating: 4.8,
    sales: 756,
    imageUrl: 'https://via.placeholder.com/400x300/1DA1F2/ffffff?text=Twitter',
    features: ['Verified Badge', 'Email Access', 'Full Control'],
  },
];

const categories = [
  { id: 'all', name: 'All Products', icon: Star },
  { id: 'social', name: 'Social Media', icon: Users },
  { id: 'streaming', name: 'Streaming', icon: Play },
  { id: 'gaming', name: 'Gaming', icon: Code },
];

const stats = [
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Success Rate', value: '99.9%', icon: TrendingUp },
  { label: 'Avg. Delivery', value: '<5min', icon: Clock },
  { label: 'Products Sold', value: '100K+', icon: Star },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setVisibleProducts(products);
    } else {
      setVisibleProducts(products.filter(p => p.category === category));
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 rounded-full px-4 py-2 mb-6 border border-green-500/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Live • 24/7 Instant Delivery</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Premium Digital <span className="text-blue-500">Accounts</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get instant access to premium accounts with lifetime warranty.
              Trusted by 50,000+ customers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="#products"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="https://t.me/buyaccounts24"
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Contact Support</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-blue-500">Products</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Handpicked premium accounts with instant delivery and lifetime support
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === cat.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
              <span>Load More Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-blue-500">Us?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We provide the best service in the market with unmatched quality and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Delivery</h3>
              <p className="text-gray-400">
                Get your accounts delivered within minutes of purchase. Our automated system ensures lightning-fast delivery.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lifetime Warranty</h3>
              <p className="text-gray-400">
                All accounts come with lifetime warranty. If something goes wrong, we'll replace it for free.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-400">
                Our dedicated support team is available round the clock to help you with any questions or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gray-800 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay <span className="text-blue-500">Updated</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Get notified about new arrivals, exclusive deals, and special offers.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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