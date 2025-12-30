import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getLanguage } from "../../lib/getLanguage";
import ErrorBoundary from "../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../components/ui/SectionSkeleton";
import PageSEO from "../../components/seo/PageSEO";
import { t } from "../../locales/i18n/getTranslation";

// Lazy load ShopSection with dynamic import
const ShopSection = dynamic(
  () => import("./_components/ShopSection"),
  {
    loading: () => <SectionSkeleton variant="grid" cardCount={12} height="h-screen" />,
    ssr: true,
  }
);

// Functions to fetch data (can be replaced with actual API calls later)
async function getShopBanner(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/shop/banner");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/shop/banner`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    title: "SHOP",
    backgroundImage: "/images/img04.jpg",
    leftBadge: "SALE OF 50%",
    rightBadge: "TRENDS FOR 2024",
  };
}

/**
 * getShopProducts - Server-side function to fetch and filter products
 * 
 * This function simulates a backend API call. When the real backend is integrated,
 * replace the mock data section with an actual API request.
 * 
 * API Documentation for Backend Team:
 * ===================================
 * 
 * Expected Request:
 * GET /shop/products
 * Query Parameters:
 *   - page: number (default: 1) - The page number (1-indexed)
 *   - limit: number (default: 6) - Number of products per page
 *   - category: string (optional) - Filter by category name
 *   - size: string (optional) - Filter by product size
 *   - color: string (optional) - Filter by product color
 *   - season: string (optional) - Filter by season
 *   - minPrice: number (optional) - Minimum price filter
 *   - maxPrice: number (optional) - Maximum price filter
 * 
 * Headers:
 *   - Accept-Language: string - Language code (e.g., "en", "ar")
 * 
 * Expected Response Structure:
 * {
 *   "products": Product[],  // Array of product objects
 *   "pagination": {
 *     "currentPage": number,    // Current page number (1-indexed)
 *     "limit": number,          // Number of items per page
 *     "totalItems": number,     // Total number of items matching filters (before pagination)
 *     "totalPages": number      // Total number of pages (calculated from totalItems / limit)
 *   }
 * }
 * 
 * Backend Implementation Notes:
 * 1. Apply ALL filters BEFORE pagination (filtering happens first)
 * 2. Count totalItems after filtering but before pagination
 * 3. Calculate totalPages = Math.ceil(totalItems / limit)
 * 4. Apply pagination using skip/take pattern:
 *    - skip = (currentPage - 1) * limit
 *    - take = limit
 * 5. Return only the paginated subset of filtered products
 * 
 * Example SQL Query Pattern:
 * SELECT * FROM products
 * WHERE (category LIKE '%Sneakers%' OR category IS NULL)
 *   AND (price >= 30 AND price <= 40)
 *   AND (size = '40' OR size IS NULL)
 * ORDER BY id
 * LIMIT 6 OFFSET 0;  -- For page 1, limit 6
 * 
 * Then separately count:
 * SELECT COUNT(*) FROM products WHERE ... (same WHERE conditions)
 * 
 * @param {string} lang - Language code for localization
 * @param {Object} searchParams - URL search parameters containing filters and pagination
 * @returns {Promise<Object>} Response object with products array and pagination metadata
 */
