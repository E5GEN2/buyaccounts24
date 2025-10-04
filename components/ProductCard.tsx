'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  vendor: string;
  price: string;
  originalPrice?: string;
  badge?: 'new' | 'hot' | 'sale';
  category: string;
  imageUrl: string;
}

export default function ProductCard({
  title,
  vendor,
  price,
  originalPrice,
  badge,
  category,
  imageUrl,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeClass = () => {
    switch (badge) {
      case 'new':
        return 'bg-green-500';
      case 'hot':
        return 'bg-red-500';
      case 'sale':
        return 'bg-yellow-500 text-gray-900';
      default:
        return '';
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      data-category={category}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        {badge && (
          <div className="absolute top-2 left-2">
            <span className={`${getBadgeClass()} text-white px-3 py-1 rounded text-xs font-semibold uppercase`}>
              {badge}
            </span>
          </div>
        )}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
            <button className="bg-white text-gray-900 px-6 py-2 rounded font-medium hover:bg-gray-100 transition">
              Quick View
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{vendor}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-blue-500">{price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
          )}
        </div>
        <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-blue-500 transition font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}