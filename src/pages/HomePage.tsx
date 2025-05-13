import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { CallToAction } from "../components/CallToAction";
import { UseCaseCard } from "../components/UseCaseCard";
import { TechCard } from "../components/TechCard";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslatedUseCases } from "../data/useCases";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const HomePage = () => {
  const { t } = useLanguage();
  const useCases = useTranslatedUseCases();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Use Cases Section */}
        <section className="py-12">
          <div className="container-content">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t("Use Cases", "Примеры использования")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {useCases.slice(0, 6).map((useCase) => (
                <UseCaseCard key={useCase.id} useCase={useCase} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link to="/use-cases">
                  {t("Explore All Use Cases", "Изучить все примеры использования")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 bg-muted">
          <div className="container-content">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t("Core Technologies", "Ключевые технологии")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <TechCard
                title={t("Blockchain Technology", "Технология блокчейн")}
                description={t(
                  "The foundational technology that enables secure, transparent, and immutable record-keeping across distributed networks.",
                  "Фундаментальная технология, обеспечивающая безопасное, прозрачное и неизменное ведение записей в распределенных сетях."
                )}
                icon={<div className="h-6 w-6 text-primary">🔗</div>}
                to="/technologies/blockchain"
              />
              <TechCard
                title={t("Smart Contracts", "Смарт-контракты")}
                description={t(
                  "Self-executing agreements with terms written directly into code, automating processes and eliminating intermediaries.",
                  "Самоисполняющиеся соглашения с условиями, записанными непосредственно в коде, автоматизирующие процессы и устраняющие посредников."
                )}
                icon={<div className="h-6 w-6 text-primary">📝</div>}
                to="/technologies/smart-contracts"
              />
              <TechCard
                title={t("Crypto-Utility", "Крипто-утилиты")}
                description={t(
                  "Beyond speculation, cryptocurrencies and tokens offer powerful utility that can transform payments, fundraising, financial services, and digital ownership.",
                  "Помимо спекуляций, криптовалюты и токены предлагают мощную утилитарность, которая может трансформировать платежи, сбор средств, финансовые услуги и цифровое владение."
                )}
                icon={<div className="h-6 w-6 text-primary">💰</div>}
                to="/technologies/crypto-utility"
              />
              <TechCard
                title={t("Decentralized Autonomous Organizations", "Децентрализованные автономные организации")}
                description={t(
                  "DAOs represent a paradigm shift in organizational structure, enabling transparent, community-governed entities.",
                  "ДАО представляют собой парадигмальный сдвиг в организационной структуре, обеспечивая прозрачные, управляемые сообществом организации."
                )}
                icon={<div className="h-6 w-6 text-primary">🏛️</div>}
                to="/technologies/dao"
              />
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link to="/technologies">
                  {t("Explore All Technologies", "Изучить все технологии")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
