"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

export default function BestSellerCard({ product }) {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="group relative cursor-pointer bg-white border-2 border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300 flex flex-col h-full"
    >
      {/* Discount Badge - Simple and Clean */}
      {product.discount && (
        <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md z-10">
          -{product.discount}%
        </div>
      )}

      {/* Product Image - Clean Layout */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Info - Minimal Design */}
      <div className="p-5 flex flex-col flex-1 justify-between border-t border-gray-50">
        <div>
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
            {product.category}
          </p>
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 text-base leading-tight">
            {product.name}
          </h3>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
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
          
          {/* Action Buttons - Simple Icons */}
          <div className="flex gap-2">
            <button
              aria-label="Add to wishlist"
              className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button
              aria-label="Add to cart"
              className="w-9 h-9 bg-gray-900 hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

