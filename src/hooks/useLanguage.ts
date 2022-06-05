import useLocalStorage from "./useLocalStorage";

export type Language = "th" | "en";

const useLanguage = (initialValue: Language) => {
  const [language, setLanguage] = useLocalStorage("language", initialValue);
  return [language, setLanguage];
};

export default useLanguage;
