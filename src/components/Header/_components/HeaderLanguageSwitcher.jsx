"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { getLanguageClient } from "../../../lib/getLanguageClient";

export default function HeaderLanguageSwitcher({ lang: initialLang }) {
  const router = useRouter();
  // Use initialLang from server during SSR/initial render to prevent hydration mismatch
  // Fallback to getLanguageClient() for backward compatibility if prop is not provided
  const [lang, setLang] = useState(initialLang || getLanguageClient());

  // Update lang when cookies change (client-side only, after hydration)
  useEffect(() => {
    const clientLang = getLanguageClient();
    if (clientLang !== lang) {
      setLang(clientLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once after mount

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    Cookies.set("language", newLang, {
      path: "/",
      sameSite: "lax",
      expires: 365, // 1 year
    });
    // Refresh the page to update Server Components with new language
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium uppercase tracking-wide text-sm md:text-base"
      aria-label={`Switch to ${lang === "ar" ? "English" : "Arabic"}`}
    >
      {lang === "ar" ? "EN" : "AR"}
    </button>
  );
}

