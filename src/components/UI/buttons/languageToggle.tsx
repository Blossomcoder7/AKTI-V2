import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, MenuItem } from "@mui/material";
import { LANGUAGES } from "../../../options/languages";
import GradientButton from "../../Elements/buttons/GradientButton";

interface LanguageToggleProps {
  next?: () => void;
}
const LanguageToggle = ({ next }: LanguageToggleProps) => {
  const { locale } = useParams();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang?: string) => {
    setAnchorEl(null);
    if (lang && lang !== locale) {
      const currentPath = window.location.pathname;
      const segments = currentPath.split("/").filter(Boolean);
      if (segments.length > 0) {
        segments[0] = lang;
      } else {
        segments.unshift(lang);
      }
      const newPath = "/" + segments.join("/");

      const staticTitle = "AKTI - ";
      const dynamicTitle =
        lang === "ar"
          ? "الخليج للتأمين التكافلي"
          : "AlKhaleej Takaful Insurance";
      document.title = `${staticTitle}${dynamicTitle}`;

      navigate(newPath + window.location.search);
      next?.();
    }
  };

  return (
    <>
      <GradientButton dir="ltr" onClick={handleClick} className="px-4">
        <span className="uppercase font-medium">{locale}</span>
        <IoIosArrowDown className="ml-2" />
      </GradientButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          className:
            "rounded-2xl shadow-lg border border-akti-sand bg-white/90 backdrop-blur-md",
        }}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            {...(lang.code !== "en" ? { dir: "rtl" } : {})}
            key={lang.code}
            onClick={() => handleClose(lang.code)}
            className="!font-sans !uppercase !text-akti-burgundy hover:!bg-akti-sky hover:text-akti-savana! rounded-lg mx-1 my-1 transition-all"
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageToggle;
