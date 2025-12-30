import { Suspense } from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../components/ui/SectionSkeleton";
import PageSEO from "../../components/seo/PageSEO";
import { getLanguage } from "../../lib/getLanguage";
import { t } from "../../locales/i18n/getTranslation";

// Lazy load AboutUsSection with dynamic import
const AboutUsSection = dynamic(
  () => import("./_components/AboutUsSection"),
  {
    loading: () => <SectionSkeleton variant="default" height="h-screen" />,
    ssr: true, // Enable SSR for this component
  }
);

// Functions to fetch data (can be replaced with actual API calls later)
async function getTeamMembers(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/about/team-members");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about/team-members`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return [
    {
      name: "Christine Jensen",
      role: "Art Director",
      image: "/images/img08.jpg",
    },
    {
      name: "Sarah Williams",
      role: "Creative Director",
      image: "/images/img08.jpg",
    },
    {
      name: "Michael Chen",
      role: "Design Lead",
      image: "/images/img08.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Brand Manager",
      image: "/images/img08.jpg",
    },
    {
      name: "David Thompson",
      role: "Marketing Director",
      image: "/images/img08.jpg",
    },
    {
      name: "Lisa Anderson",
      role: "Product Manager",
      image: "/images/img08.jpg",
    },
    {
      name: "James Wilson",
      role: "Sales Director",
      image: "/images/img08.jpg",
    },
    {
      name: "Maria Garcia",
      role: "Customer Success",
      image: "/images/img08.jpg",
    },
  ];
}

async function getTestimonials(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/about/testimonials");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about/testimonials`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return [
    {
      name: "Press Spaceba",
      image: "/images/img09.jpg",
      text: "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliqua m massa nisl quis neque. Suspendisse in orci enim pharetra, erat sed fermentum feugiat, velit mauris egestas quam ut aliquam massa uspendisse.",
    },
    {
      name: "Maria Garcia",
      image: "/images/img11.jpg",
      text: "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliqua m massa nisl quis neque. Suspendisse in orci enim pharetra, erat sed fermentum feugiat, velit mauris egestas quam ut aliquam massa uspendisse.",
    },
    {
      name: "David Johnson",
      image: "/images/img12.jpg",
      text: "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliqua m massa nisl quis neque. Suspendisse in orci enim pharetra, erat sed fermentum feugiat, velit mauris egestas quam ut aliquam massa uspendisse.",
    },
  ];
}

async function getAboutDescription(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/about/description");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about/description`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    title: "LOVE JEWELRY",
    description: "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim pharetra, erat sed fermentum feugiat. Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim pharetra, erat sed fermentum feugiat. Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim pharetra, erat sed fermentum feugiat.",
    image: "/images/img20.jpg",
    features: [
      "Pharetra, erat sed fermentum feugiat.",
      "Spendisse in orci enim pharetra, erat sed fermentum.",
      "Pharetra, erat sed fermentum feugiat.",
    ],
    buttonText: "Read more",
  };
}

async function getStats(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/about/stats");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about/stats`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return [
    {
      icon: "Users",
      title: "SUBSCRIBERS",
      value: 198.9,
      suffix: "k",
    },
    {
      icon: "Instagram",
      title: "INSTAGRAM FOLLOWERS",
      value: 201.5,
      suffix: "k",
    },
    {
      icon: "ShoppingBag",
      title: "PIECES SOLD",
      value: 23.741,
      suffix: "k",
    },
  ];
}

export default async function AboutUsPage() {
  const lang = await getLanguage();

  // Fetch data on the server with Accept-Language header
  const [teamMembers, testimonials, aboutDescription, stats] = await Promise.all([
    getTeamMembers(lang),
    getTestimonials(lang),
    getAboutDescription(lang),
    getStats(lang),
  ]);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={t(lang, "about_us") + " - Magic Show"}
        description="Learn more about Magic Show"
        url="/about-us"
        keywords={[t(lang, "about_us")]}
      />
      <ErrorBoundary>
        <Suspense
          fallback={<SectionSkeleton variant="default" height="h-screen" />}
        >
          <AboutUsSection
            teamMembers={teamMembers}
            testimonials={testimonials}
            aboutDescription={aboutDescription}
            stats={stats}
            className="overflow-hidden"
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
