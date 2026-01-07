"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Sparkles } from "lucide-react";

export default function NewArrivalCard({ product }) {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="group relative cursor-pointer bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] flex flex-col h-full"
    >
      {/* NEW Badge - Animated */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
        <Sparkles className="w-3 h-3" />
        <span>NEW</span>
      </div>

      {/* Discount Badge - If exists */}
      {product.discount && (
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-20">
          -{product.discount}%
        </div>
      )}

      {/* Product Image with Overlay */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-125"
        />
        
        {/* Gradient Overlay - Appears on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Product Info Overlay - Animated */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="space-y-3">
            <p className="text-white/80 text-xs font-medium uppercase tracking-wider">
              {product.category}
            </p>
            <h3 className="font-bold text-white text-lg leading-tight line-clamp-2">
              {product.name}
            </h3>
            
            {/* Price - Animated */}
            <div className="flex items-center gap-2 pt-2">
              {product.originalPrice && (
                <span className="text-white/60 text-sm line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="font-bold text-white text-xl">
                ${product.price}
              </span>
            </div>
            
            {/* Action Buttons - Glassmorphism */}
            <div className="flex gap-2 pt-3">
              <button
                aria-label="Add to wishlist"
                className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white rounded-lg px-4 py-2.5 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Heart className="w-4 h-4" />
                <span className="text-xs font-medium">Wishlist</span>
              </button>
              <button
                aria-label="Add to cart"
                className="flex-1 bg-white hover:bg-gray-100 text-gray-900 rounded-lg px-4 py-2.5 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="text-xs">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Default Product Info - Hidden on Hover */}
      <div className="p-5 flex flex-col flex-1 justify-between group-hover:hidden transition-opacity duration-300">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">
            {product.category}
          </p>
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
            {product.name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-gray-400 text-sm line-through">
              ${product.originalPrice}
            </span>
          )}
          <span className="font-bold text-gray-900 text-lg">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}

