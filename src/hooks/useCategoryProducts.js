import { useState, useEffect, useCallback } from "react";
import api from "../api";
import useToastStore from "../store/toastStore";
import { getLanguageClient } from "../lib/getLanguageClient";
import { t } from "../locales/i18n/getTranslation";

/**
 * Hook to fetch and filter category products
 * @param {Object} filters - Filter options
 * @returns {Object} Products data, loading state, error, and filter functions
 */
export function useCategoryProducts(filters = {}) {
  const { error: toastError } = useToastStore();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    category = "All",
    size = "",
    color = "",
    season = "",
    priceRange = { min: 0, max: 1000 },
    page = 1,
    limit = 12,
  } = filters;

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params = {
        page,
        limit,
      };

      if (category !== "All") {
        params.category = category;
      }
      if (size) {
        params.size = size;
      }
      if (color) {
        params.color = color;
      }
      if (season) {
        params.season = season;
      }
      if (priceRange.min !== undefined) {
        params.minPrice = priceRange.min;
      }
      if (priceRange.max !== undefined) {
        params.maxPrice = priceRange.max;
      }

      // TODO: Replace with actual API call when backend is ready
      // const response = await api.products.getByCategory(category, params);
      // setProducts(response.data || response);
      // setFilteredProducts(response.data || response);

      // For now, return empty array - will be populated with mock data in components
      // axios interceptor automatically adds Accept-Language header
      setProducts([]);
      setFilteredProducts([]);
    } catch (err) {
      const lang = getLanguageClient();
      const errorMessage = err?.message || t(lang, "failed_to_load_products");
      setError(errorMessage);
      toastError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [category, size, color, season, priceRange, page, limit, toastError]);

  // Apply client-side filters
  useEffect(() => {
    let filtered = [...products];

    if (category !== "All") {
      filtered = filtered.filter((product) =>
        product.category?.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (priceRange.min !== undefined && priceRange.max !== undefined) {
      filtered = filtered.filter(
        (product) =>
          product.price >= priceRange.min && product.price <= priceRange.max
      );
    }

    if (size) {
      filtered = filtered.filter((product) =>
        product.sizes?.includes(size)
      );
    }

    if (color) {
      filtered = filtered.filter(
        (product) =>
          product.colors?.includes(color) ||
          product.color?.toLowerCase() === color.toLowerCase()
      );
    }

    if (season) {
      filtered = filtered.filter(
        (product) =>
          product.seasons?.includes(season) ||
          product.season?.toLowerCase() === season.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  }, [products, category, size, color, season, priceRange]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    filteredProducts,
    isLoading,
    error,
    refetch: fetchProducts,
  };
}


