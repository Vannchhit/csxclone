import { useLanguageStore } from "@src/zustand/language";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export const DEFAULT_LANG = "en";
export const SUPPORTED_LANGS = ["en", "kh"];

type LangParams = {
  lng?: string;
};

const useUrlLng = () => {
  const params = useParams<LangParams>();
  const location = useLocation();
  const languageStore = useLanguageStore();
  const navigate = useNavigate();
  // Validate languageStore.language
  const storeLang = SUPPORTED_LANGS.includes(languageStore.language)
    ? languageStore.language
    : DEFAULT_LANG;

  const lang = params.lng ? params.lng : storeLang;
  const langUrlPrefix = lang === DEFAULT_LANG ? "" : `/${lang}`;
  const path = location.pathname;

  const changeLanguage = (lng: string) => {
    let newSegment = lng;
    let segments = location.pathname.split("/");
    if (segments[1]) {
      segments[1] = newSegment;
    }

    let newPathname = segments.join("/");
    navigate(newPathname);
  };
  return { lang, langUrlPrefix, path, changeLanguage };
};

export default useUrlLng;
