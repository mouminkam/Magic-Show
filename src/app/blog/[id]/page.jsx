import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getLanguage } from "../../../lib/getLanguage";
import ErrorBoundary from "../../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../../components/ui/SectionSkeleton";
import PageSEO from "../../../components/seo/PageSEO";
import { t } from "../../../locales/i18n/getTranslation";

// Lazy load BlogDetailSection with dynamic import
const BlogDetailSection = dynamic(
  () => import("./_components/BlogDetailSection"),
  {
    loading: () => <SectionSkeleton variant="default" height="h-screen" />,
    ssr: true, // Enable SSR for this component
  }
);

// Function to fetch blog post data (can be replaced with actual API call later)
async function getBlogPost(lang, postId) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get(`/blog/posts/${postId}`);
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/posts/${postId}`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    id: postId,
    title: "Simply Tips for Beauty",
    content: `
      <p>Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.</p>
      <p>Suspendisse ultricies tellus eget nisl lacinia, vitae tempor risus aliquam. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
    `,
    image: "/images/img24.jpg",
    date: "FEBRUARY 3, 2016",
  };
}

// Function to fetch comments (can be replaced with actual API call later)
async function getBlogComments(lang, postId) {
  // TODO: Replace with actual API call when backend is ready
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get(`/blog/posts/${postId}/comments`);
  // return data;

  // Mock data for now - return empty array to use default mock comments
  return [];
}

export default async function BlogDetailPage({ params }) {
  const lang = await getLanguage();
  const resolvedParams = await params;
  const postId = resolvedParams?.id ? String(resolvedParams.id) : null;

  if (!postId) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">
            {t(lang, "invalid_post_id") || "Invalid post ID"}
          </p>
          <a
            href="/blog"
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors inline-block"
          >
            {t(lang, "back_to_blog") || "Back to Blog"}
          </a>
        </div>
      </div>
    );
  }

  // Fetch data from backend
  const [post, comments] = await Promise.all([
    getBlogPost(lang, postId),
    getBlogComments(lang, postId),
  ]);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={(post?.title || t(lang, "blog")) + " - Magic Show"}
        description="Read blog post"
        url={`/blog/${postId}`}
        keywords={[t(lang, "blog")]}
      />
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton variant="default" height="h-screen" />}>
          <BlogDetailSection post={post} comments={comments} postId={postId} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
