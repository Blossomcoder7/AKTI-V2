import { Outlet, useNavigate, useParams } from "react-router";
import WebsiteLoading from "../Elements/loading/WebsiteLoading";
import i18n from "../../i18n/i18n";
import { useEffect, useMemo, useState } from "react";

const LocaleLayout = () => {
  const supportedLocales = useMemo(() => ["en", "ar"], []);
  const { locale } = useParams();
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("app-locale");
    let resolvedLocale = locale;
    if (!resolvedLocale || !supportedLocales.includes(resolvedLocale)) {
      if (savedLocale && supportedLocales.includes(savedLocale)) {
        resolvedLocale = savedLocale;
      } else {
        const browserLang = navigator.language.split("-")[0];
        resolvedLocale = supportedLocales.includes(browserLang)
          ? browserLang
          : "en";
      }
      navigate(`/${resolvedLocale}`, { replace: true });
      return;
    }
    i18n.changeLanguage(resolvedLocale);
    document.documentElement.lang = resolvedLocale;
    document.documentElement.dir = resolvedLocale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("app-locale", resolvedLocale);
    setIsReady(true);
  }, [locale, supportedLocales, navigate]);

  if (!isReady) {
    return <WebsiteLoading />;
  }
  return <Outlet />;
};
export default LocaleLayout;
