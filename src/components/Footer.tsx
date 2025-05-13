import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";

export const Footer = () => {
  const { t, changeLanguage } = useLanguage();

  return (
    <footer className="bg-background py-12">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Section - About */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t("About", "О нас")}
            </h4>
            <p className="text-sm text-muted-foreground">
              {t(
                "The Decentralized Transformation Nexus is your guide to understanding decentralized technologies and AI.",
                "Нексус Децентрализованной Трансформации — ваш путеводитель по пониманию децентрализованных технологий и ИИ."
              )}
            </p>
          </div>

          {/* Second Section - Technologies */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t("Technologies", "Технологии")}
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/technologies/blockchain" className="hover:underline">
                  {t("Blockchain", "Блокчейн")}
                </Link>
              </li>
              <li>
                <Link to="/technologies/smart-contracts" className="hover:underline">
                  {t("Smart Contracts", "Смарт-контракты")}
                </Link>
              </li>
              <li>
                <Link to="/technologies/crypto-utility" className="hover:underline">
                  {t("Crypto-Utility", "Крипто-утилиты")}
                </Link>
              </li>
              <li>
                <Link to="/technologies/dao" className="hover:underline">
                  {t("DAOs", "ДАО")}
                </Link>
              </li>
              <li>
                <Link to="/technologies/ai-synergy" className="hover:underline">
                  {t("AI & Blockchain", "ИИ и блокчейн")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Section - Use Cases */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t("Use Cases", "Примеры использования")}
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/use-cases" className="hover:underline">
                  {t("Explore Use Cases", "Изучить примеры использования")}
                </Link>
              </li>
              <li>
                <Link to="/use-cases?industry=finance" className="hover:underline">
                  {t("Finance", "Финансы")}
                </Link>
              </li>
              <li>
                <Link to="/use-cases?industry=supply-chain" className="hover:underline">
                  {t("Supply Chain", "Цепочка поставок")}
                </Link>
              </li>
              <li>
                <Link to="/use-cases?industry=healthcare" className="hover:underline">
                  {t("Healthcare", "Здравоохранение")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Section - Contact & Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t("Contact & Legal", "Контакты и правовая информация")}
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  {t("About", "О нас")}
                </Link>
              </li>
              <li>
                <Button variant="link" onClick={() => window.scrollTo(0, 0)}>
                  {t("Back to Top", "Наверх")}
                </Button>
              </li>
              <li>
                <a href="https://aiix.pro" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {t("Order Project", "Заказать проект")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright & Language Toggle */}
        <div className="mt-12 py-4 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} The Decentralized Transformation Nexus. {t("All rights reserved.", "Все права защищены.")}
        </div>
      </div>
    </footer>
  );
};
