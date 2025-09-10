import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation("notFound");
  console.log("Not found");

  return (
    <div className="flex flex-col items-center bg-white justify-center min-h-screen text-center">
      <h1 className="text-5xl  text-akti-burgundy font-bold">404</h1>
      <p className="mt-2 text-xl text-akti-burgundy font-bold">{t("title")}</p>
      <a
        href="/en/home"
        className="mt-4 px-4 py-2 rounded  text-akti-burgundy  border border-akti-burgundy hover:bg-akti-burgundy hover:text-akti-white"
      >
        {t("button")}
      </a>
    </div>
  );
};

export default NotFound;
