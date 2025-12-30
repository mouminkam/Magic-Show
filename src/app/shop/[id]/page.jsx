import { Suspense } from "react";
import dynamic from "next/dynamic";
import { use } from "react";
import { getLanguage } from "../../../lib/getLanguage";
import ErrorBoundary from "../../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../../components/ui/SectionSkeleton";
import PageSEO from "../../../components/seo/PageSEO";
import { t } from "../../../locales/i18n/getTranslation";

// Lazy load ProductDetailSection with dynamic import
const ProductDetailSection = dynamic(
  () => import("./_components/ProductDetailSection"),
  {
    loading: () => <SectionSkeleton variant="default" height="h-screen" />,
    ssr: true,
  }
);

// Functions to fetch data (can be replaced with actual API calls later)
async function getProductDetails(lang, productId) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get(`/shop/products/${productId}`);
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/shop/products/${productId}`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    id: productId || 1,
    name: "KENNETH JAY LANE",
    description: "Gold-plated necklace",
    price: 160.0,
    originalPrice: 320.0,
    discount: 50,
    code: "698309",
    images: [
      "/images/img20.jpg",
      "/images/img04.jpg",
      "/images/img04.jpg",
      "/images/img04.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    colors: ["gold"],
    descriptionText:
      "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim pharetra. Ut aliquam massa nisl quis neque. Suspendisse in orci enim pharetra.ut aliquam massa nisl quis neque.",
    rating: 4,
    bannerData: {
      title: "Product Detail",
      backgroundImage: "/images/img04.jpg",
      leftBadge: "SALE OF 50%",
      rightBadge: "TRENDS FOR 2024",
    },
  };
}

async function getRelatedProducts(lang, productId) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get(`/shop/products/${productId}/related`);
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/shop/products/${productId}/related`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return [
    {
      id: 1,
      name: "Goldtone Bib",
      price: 200,
      likes: 45,
      image: "/images/img04.jpg",
    },
    {
      id: 2,
      name: "Goldtone Bib",
      price: 120,
      likes: 23,
      image: "/images/img04.jpg",
    },
    {
      id: 3,
      name: "Goldtone Bib",
      price: 120,
      likes: 23,
      image: "/images/img04.jpg",
    },
    {
      id: 4,
      name: "Goldtone Bib",
      price: 120,
      likes: 23,
      image: "/images/img04.jpg",
    },
    {
      id: 5,
      name: "Goldtone Bib",
      price: 120,
      likes: 23,
      image: "/images/img04.jpg",
    },
    {
      id: 6,
      name: "Goldtone Bib",
      price: 120,
      likes: 23,
      image: "/images/img04.jpg",
    },
  ];
}

export default async function ProductPage({ params }) {
  const lang = await getLanguage();
  const resolvedParams = await params;
  const productId = resolvedParams?.id ? String(resolvedParams.id) : null;

  if (!productId) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">
            {t(lang, "invalid_product_id")}
          </p>
          <a
            href="/shop"
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors inline-block"
          >
            {t(lang, "back_to_shop")}
          </a>
        </div>
      </div>
    );
  }

  // Fetch data on the server
  const [productDetails, relatedProducts] = await Promise.all([
    getProductDetails(lang, productId),
    getRelatedProducts(lang, productId),
  ]);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={t(lang, "product") + " - Magic Show"}
        description="View product details"
        url={`/shop/${productId}`}
        keywords={[t(lang, "product"), "jewelry"]}
      />
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton variant="default" height="h-screen" />}>
          <ProductDetailSection
            productDetails={productDetails}
            relatedProducts={relatedProducts}
            productId={productId}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
