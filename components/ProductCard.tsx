'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingCart, Eye, Zap } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: 'popular' | 'trending' | 'new' | 'deal';
  category: string;
  rating: number;
  sales: number;
  imageUrl: string;
  features: string[];
}

export default function ProductCard({
  title,
  description,
  price,
  originalPrice,
  badge,
  category,
  rating,
  sales,
  imageUrl,
  features,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeConfig = () => {
    switch (badge) {
      case 'popular':
        return { text: 'Popular', className: 'bg-gradient-to-r from-orange-500 to-red-500' };
      case 'trending':
        return { text: 'Trending', className: 'bg-gradient-to-r from-green-500 to-emerald-500' };
      case 'new':
        return { text: 'New', className: 'bg-gradient-to-r from-blue-500 to-purple-500' };
      case 'deal':
        return { text: 'Deal', className: 'bg-gradient-to-r from-yellow-500 to-orange-500' };
      default:
        return null;
    }
  };

  const badgeConfig = getBadgeConfig();

  return (
    <div
      className="glass-effect rounded-2xl overflow-hidden card-hover group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badgeConfig && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`${badgeConfig.className} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}>
            {badgeConfig.text}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex gap-3">
            <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all">
              <Eye className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick stats overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs font-medium">{rating}</span>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <span className="text-white text-xs font-medium">{sales.toLocaleString()} sold</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded-md text-xs">
              {feature}
            </span>
          ))}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl">{price}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
            )}
          </div>

          <button className="group/btn bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>

        {/* Instant delivery indicator */}
        <div className="flex items-center gap-2 mt-4 text-green-400">
          <Zap className="w-4 h-4" />
          <span className="text-xs font-medium">Instant Delivery</span>
        </div>
      </div>
    </div>
  );
}