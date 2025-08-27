import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useLayoutConfig = () => {
  const { locale } = useParams();
  const [isRtl, setIsRtl] = useState<boolean>(locale === "ar");
  useEffect(() => {
    setIsRtl(locale === "ar");
  }, [locale]);
  return {
    locale,
    isRtl,
  };
};

export default useLayoutConfig;
