"use client";
import Link from "next/link";
import { User, ShoppingCart, Search } from "lucide-react";
import { useCart } from "../../../hooks/useCart";
import HeaderCart from "./HeaderCart";
import HeaderLanguageSwitcher from "./HeaderLanguageSwitcher";

export default function HeaderActions({
  cartOpen,
  setCartOpen,
  setSearchOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
  lang,
}) {
  const { itemCount } = useCart();

  return (
    <div className="flex items-center gap-4 md:gap-6 lg:gap-10 shrink-0 z-10">
      {/* User Icon */}
      <Link
        href="/login"
        className="text-gray-700 hover:text-orange-500 transition-colors duration-300 hidden sm:block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
        aria-label="Go to login page"
      >
        <User className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </Link>

      {/* Cart Icon */}
      <div className="relative">
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="text-gray-700 hover:text-orange-500 transition-colors duration-300 relative focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
          aria-label={`Shopping cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
          aria-expanded={cartOpen}
        >
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          {itemCount > 0 && (
            <span
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
              aria-hidden="true"
            >
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          )}
        </button>
        <HeaderCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>

      {/* Search Icon */}
      <button
        onClick={() => setSearchOpen(true)}
        className="text-gray-700 hover:text-orange-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
        aria-label="Open search"
      >
        <Search className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </button>

      {/* Language Switcher */}
      <HeaderLanguageSwitcher lang={lang} />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden flex flex-col space-y-1.5 p-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            mobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
          aria-hidden="true"
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            mobileMenuOpen ? "opacity-0" : ""
          }`}
          aria-hidden="true"
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
}

