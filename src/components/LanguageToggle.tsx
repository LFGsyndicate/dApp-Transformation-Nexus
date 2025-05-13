import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage}>
      {language === "en" ? "🇬🇧 EN" : "🇷🇺 RU"}
    </Button>
  );
};

export { LanguageToggle };
