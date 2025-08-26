// src/components/Layouts/LocaleLayout.tsx
import { useEffect } from "react";
import { Outlet, useParams, Navigate } from "react-router";
import i18n from "../../i18n/i18n";

const supportedLocales = ["en", "ar"];

const LocaleLayout = () => {
  const { locale } = useParams();

  useEffect(() => {
    if (locale && supportedLocales.includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
  }, [locale]);
  if (!locale || !supportedLocales.includes(locale)) {
    return <Navigate to="/en" replace />;
  }

  return <Outlet />;
};

export default LocaleLayout;
