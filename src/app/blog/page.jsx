import { Suspense } from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../components/ui/SectionSkeleton";
import PageSEO from "../../components/seo/PageSEO";
import { getLanguage } from "../../lib/getLanguage";
import { t } from "../../locales/i18n/getTranslation";

// Lazy load BlogSection with dynamic import
const BlogSection = dynamic(
  () => import("./_components/BlogSection"),
  {
    loading: () => <SectionSkeleton variant="default" height="h-screen" />,
    ssr: true, // Enable SSR for this component
  }
);

// Functions to fetch data (can be replaced with actual API calls later)
async function getBlogPosts(lang, page = 1) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get(`/blog/posts?page=${page}`);
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/posts?page=${page}`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data - الباك إند سيرجع 3 بوستات فقط للصفحة المطلوبة
  // الباك إند سيتولى الـ pagination بالكامل ويرجع currentPage و totalPages في الـ response
  const mockPostsByPage = {
    1: [
      {
        id: 1,
        title: "Simply Tips for Beauty",
        excerpt:
          "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque...",
        image: "/images/img20.jpg",
        date: "FEBRUARY 3, 2016",
      },
      {
        id: 2,
        title: "Latest Fashion Trends",
        excerpt:
          "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque...",
        image: "/images/img14.jpg",
        date: "FEBRUARY 3, 2016",
      },
      {
        id: 3,
        title: "Summer Collection Guide",
        excerpt:
          "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque...",
        image: "/images/img30.jpg",
        date: "FEBRUARY 3, 2016",
      },
    ],
    2: [
      {
        id: 4,
        title: "Winter Fashion Essentials",
        excerpt:
          "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque...",
        image: "/images/img20.jpg",
        date: "MARCH 15, 2016",
      },
      {
        id: 5,
        title: "Spring Collection Preview",
        excerpt:
          "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque...",
        image: "/images/img14.jpg",
        date: "APRIL 1, 2016",
      },
      {
        id: 6,
        title: "Accessories Guide 2016",
        excerpt:
          "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque...",
        image: "/images/img30.jpg",
        date: "APRIL 20, 2016",
      },
    ],
  };

  // الباك إند سيرجع هذا الـ structure مباشرة
  const totalPages = 2; // الباك إند سيرجع هذا
  return {
    posts: mockPostsByPage[page] || [],
    currentPage: page,
    totalPages: totalPages,
  };
}

async function getBlogBanner(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/blog/banner");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/banner`, {
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

export default async function BlogPage({ searchParams }) {
  const lang = await getLanguage();
  const currentPage = parseInt(searchParams?.page || "1", 10);

  // Fetch data from backend with pagination
  const [blogData, blogBanner] = await Promise.all([
    getBlogPosts(lang, currentPage),
    getBlogBanner(lang),
  ]);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={t(lang, "blog") + " - Magic Show"}
        description="Read our latest blog posts"
        url="/blog"
        keywords={[t(lang, "blog")]}
      />
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton variant="default" height="h-screen" />}>
          <BlogSection
            blogPosts={blogData.posts}
            blogBanner={blogBanner}
            currentPage={blogData.currentPage}
            totalPages={blogData.totalPages}
            className="overflow-hidden"
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
