"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getLanguageClient } from "../../lib/getLanguageClient";
import AnimatedSection from "../../components/ui/AnimatedSection";
import ErrorBoundary from "../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../components/ui/SectionSkeleton";
import PageSEO from "../../components/seo/PageSEO";
import { t } from "../../locales/i18n/getTranslation";

const StoresSection = dynamic(
  () => import("./_components/StoresSection"),
  {
    loading: () => <SectionSkeleton variant="default" height="h-screen" />,
    ssr: false,
  }
);

export default function StoresPage() {
  const lang = getLanguageClient();

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={t(lang, "stores") + " - Magic Show"}
        description="Find our stores"
        url="/stores"
        keywords={[t(lang, "stores")]}
      />
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton variant="default" height="h-screen" />}>
          <StoresSection />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
