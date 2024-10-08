import { Button } from "primereact/button";
import KhmerFlag from "@src/assets/languages/flag_of_khmer.png";
import EnglishFlag from "@src/assets/languages/flag_of_english.jpg";
import { useTranslation } from "react-i18next";
import useUrlLng from "@src/hooks/useUrlLng";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const { changeLanguage } = useUrlLng();

  return (
    <div className="card flex justify-content-center">
      <Button
        size="large"
        style={{ width: '80px', height: '50px', fontSize: '14px', padding: '0.5rem 1rem' }}
        className=" justify-center border-0"
        text
        onClick={() => changeLanguage(i18n.language === "en" ? "kh" : "en")}
      >
        <img
          src={i18n.language === "en" ? KhmerFlag : EnglishFlag}
          className="h-4"
        />
      </Button>
    </div>
  );
}
