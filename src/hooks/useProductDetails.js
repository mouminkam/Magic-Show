import { useState, useEffect, useCallback } from "react";
import api from "../api";
import useToastStore from "../store/toastStore";
import { getLanguageClient } from "../lib/getLanguageClient";
import { t } from "../locales/i18n/getTranslation";

/**
 * Hook to fetch product details
 * @param {string} productId - Product ID
 * @returns {Object} Product data, loading state, error, and refetch function
 */
export function useProductDetails(productId) {
  const { error: toastError } = useToastStore();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductDetails = useCallback(async () => {
    if (!productId) {
      const lang = getLanguageClient();
      setError(t(lang, "product_id_required"));
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual API call when backend is ready
      // axios interceptor automatically adds Accept-Language header
      // const response = await api.products.getById(productId);
      // setProduct(response.data || response);

      // For now, return null - will be populated with mock data in components
      setProduct(null);
    } catch (err) {
      const lang = getLanguageClient();
      const errorMessage = err?.message || t(lang, "failed_to_load_product");
      setError(errorMessage);
      toastError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [productId, toastError]);

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId, fetchProductDetails]);

  return {
    product,
    isLoading,
    error,
    refetch: fetchProductDetails,
  };
}


