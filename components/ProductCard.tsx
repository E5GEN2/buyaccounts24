'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingCart, Eye } from 'lucide-react';

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
  rating,
  sales,
  imageUrl,
  features,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeConfig = () => {
    switch (badge) {
      case 'popular':
        return { text: 'Popular', className: 'bg-orange-500' };
      case 'trending':
        return { text: 'Trending', className: 'bg-green-500' };
      case 'new':
        return { text: 'New', className: 'bg-blue-500' };
      case 'deal':
        return { text: 'Deal', className: 'bg-yellow-500' };
      default:
        return null;
    }
  };

  const badgeConfig = getBadgeConfig();

  return (
    <div
      className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badgeConfig && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`${badgeConfig.className} text-white px-2 py-1 rounded-md text-xs font-semibold`}>
            {badgeConfig.text}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 bg-gray-700">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Stats overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          <div className="bg-black/70 rounded-md px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs">{rating}</span>
          </div>
          <div className="bg-black/70 rounded-md px-2 py-1">
            <span className="text-white text-xs">{sales.toLocaleString()} sold</span>
          </div>
        </div>

        {/* Hover overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3">
            <button className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {features.slice(0, 2).map((feature, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
              {feature}
            </span>
          ))}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">{price}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
            )}
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
            <ShoppingCart className="w-3 h-3" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}