async function getShopProducts(lang, searchParams = {}) {
  // ========================================
  // STEP 1: Extract and validate parameters from URL searchParams
  // ========================================
  // Frontend controls these values via URL query parameters
  const page = Math.max(1, parseInt(searchParams?.page || "1", 10)); // 1-indexed, minimum 1
  const limit = Math.max(1, Math.min(100, parseInt(searchParams?.limit || "6", 10))); // Between 1-100, default 6
  
  // Filter parameters (optional - only present if user has applied filters)
  const category = searchParams?.category || null;
  const size = searchParams?.size || null;
  const color = searchParams?.color || null;
  const season = searchParams?.season || null;
  const minPrice = searchParams?.minPrice ? parseFloat(searchParams.minPrice) : null;
  const maxPrice = searchParams?.maxPrice ? parseFloat(searchParams.maxPrice) : null;

  // ========================================
  // STEP 2: Fetch data from backend (TODO: Replace with actual API call)
  // ========================================
  // TODO: Replace this mock data section with actual API call
  
  // Option 1: Using serverAxios (recommended if available)
  /*
  const serverAxios = await createServerAxios();
  const params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("limit", limit.toString());
  if (category) params.append("category", category);
  if (size) params.append("size", size);
  if (color) params.append("color", color);
  if (season) params.append("season", season);
  if (minPrice !== null) params.append("minPrice", minPrice.toString());
  if (maxPrice !== null) params.append("maxPrice", maxPrice.toString());
  
  const { data } = await serverAxios.get(`/shop/products?${params.toString()}`, {
    headers: { "Accept-Language": lang },
  });
  return data; // Backend should return the normalized response structure
  */
  
  // Option 2: Using fetch
  /*
  const params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("limit", limit.toString());
  if (category) params.append("category", category);
  if (size) params.append("size", size);
  if (color) params.append("color", color);
  if (season) params.append("season", season);
  if (minPrice !== null) params.append("minPrice", minPrice.toString());
  if (maxPrice !== null) params.append("maxPrice", maxPrice.toString());
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/shop/products?${params.toString()}`, {
    headers: { 
      "Accept-Language": lang,
      "Content-Type": "application/json",
    },
    cache: "no-store", // Ensure fresh data on each request
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }
  
  return res.json(); // Backend should return the normalized response structure
  */

  // ========================================
  // STEP 3: Mock data simulation (REMOVE when backend is ready)
  // ========================================
  // This simulates what the backend should do: filter first, then paginate
  const mockProducts = [
    {
      id: 1,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Brown"],
      seasons: ["Summer", "Spring"],
    },
    {
      id: 2,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["38", "39", "40", "41"],
      colors: ["Brown"],
      seasons: ["Summer"],
    },
    {
      id: 3,
      name: "Silver Stiletto",
      category: "Shoes, Stiletto",
      price: 36,
      originalPrice: 40,
      discount: 10,
      image: "/images/img20.jpg",
      sizes: ["36", "37", "38"],
      colors: ["Silver"],
      seasons: ["Spring", "Autumn"],
    },
    {
      id: 4,
      name: "White Classic Stiletto",
      category: "Shoes, Stiletto",
      price: 45,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["37", "38", "39", "40"],
      colors: ["White"],
      seasons: ["Summer", "Spring"],
    },
    {
      id: 5,
      name: "Silver Stiletto",
      category: "Shoes, Stiletto",
      price: 36,
      originalPrice: 40,
      discount: 10,
      image: "/images/img20.jpg",
      sizes: ["38", "39", "40"],
      colors: ["Silver"],
      seasons: ["Autumn", "Winter"],
    },
    {
      id: 6,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["39", "40", "41"],
      colors: ["Brown"],
      seasons: ["Summer"],
    },
    {
      id: 7,
      name: "White Classic Stiletto",
      category: "Shoes, Stiletto",
      price: 45,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["36", "37", "38"],
      colors: ["White"],
      seasons: ["Spring"],
    },
    {
      id: 8,
      name: "Silver Stiletto",
      category: "Shoes, Stiletto",
      price: 36,
      originalPrice: 40,
      discount: 10,
      image: "/images/img20.jpg",
      sizes: ["39", "40", "41"],
      colors: ["Silver"],
      seasons: ["Winter"],
    },
    {
      id: 9,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["36", "37", "38"],
      colors: ["Brown"],
      seasons: ["Summer", "Spring"],
    },
    {
      id: 10,
      name: "White Classic Stiletto",
      category: "Shoes, Stiletto",
      price: 45,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["38", "39", "40"],
      colors: ["White"],
      seasons: ["Autumn"],
    },
    {
      id: 11,
      name: "Silver Stiletto",
      category: "Shoes, Stiletto",
      price: 36,
      originalPrice: 40,
      discount: 10,
      image: "/images/img20.jpg",
      sizes: ["37", "38", "39"],
      colors: ["Silver"],
      seasons: ["Spring", "Summer"],
    },
    {
      id: 12,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["40", "41"],
      colors: ["Brown"],
      seasons: ["Summer"],
    },
  ];

  // ========================================
  // STEP 4: Apply filters FIRST (before pagination)
  // ========================================
  // CRITICAL: All filtering must happen BEFORE pagination
  // This reduces the dataset size before we calculate pagination
  // Backend should do: WHERE clause in SQL, or filter array before slice
  
  let filteredProducts = [...mockProducts];

  // Filter by category (case-insensitive partial match)
  if (category && category !== "All") {
    filteredProducts = filteredProducts.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  // Filter by price range (both min and max must pass)
  if (minPrice !== null) {
    filteredProducts = filteredProducts.filter((product) => product.price >= minPrice);
  }
  if (maxPrice !== null) {
    filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice);
  }

  // Filter by size (must be in product's sizes array)
  if (size) {
    filteredProducts = filteredProducts.filter((product) =>
      product.sizes?.includes(size)
    );
  }

  // Filter by color (check both colors array and color property)
  if (color) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.colors?.includes(color) ||
        product.color?.toLowerCase() === color.toLowerCase()
    );
  }

  // Filter by season (check both seasons array and season property)
  if (season) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.seasons?.includes(season) ||
        product.season?.toLowerCase() === season.toLowerCase()
    );
  }

  // ========================================
  // STEP 5: Calculate totalItems AFTER filtering (but before pagination)
  // ========================================
  // This is the total count of items that match the filters
  // Backend should: SELECT COUNT(*) WHERE ... (same filter conditions)
  const totalItems = filteredProducts.length;

  // ========================================
  // STEP 6: Calculate totalPages from totalItems and limit
  // ========================================
  // Math: If we have 12 items and limit is 6, we need 2 pages
  // Always round up: Math.ceil(12 / 6) = 2, Math.ceil(13 / 6) = 3
  const totalPages = Math.ceil(totalItems / limit);

  // ========================================
  // STEP 7: Apply pagination using skip/take pattern
  // ========================================
  // Pagination math:
  // - skip = (page - 1) * limit  (how many items to skip)
  // - take = limit                (how many items to return)
  // 
  // Examples:
  // Page 1, limit 6: skip = 0, take = 6    (items 0-5)
  // Page 2, limit 6: skip = 6, take = 6    (items 6-11)
  // Page 3, limit 6: skip = 12, take = 6   (items 12-17)
  //
  // Backend SQL equivalent: LIMIT 6 OFFSET 0 (for page 1)
  // Backend MongoDB equivalent: .skip(0).limit(6)
  const skip = (page - 1) * limit;
  const take = limit;
  const paginatedProducts = filteredProducts.slice(skip, skip + take);

  // ========================================
  // STEP 8: Return normalized response structure
  // ========================================
  // This structure matches what the backend API should return
  // Frontend expects this exact format
  return {
    products: paginatedProducts,
    pagination: {
      currentPage: page,
      limit: limit,
      totalItems: totalItems,
      totalPages: totalPages,
    },
  };
}

