import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("site");
  return (
    <div className="h-[70vh] flex justify-center items-center">{t("hero")}</div>
  );
};

export default Hero;
