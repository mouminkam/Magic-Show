import { Suspense } from "react";
import dynamic from "next/dynamic";
import AnimatedSection from "../../../components/ui/AnimatedSection";
import ErrorBoundary from "../../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../../components/ui/SectionSkeleton";

// Lazy load sections with dynamic imports
const HeroSection = dynamic(() => import("./HeroSection"), {
  loading: () => <SectionSkeleton variant="default" height="h-screen" />,
  ssr: true,
});

const FeaturedProducts = dynamic(() => import("./FeaturedProducts"), {
  loading: () => (
    <SectionSkeleton variant="grid" cardCount={6} height="h-screen" />
  ),
  ssr: true,
});

/**
 * HomeSection Component
 * Receives data as props from the parent Server Component
 * Each section is lazy loaded for better performance
 * @param {Object} props - Component props
 * @param {Object} props.heroData - Hero section data
 * @param {Object} props.aboutUsData - About Us section data
 * @param {Object} props.featuredProductsData - Featured products data
 * @param {Object} props.blogSectionData - Blog/Newsletter section data
 */
export default function HomeSection({
  heroData = null,
  aboutUsData = null,
  featuredProductsData = null,
  blogSectionData = null,
}) {
  return (
    <>
      {/* Hero Section - Lazy loaded */}
      <ErrorBoundary>
        <Suspense
          fallback={<SectionSkeleton variant="default" height="h-screen" />}
        >
          <AnimatedSection>
            <HeroSection heroData={heroData} />
          </AnimatedSection>
        </Suspense>
      </ErrorBoundary>

      {/* Featured Products Section - Lazy loaded */}
      <ErrorBoundary>
        <Suspense
          fallback={
            <SectionSkeleton variant="grid" cardCount={6} height="h-screen" />
          }
        >
          <AnimatedSection>
            <FeaturedProducts
              featuredHeader={featuredProductsData?.featuredHeader}
              onSaleHeader={featuredProductsData?.onSaleHeader}
              featuredProducts={featuredProductsData?.featuredProducts}
              onSaleProducts={featuredProductsData?.onSaleProducts}
            />
          </AnimatedSection>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
