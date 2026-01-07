"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * HomeBanner Component
 * Elegant banner combining minimalist design (Banner3) with heritage style (Banner7)
 * Uses project colors: black, gray, orange accent, white
 * @param {Object} props - Component props
 * @param {Object} props.heroData - Hero section data
 * @param {string} props.heroData.badge - Badge text (e.g., "NEW COLLECTION")
 * @param {string} props.heroData.title - Main title text
 * @param {string} props.heroData.subtitle - Subtitle text (optional)
 * @param {string} props.heroData.description - Description text
 * @param {string} props.heroData.ctaPrimary - Primary button text
 * @param {string} props.heroData.ctaPrimaryLink - Primary button link
 * @param {string} props.heroData.ctaSecondary - Secondary button text (optional)
 * @param {string} props.heroData.ctaSecondaryLink - Secondary button link (optional)
 * @param {Array} props.heroData.stats - Array of stats objects: [{ value, label }]
 */
export default function HomeBanner({ heroData = null }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true);
  }, []);

  // Default data
  const defaultData = {
    badge: "EST. 2024",
    title: "ELEGANT",
    subtitle: "JEWELRY",
    description: "Crafted with precision. Timeless designs. Quality that lasts generations.",
    ctaPrimary: "Shop Now",
    ctaPrimaryLink: "/shop",
    ctaSecondary: "View Collection",
    ctaSecondaryLink: "/shop",
    stats: [
      { value: "100+", label: "Designs" },
      { value: "100%", label: "Quality Guaranteed" },
    ],
  };

  const data = heroData || defaultData;
  const {
    badge,
    title,
    subtitle,
    description,
    ctaPrimary,
    ctaPrimaryLink,
    ctaSecondary,
    ctaSecondaryLink,
    stats,
  } = data;

  return (
    <section
      className={`relative w-full min-h-[600px] bg-white overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Decorative Elements - from Banner7 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-gray-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-gray-200 rounded-full opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="flex-1 max-w-2xl">
          {/* Badge - from Banner7 */}
          <div
            className={`text-xs text-gray-500 uppercase tracking-[0.3em] mb-4 font-semibold transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            {badge}
          </div>

          {/* Main Title - from Banner3 */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-4 leading-tight transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            {title}
            {subtitle && (
              <>
                <br />
                <span className="font-light text-orange-500">{subtitle}</span>
              </>
            )}
          </h1>

          {/* Description - from Banner7 */}
          <p
            className={`text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-xl leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            {description}
          </p>

          {/* CTA Buttons - from Banner3 */}
          <div
            className={`flex flex-wrap gap-4 mb-8 sm:mb-12 transition-all duration-700 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <Link
              href={ctaPrimaryLink || "/shop"}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-all shadow-lg transform hover:scale-105"
            >
              {ctaPrimary || "Shop Now"}
            </Link>
            {ctaSecondary && (
              <Link
                href={ctaSecondaryLink || "/shop"}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition-all"
              >
                {ctaSecondary}
              </Link>
            )}
          </div>

          {/* Stats Section - from Banner7 */}
          {stats && stats.length > 0 && (
            <div
              className={`flex flex-wrap gap-6 sm:gap-8 text-gray-600 transition-all duration-700 delay-600 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-xl sm:text-2xl font-bold text-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Decorative Circle - from Banner7 (hidden on mobile) */}
        <div className="hidden lg:block flex-1 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-80 h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-4 border-gray-200 shadow-2xl">
              <div className="text-7xl xl:text-8xl font-bold text-gray-300">✦</div>
            </div>
            {/* Accent circles - using orange accent color */}
            <div className="absolute -top-4 -right-4 w-20 h-20 xl:w-24 xl:h-24 bg-orange-500 rounded-full border-4 border-white shadow-xl opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 xl:w-32 xl:h-32 bg-gray-800 rounded-full border-4 border-white shadow-xl opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Bottom Border - from Banner3 */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div> */}
    </section>
  );
}

