
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
import { ChevronRight } from "lucide-react";
import { CircleIcon } from "../components/CircleIcon";

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

        {/* Research Papers Section */}
        <section className="py-12 bg-accent">
          <div className="container-content">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t("Research Papers", "Исследовательские работы")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card shadow-md rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">
                  {t("Decentralization & Intelligence", "Децентрализация и интеллект")}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {t(
                    "A comprehensive analysis of blockchain, smart contracts, crypto-utility, and DAOs in modern business and their synergy with AI.",
                    "Комплексный анализ блокчейна, смарт-контрактов, крипто-утилит и DAO в современном бизнесе и их синергия с ИИ."
                  )}
                </p>
                <Link 
                  to="/research-papers?tab=paper1" 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  {t("Read Paper", "Читать статью")}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="bg-card shadow-md rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">
                  {t("Web3 in Action", "Web3 в действии")}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {t(
                    "A comprehensive catalog of decentralized solutions and their transformative applications across various industries.",
                    "Комплексный каталог децентрализованных решений и их трансформационных приложений в различных отраслях."
                  )}
                </p>
                <Link 
                  to="/research-papers?tab=paper2" 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  {t("Read Paper", "Читать статью")}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button variant="secondary" asChild size="lg">
                <Link to="/research-papers">
                  {t("View All Research Papers", "Просмотреть все исследования")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12">
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
                icon={<CircleIcon name="blue-light" size={24} />}
                to="/technologies/blockchain"
              />
              <TechCard
                title={t("Smart Contracts", "Смарт-контракты")}
                description={t(
                  "Self-executing agreements with terms written directly into code, automating processes and eliminating intermediaries.",
                  "Самоисполняющиеся соглашения с условиями, записанными непосредственно в коде, автоматизирующие процессы и устраняющие посредников."
                )}
                icon={<CircleIcon name="purple-light" size={24} />}
                to="/technologies/smart-contracts"
              />
              <TechCard
                title={t("Crypto-Utility", "Крипто-утилиты")}
                description={t(
                  "Beyond speculation, cryptocurrencies and tokens offer powerful utility that can transform payments, fundraising, financial services, and digital ownership.",
                  "Помимо спекуляций, криптовалюты и токены предлагают мощную утилитарность, которая может трансформировать платежи, сбор средств, финансовые услуги и цифровое владение."
                )}
                icon={<CircleIcon name="orange" size={24} />}
                to="/technologies/crypto-utility"
              />
              <TechCard
                title={t("Decentralized Autonomous Organizations", "Децентрализованные автономные организации")}
                description={t(
                  "DAOs represent a paradigm shift in organizational structure, enabling transparent, community-governed entities.",
                  "ДАО представляют собой парадигмальный сдвиг в организационной структуре, обеспечивая прозрачные, управляемые сообществом организации."
                )}
                icon={<CircleIcon name="mint" size={24} />}
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
