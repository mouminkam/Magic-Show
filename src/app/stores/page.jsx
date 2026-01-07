import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getLanguage } from "../../lib/getLanguage";
import ErrorBoundary from "../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../components/ui/SectionSkeleton";
import PageSEO from "../../components/seo/PageSEO";
import { t } from "../../locales/i18n/getTranslation";

const StoresSection = dynamic(
  () => import("./_components/StoresSection"),
  {
    loading: () => <SectionSkeleton variant="default" height="h-screen" />,
    ssr: true,
  }
);

// Functions to fetch data (can be replaced with actual API calls later)
async function getStoresBanner(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/stores/banner");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/stores/banner`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    title: "WHERE TO FIND US",
    backgroundImage: "/images/img04.jpg",
    leftBadge: "SALE OF 50%",
    rightBadge: "TRENDS FOR 2024",
  };
}

// Function to fetch stores data
async function getStores(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/stores");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/stores`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return [
    {
      id: 1,
      name: "JEWELRY BOUTIQUE",
      manager: "Store Manager",
      address: "Syria, Damascus",
      phone: "+963 123 456 789",
      email: "support@jewelry.com",
      hours: "9:00 AM – 7:00 PM",
      lat: 33.5104,
      lng: 36.1893,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106665.08854068762!2d36.18933845985117!3d33.51041295263611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1695678901234!5m2!1sen!2s",
    },
    {
      id: 2,
      name: "JEWELRY SHOWROOM",
      manager: "Store Manager",
      address: "Syria, Damascus",
      phone: "+963 123 456 789",
      email: "support@jewelry.com",
      hours: "9:00 AM – 7:00 PM",
      lat: 33.5150,
      lng: 36.2950,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106665.08854068762!2d36.18933845985117!3d33.51041295263611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1695678901234!5m2!1sen!2s",
    },
    {
      id: 3,
      name: "JEWELRY STUDIO",
      manager: "Store Manager",
      address: "Syria, Damascus",
      phone: "+963 123 456 789",
      email: "support@jewelry.com",
      hours: "9:00 AM – 7:00 PM",
      lat: 33.5050,
      lng: 36.2800,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106665.08854068762!2d36.18933845985117!3d33.51041295263611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1695678901234!5m2!1sen!2s",
    },
  ];
}

export default async function StoresPage() {
  const lang = await getLanguage();

  // Fetch data on the server
  const [storesBanner, stores] = await Promise.all([
    getStoresBanner(lang),
    getStores(lang),
  ]);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={t(lang, "stores") + " - Magic Show"}
        description="Find our store locations - Magic Show"
        url="/stores"
        keywords={[t(lang, "stores")]}
      />
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton variant="default" height="h-screen" />}>
          <StoresSection storesBanner={storesBanner} stores={stores} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

