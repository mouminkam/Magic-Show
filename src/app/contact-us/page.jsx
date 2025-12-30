import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getLanguage } from "../../lib/getLanguage";
import ErrorBoundary from "../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../components/ui/SectionSkeleton";
import PageSEO from "../../components/seo/PageSEO";
import { t } from "../../locales/i18n/getTranslation";

const ContactSection = dynamic(
  () => import("./_components/ContactSection"),
  {
    loading: () => <SectionSkeleton variant="default" height="h-screen" />,
    ssr: true,
  }
);

// Functions to fetch data (can be replaced with actual API calls later)
async function getContactHero(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/contact/hero");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact/hero`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    title: "CONTACT US",
    backgroundImage: "/images/img04.jpg",
    leftBadge: "SALE OF 50%",
    rightBadge: "TRENDS FOR 2024",
  };
}

async function getContactMap(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/contact/map");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact/map`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    mapUrl: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13597.136035303396!2d74.35585675451732!3d31.571258754489254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x39191ab43100bd61%3A0x6fca2c2899c49c9d!2sMughalpura%2C+Lahore%2C+Pakistan!3m2!1d31.5711904!2d74.3646122!4m0!5e0!3m2!1sen!2s!4v1459623932322",
  };
}

async function getContactDetails(lang) {
  // TODO: Replace with actual API call when backend is ready
  // Option 1: Using serverAxios
  // const serverAxios = await createServerAxios();
  // const { data } = await serverAxios.get("/contact/details");
  // return data;
  
  // Option 2: Using fetch with Accept-Language header
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact/details`, {
  //   headers: { "Accept-Language": lang },
  //   cache: "no-store",
  // });
  // return res.json();

  // Mock data for now
  return {
    title: "CONTACT DETAIL",
    address: "222-UTC , Americans",
    email: "Support@emtheme.com",
    phone: "(00)-213 1234567",
    fax: "(00)-213 1879017",
    aboutTitle: "ABOUT US",
    aboutText: "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam mauris egestas quam.",
  };
}

export default async function ContactUsPage() {
  const lang = await getLanguage();

  // Fetch data on the server
  const [contactHero, contactMap, contactDetails] = await Promise.all([
    getContactHero(lang),
    getContactMap(lang),
    getContactDetails(lang),
  ]);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={t(lang, "contact_us") + " - Magic Show"}
        description="Contact Magic Show"
        url="/contact-us"
        keywords={[t(lang, "contact_us")]}
      />
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton variant="default" height="h-screen" />}>
          <ContactSection
            contactHero={contactHero}
            contactMap={contactMap}
            contactDetails={contactDetails}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
