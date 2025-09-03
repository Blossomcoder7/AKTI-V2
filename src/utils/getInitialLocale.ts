const supportedLocales = ["en", "ar"];

const getInitialLocale = () => {
  const saved = localStorage.getItem("app-locale");
  if (saved) return saved;
  const browserLang = navigator.language.split("-")[0];
  return supportedLocales.includes(browserLang) ? browserLang : "en";
};

export default getInitialLocale;
