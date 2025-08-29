import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // load from /public/locales
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", 
    },
    ns: ["home"],
    defaultNS: "home",
  });

export default i18n;
