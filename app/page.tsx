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
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
      <div
        className="fixed inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Live • 24/7 Instant Delivery</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Premium Digital
              <br />
              <span className="gradient-text">Accounts</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant access to premium accounts with lifetime warranty.
              <br className="hidden md:block" />
              Trusted by 50,000+ customers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="#products"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-glow inline-flex items-center space-x-2"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="https://t.me/buyaccounts24"
                className="glass-effect text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center space-x-2"
              >
                <span>Contact Support</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Handpicked premium accounts with instant delivery and lifetime support
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="glass-effect text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all inline-flex items-center space-x-2 group">
              <span>Load More Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide the best service in the market with unmatched quality and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 text-center group hover:bg-white/10 transition-all card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Delivery</h3>
              <p className="text-gray-400 leading-relaxed">
                Get your accounts delivered within minutes of purchase. Our automated system ensures lightning-fast delivery.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center group hover:bg-white/10 transition-all card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lifetime Warranty</h3>
              <p className="text-gray-400 leading-relaxed">
                All accounts come with lifetime warranty. If something goes wrong, we'll replace it for free.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center group hover:bg-white/10 transition-all card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Our dedicated support team is available round the clock to help you with any questions or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Stay <span className="gradient-text">Updated</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified about new arrivals, exclusive deals, and special offers. Join 10,000+ subscribers.
              </p>

              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover-glow transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}