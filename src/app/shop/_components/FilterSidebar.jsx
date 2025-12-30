"use client";

import { Range } from "react-range";

export default function FilterSidebar({
  priceRange,
  onPriceRangeChange,
  availablePriceRange,
  sizes,
  selectedSize,
  onSizeChange,
  colors,
  selectedColor,
  onColorChange,
  seasons,
  selectedSeason,
  onSeasonChange,
}) {
  // Use availablePriceRange for slider min/max (dynamic from all products)
  // Use priceRange for current selected values (from URL searchParams)
  const rangeMin = availablePriceRange?.min || 0;
  const rangeMax = availablePriceRange?.max || 100;
  const values = [priceRange.min, priceRange.max];

  // Handle slider value change - convert array [min, max] to { min, max } object
  const handleChange = (newValues) => {
    if (Array.isArray(newValues) && newValues.length === 2) {
      onPriceRangeChange({ min: newValues[0], max: newValues[1] });
    }
  };

  return (
    <div className="space-y-8 pr-4">
      {/* Price Filter */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 mb-4">
          Price
        </h3>
        <div className="space-y-4">
          <div className="py-2">
            <Range
              step={1}
              min={rangeMin}
              max={rangeMax}
              values={values}
              onChange={handleChange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-1.5 w-full bg-gray-300 rounded-full relative"
                  style={{
                    ...props.style,
                  }}
                >
                  {/* Active range fill */}
                  <div
                    className="absolute h-full bg-black rounded-full"
                    style={{
                      left: `${((values[0] - rangeMin) / (rangeMax - rangeMin)) * 100}%`,
                      width: `${((values[1] - values[0]) / (rangeMax - rangeMin)) * 100}%`,
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  className={`h-4 w-4 rounded-full border-2 border-black bg-white shadow-lg transition-all duration-150 touch-manipulation ${
                    isDragged ? "scale-110 shadow-xl" : "hover:scale-105"
                  }`}
                  style={{
                    ...props.style,
                    outline: "none",
                  }}
                >
                </div>
              )}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span>${priceRange.min}</span>
            <span>${priceRange.max}</span>
          </div>
        </div>
      </div>

      {/* Size Filter */}
      <div className="border-t border-gray-200 pt-6 flex flex-col gap-4">
        <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 mb-4">
          Size
        </h3>
        <div className="flex flex-col  gap-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`py-2 text-sm font-medium rounded transition-all duration-200 w-full hover:bg-black hover:text-white ${
                selectedSize === size
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="border-t border-gray-200 pt-6 flex flex-col  gap-4">
        <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 mb-4">
          Color
        </h3>
        <div className="flex flex-col gap-4">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className={`py-2 text-sm font-medium rounded transition-all duration-200 w-full hover:bg-black hover:text-white  ${
                selectedColor === color
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Season Filter */}
      <div className="border-t border-gray-200 pt-6 flex flex-col gap-4">
        <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 mb-4">
          Season
        </h3>
        <div className="flex flex-col gap-4">
          {seasons.map((season) => (
            <button
              key={season}
              onClick={() => onSeasonChange(season)}
              className={`py-2 text-sm font-medium rounded transition-all duration-200 w-full hover:bg-black hover:text-white  ${
                selectedSeason === season
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              {season}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
