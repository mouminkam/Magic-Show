"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { getLanguageClient } from "../../../lib/getLanguageClient";

export default function HeaderLanguageSwitcher() {
  const router = useRouter();
  const lang = getLanguageClient();

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

