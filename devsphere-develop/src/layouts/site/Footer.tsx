import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("site");
  return (
    <div className="bg-cyan-50 flex items-center justify-center h-[24vh]">
      {t("footering")}
    </div>
  );
};

export default Footer;
