"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getLanguageClient } from "../../lib/getLanguageClient";
import ErrorBoundary from "../../components/ui/ErrorBoundary";
import SectionSkeleton from "../../components/ui/SectionSkeleton";
import PageSEO from "../../components/seo/PageSEO";
import { t } from "../../locales/i18n/getTranslation";

const ShoppingCartSection = dynamic(
  () => import("./_components/ShoppingCartSection"),
  {
    loading: () => <SectionSkeleton variant="default" height="h-screen" />,
    ssr: false,
  }
);

export default function ShoppingCartPage() {
  const lang = getLanguageClient();

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={t(lang, "cart") + " - Magic Show"}
        description="View your shopping cart"
        url="/shoping-cart"
        keywords={[t(lang, "cart")]}
      />
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton variant="default" height="h-screen" />}>
          <ShoppingCartSection />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
