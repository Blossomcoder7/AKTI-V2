import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "home",
      "footer",
      "navbar",
      "card",
      "insuranceClaim",
      "MapSection",
      "faq",
      "reviews",
    ],
    defaultNS: "home",
  });

export default i18n;
