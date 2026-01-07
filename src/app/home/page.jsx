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
    // Keep old data for backward compatibility (if needed)
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

async function getLatestBlogData(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/home/latest-blog");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/latest-blog`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    title: "Latest Blog",
    description: "There are many variations of passages of Lorem Ipsum available.",
    posts: [
      {
        id: 1,
        title: "Lorem ipsum dolor ametcons adipisicing elit sed",
        image: "/images/img20.jpg",
        date: "27, Jun 2030",
        author: "Oaklee Odom",
      },
      {
        id: 2,
        title: "Celebrity Daughter Opens About Upto Having Her Eye",
        image: "/images/img14.jpg",
        date: "27, Jun 2030",
        author: "Oaklee Odom",
      },
      {
        id: 3,
        title: "Romantic Love Stories Of Hollywood Popular Celebrities",
        image: "/images/img30.jpg",
        date: "27, Jun 2030",
        author: "Oaklee Odom",
      },
    ],
  };
}

async function getFeaturedCategories(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/categories?featured=true");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?featured=true`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return [
    { name: "Heels", image: "/images/img25.png", slug: "heels" },
    { name: "Boots", image: "/images/img26.png", slug: "boots" },
    { name: "Sneakers", image: "/images/img21.png", slug: "sneakers" },
    { name: "Flats", image: "/images/img22.png", slug: "flats" },
    { name: "Sandals", image: "/images/img25.png", slug: "sandals" },
  ];
}

async function getNewArrivals(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/products?sort=newest&limit=6");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?sort=newest&limit=6`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    header: {
      title: "New Arrivals",
      subtitle: "Latest Collection",
      description: "Be the first to discover our newest arrivals",
      buttonText: "View All",
      buttonLink: "/shop?sort=newest",
    },
    products: [
      {
        id: 1,
        name: "Elegant Stiletto Heel",
        image: "/images/img25.png",
        price: 249.99,
        originalPrice: 299.99,
        category: "Heels",
      },
      {
        id: 2,
        name: "Classic Leather Boots",
        image: "/images/img26.png",
        price: 199.99,
        category: "Boots",
      },
      {
        id: 3,
        name: "Sporty Sneakers",
        image: "/images/img21.png",
        price: 129.99,
        category: "Sneakers",
      },
      {
        id: 4,
        name: "Comfortable Flats",
        image: "/images/img22.png",
        price: 89.99,
        category: "Flats",
      },
    ],
  };
}

async function getBestSellers(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/products?sort=bestseller&limit=6");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?sort=bestseller&limit=6`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    header: {
      title: "Best Sellers",
      subtitle: "Most Popular",
      description: "Our customers' favorite picks",
      buttonText: "View All",
      buttonLink: "/shop?sort=bestseller",
    },
    products: [
      {
        id: 5,
        name: "Premium High Heel",
        image: "/images/img23.jpg",
        price: 299.99,
        originalPrice: 399.99,
        category: "Heels",
      },
      {
        id: 6,
        name: "Designer Heel Collection",
        image: "/images/img24.jpg",
        price: 179.99,
        originalPrice: 279.99,
        category: "Heels",
      },
      {
        id: 7,
        name: "Luxury Boots",
        image: "/images/img29.jpg",
        price: 229.99,
        category: "Boots",
      },
      {
        id: 8,
        name: "Fashion Sneakers",
        image: "/images/img30.jpg",
        price: 149.99,
        category: "Sneakers",
      },
    ],
  };
}

async function getSpecialOffers(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/products?onSale=true&limit=6");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?onSale=true&limit=6`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now - use onSaleProducts from featuredProductsData
  return {
    header: {
      title: "Special Offers",
      subtitle: "Limited Time",
      description: "Don't miss out on these amazing deals",
      buttonText: "Shop All Sales",
      buttonLink: "/shop?onSale=true",
    },
    products: [
      {
        id: 9,
        name: "Classic Heel Collection",
        image: "/images/img26.png",
        price: 199.99,
        originalPrice: 299.99,
        category: "Heels",
        discount: 33,
      },
      {
        id: 10,
        name: "Premium High Heel",
        image: "/images/img29.jpg",
        price: 299.99,
        originalPrice: 399.99,
        category: "Heels",
        discount: 25,
      },
      {
        id: 11,
        name: "Designer Heel",
        image: "/images/img30.jpg",
        price: 179.99,
        originalPrice: 279.99,
        category: "Heels",
        discount: 36,
      },
      {
        id: 12,
        name: "Luxury Heel",
        image: "/images/img21.png",
        price: 229.99,
        originalPrice: 329.99,
        category: "Heels",
        discount: 30,
      },
    ],
  };
}

async function getWhyChooseUs(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/home/why-choose-us");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/why-choose-us`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Static content - no need for API if content doesn't change often
  return [
    {
      icon: "Truck",
      title: "Free Shipping",
      description: "Free shipping on orders over $100",
    },
    {
      icon: "Shield",
      title: "Quality Guaranteed",
      description: "100% authentic products with warranty",
    },
    {
      icon: "RotateCcw",
      title: "Easy Returns",
      description: "30-day return policy, hassle-free",
    },
    {
      icon: "HeadphonesIcon",
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
  ];
}

async function getCustomerReviews(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Uses the same API endpoint as About Us testimonials for consistency
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/reviews?featured=true&limit=6");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews?featured=true&limit=6`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now - Compatible with About Us testimonials structure
  // API should return: { name, text (or comment), image, rating?, date?, productImage? }
  return [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "Absolutely love my new heels! The quality is outstanding and they're so comfortable. Highly recommend!",
      comment: "Absolutely love my new heels! The quality is outstanding and they're so comfortable. Highly recommend!",
      image: "/images/img25.png",
      productImage: "/images/img25.png",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Emily Chen",
      text: "Best shoes I've ever purchased. Fast shipping and perfect fit. Will definitely shop here again!",
      comment: "Best shoes I've ever purchased. Fast shipping and perfect fit. Will definitely shop here again!",
      image: "/images/img26.png",
      productImage: "/images/img26.png",
      rating: 5,
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Maria Garcia",
      text: "Excellent customer service and beautiful products. The boots are even better in person!",
      comment: "Excellent customer service and beautiful products. The boots are even better in person!",
      image: "/images/img21.png",
      productImage: "/images/img21.png",
      rating: 5,
      date: "3 weeks ago",
    },
  ];
}

export default async function HomePage() {
  const lang = await getLanguage();

  // Fetch data on the server
  const [
    heroData,
    aboutUsData,
    featuredProductsData,
    blogSectionData,
    latestBlogData,
    featuredCategories,
    newArrivals,
    bestSellers,
    specialOffers,
    whyChooseUs,
    customerReviews,
  ] = await Promise.all([
    getHeroData(lang),
    getAboutUsData(lang),
    getFeaturedProductsData(lang),
    getBlogSectionData(lang),
    getLatestBlogData(lang),
    getFeaturedCategories(lang),
    getNewArrivals(lang),
    getBestSellers(lang),
    getSpecialOffers(lang),
    getWhyChooseUs(lang),
    getCustomerReviews(lang),
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
            latestBlogData={latestBlogData}
            featuredCategories={featuredCategories}
            newArrivals={newArrivals}
            bestSellers={bestSellers}
            specialOffers={specialOffers}
            whyChooseUs={whyChooseUs}
            customerReviews={customerReviews}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