async function getShopCategories(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/shop/categories");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/shop/categories`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return [
    "All",
    "Collection",
    "Heels",
    "Flats",
    "Boots",
    "Sandals",
    "Sneakers",
    "Bags",
  ];
}

async function getShopFilters(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/shop/filters");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/shop/filters`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // ========================================
  // Calculate price range dynamically from all products
  // ========================================
  // Backend should: SELECT MIN(price), MAX(price) FROM products
  // This calculates the min and max prices from all available products
  // This allows the price filter slider to dynamically adjust to the actual product range
  
  // For now, using mock data - replace with actual API call
  // In production, the backend should calculate this from the database
  const mockProducts = [
    {
      id: 1,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Brown"],
      seasons: ["Summer", "Spring"],
    },
    {
      id: 2,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["38", "39", "40", "41"],
      colors: ["Brown"],
      seasons: ["Summer"],
    },
    {
      id: 3,
      name: "Silver Stiletto",
      category: "Shoes, Stiletto",
      price: 36,
      originalPrice: 40,
      discount: 10,
      image: "/images/img20.jpg",
      sizes: ["36", "37", "38"],
      colors: ["Silver"],
      seasons: ["Spring", "Autumn"],
    },
    {
      id: 4,
      name: "White Classic Stiletto",
      category: "Shoes, Stiletto",
      price: 45,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["37", "38", "39", "40"],
      colors: ["White"],
      seasons: ["Summer", "Spring"],
    },
    {
      id: 5,
      name: "Silver Stiletto",
      category: "Shoes, Stiletto",
      price: 36,
      originalPrice: 40,
      discount: 10,
      image: "/images/img20.jpg",
      sizes: ["38", "39", "40"],
      colors: ["Silver"],
      seasons: ["Autumn", "Winter"],
    },
    {
      id: 6,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["39", "40", "41"],
      colors: ["Brown"],
      seasons: ["Summer"],
    },
    {
      id: 7,
      name: "White Classic Stiletto",
      category: "Shoes, Stiletto",
      price: 45,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["36", "37", "38"],
      colors: ["White"],
      seasons: ["Spring"],
    },
    {
      id: 8,
      name: "Silver Stiletto",
      category: "Shoes, Stiletto",
      price: 36,
      originalPrice: 40,
      discount: 10,
      image: "/images/img20.jpg",
      sizes: ["39", "40", "41"],
      colors: ["Silver"],
      seasons: ["Winter"],
    },
    {
      id: 9,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["36", "37", "38"],
      colors: ["Brown"],
      seasons: ["Summer", "Spring"],
    },
    {
      id: 10,
      name: "White Classic Stiletto",
      category: "Shoes, Stiletto",
      price: 45,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["38", "39", "40"],
      colors: ["White"],
      seasons: ["Autumn"],
    },
    {
      id: 11,
      name: "Silver Stiletto",
      category: "Shoes, Stiletto",
      price: 36,
      originalPrice: 40,
      discount: 10,
      image: "/images/img20.jpg",
      sizes: ["37", "38", "39"],
      colors: ["Silver"],
      seasons: ["Spring", "Summer"],
    },
    {
      id: 12,
      name: "Sport Brown Sneakers",
      category: "Shoes, Sneakers",
      price: 35,
      originalPrice: null,
      discount: null,
      image: "/images/img20.jpg",
      sizes: ["40", "41"],
      colors: ["Brown"],
      seasons: ["Summer"],
    },
  ];

  // Calculate min and max prices from all products
  const prices = mockProducts.map((product) => product.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["White", "Blue", "Green", "Silver"],
    seasons: ["Summer", "Spring", "Autumn", "Winter"],
    priceRange: {
      min: minPrice,
      max: maxPrice,
    },
  };
}

export default async function ShopPage({ searchParams }) {
  const lang = await getLanguage();
  const currentPage = parseInt(searchParams?.page || "1", 10);

  // Fetch data on the server (pass all searchParams for filtering and pagination)
  // searchParams contains: page, limit, category, size, color, season, minPrice, maxPrice
  const [shopBanner, shopProducts, shopCategories, shopFilters] = await Promise.all([
    getShopBanner(lang),
    getShopProducts(lang, searchParams),
    getShopCategories(lang),
    getShopFilters(lang),
  ]);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={t(lang, "shop") + " - Magic Show"}
        description="Browse our products"
        url="/shop"
        keywords={[t(lang, "shop"), t(lang, "products")]}
      />
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton variant="grid" cardCount={12} height="h-screen" />}>
          <ShopSection
            shopBanner={shopBanner}
            products={shopProducts.products}
            pagination={shopProducts.pagination}
            categories={shopCategories}
            filters={shopFilters}
            className="overflow-hidden"
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
