
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/ModeToggle";
import { LanguageToggle } from "../components/LanguageToggle";
import { useLanguage } from "../hooks/useLanguage";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container-content flex h-16 items-center">
        <Link to="/" className="mr-4 font-bold text-lg hover:text-primary transition-colors">
          {t("DTN Research", "DTN Research")}
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/technologies" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("Technologies", "Технологии")}
            </Link>
            <Link to="/use-cases" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("Use Cases", "Примеры использования")}
            </Link>
            <Link to="/research-papers" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("Research Papers", "Исследования")}
            </Link>
            <Link to="/conclusions" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("Conclusions", "Выводы")}
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("About", "О проекте")}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle />
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="https://aiix.pro" target="_blank">
              {t("Order Project", "Заказать проект")}
            </Link>
          </Button>
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 inline-flex items-center justify-center rounded-full p-2 md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-y md:hidden">
          <div className="container-content py-4 flex flex-col gap-3">
            <Link to="/technologies" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("Technologies", "Технологии")}
            </Link>
            <Link to="/use-cases" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("Use Cases", "Примеры использования")}
            </Link>
            <Link to="/research-papers" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("Research Papers", "Исследования")}
            </Link>
            <Link to="/conclusions" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("Conclusions", "Выводы")}
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-foreground/80">
              {t("About", "О проекте")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
