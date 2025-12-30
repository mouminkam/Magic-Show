import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getLanguage } from "../../lib/getLanguage";
import ErrorBoundary from "../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../components/ui/SectionSkeleton";
import PageSEO from "../../components/seo/PageSEO";
import { t } from "../../locales/i18n/getTranslation";

// Lazy load HomeSection with dynamic import
const HomeSection = dynamic(
  () => import("./_components/HomeSection"),
  {
    loading: () => <SectionSkeleton variant="default" height="h-screen" />,
    ssr: true, // Enable SSR for this component
  }
);

// Functions to fetch data (can be replaced with actual API calls later)
async function getHeroData(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/home/hero");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/hero`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    title: "BACK TO DREAM",
    image: "/images/img27.png",
    socialLinks: [
      {
        name: "pinterest",
        label: "Pinterest",
        icon: "FaPinterest",
        href: "#",
      },
      {
        name: "twitter",
        label: "Twitter",
        icon: "Twitter",
        href: "#",
      },
      {
        name: "facebook",
        label: "Facebook",
        icon: "Facebook",
        href: "#",
      },
      {
        name: "google-plus",
        label: "Google Plus",
        icon: "Youtube",
        href: "#",
      },
    ],
  };
}

async function getAboutUsData(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/home/about-us");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/about-us`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    title: "ABOUT US",
    backgroundImage: "/images/img04.jpg",
    leftBadge: "SALE OF 50%",
    rightBadge: "TRENDS FOR 2024",
  };
}

async function getFeaturedProductsData(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/home/featured-products");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/featured-products`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    featuredHeader: {
      title: "FEATURED PRODUCTS",
      subtitle: "MAGIC SHOE STILETTO",
      description: "Figma ipsum component variant main layer. Prototype distribute plugin vertical scale union. Connection fill component variant connection selection project team. Layer variant vertical union frame.",
      buttonText: "See more",
      buttonLink: "#",
    },
    onSaleHeader: {
      title: "ON SALE",
      subtitle: "SAVE UP TO 30% WITH MAGIC SHOE",
      description: "Figma ipsum component variant main layer. Prototype distribute plugin vertical scale union. Connection fill component variant connection selection project team. Layer variant vertical union frame.",
      buttonText: "See more",
      buttonLink: "#",
    },
    featuredProducts: [
      {
        image: "/images/img25.png",
        alt: "Featured Product 2",
        name: "Classic Heel Collection",
        originalPrice: "$299.99",
        discountedPrice: "$199.99",
        width: 600,
        height: 800,
      },
      {
        image: "/images/img26.png",
        alt: "Featured Product 3",
        name: "Elegant Stiletto",
        originalPrice: "$349.99",
        discountedPrice: "$249.99",
        width: 600,
        height: 800,
      },
      {
        image: "/images/img23.jpg",
        alt: "Featured Product 5",
        name: "Premium High Heel",
        originalPrice: "$399.99",
        discountedPrice: "$299.99",
        colSpan: "md:col-span-2 xl:col-span-2",
        rowSpan: "xl:row-span-4",
        width: 600,
        height: 1200,
      },
      {
        image: "/images/img24.jpg",
        alt: "Featured Product 6",
        name: "Designer Heel",
        originalPrice: "$279.99",
        discountedPrice: "$179.99",
        colSpan: "md:col-span-2 xl:col-span-2",
        rowSpan: "xl:row-span-2",
        width: 600,
        height: 800,
      },
      {
        image: "/images/img26.png",
        alt: "Featured Product 8",
        name: "Luxury Heel",
        originalPrice: "$329.99",
        discountedPrice: "$229.99",
        width: 600,
        height: 800,
      },
      {
        image: "/images/img25.png",
        alt: "Featured Product 9",
        name: "Modern Stiletto",
        originalPrice: "$269.99",
        discountedPrice: "$169.99",
        width: 600,
        height: 800,
      },
    ],
    onSaleProducts: [
      {
        image: "/images/img26.png",
        alt: "Featured Product 2",
        name: "Classic Heel Collection",
        originalPrice: "$299.99",
        colSpan: "md:col-span-2 xl:col-span-2",
        discountedPrice: "$199.99",
        width: 600,
        height: 800,
      },
      {
        image: "/images/img29.jpg",
        alt: "Featured Product 5",
        name: "Premium High Heel",
        originalPrice: "$399.99",
        discountedPrice: "$299.99",
        colSpan: "md:col-span-2 xl:col-span-2",
        rowSpan: "xl:row-span-4",
        width: 600,
        height: 1200,
      },
      {
        image: "/images/img30.jpg",
        alt: "Featured Product 6",
        name: "Designer Heel",
        originalPrice: "$279.99",
        discountedPrice: "$179.99",
        colSpan: "md:col-span-2 xl:col-span-2",
        rowSpan: "xl:row-span-2",
        width: 600,
        height: 800,
      },
      {
        image: "/images/img21.png",
        alt: "Featured Product 8",
        name: "Luxury Heel",
        originalPrice: "$329.99",
        discountedPrice: "$229.99",
        width: 600,
        height: 800,
      },
      {
        image: "/images/img29.jpg",
        alt: "Featured Product 9",
        name: "Modern Stiletto",
        originalPrice: "$269.99",
        discountedPrice: "$169.99",
        width: 600,
        height: 800,
      },
    ],
  };
}

async function getBlogSectionData(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/home/blog-section");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/blog-section`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    backgroundImage: "/images/img31.jpg",
    title: "BLOGS",
    leftBadge: "SALE OF 50%",
    rightBadge: "TRENDS FOR 2024",
  };
}

export default async function HomePage() {
  const lang = await getLanguage();

  // Fetch data on the server
  const [heroData, aboutUsData, featuredProductsData, blogSectionData] = await Promise.all([
    getHeroData(lang),
    getAboutUsData(lang),
    getFeaturedProductsData(lang),
    getBlogSectionData(lang),
  ]);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={t(lang, "home") + " - Magic Show"}
        description="Magic Show - Jewelry E-commerce"
        url="/"
        keywords={[t(lang, "home"), "jewelry", "e-commerce"]}
      />
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton variant="default" height="h-screen" />}>
          <HomeSection
            heroData={heroData}
            aboutUsData={aboutUsData}
            featuredProductsData={featuredProductsData}
            blogSectionData={blogSectionData}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
