
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TechCard } from "@/components/TechCard";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TechnologiesPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-accent py-12">
          <div className="container-content">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight">
                {t("Core Technologies", "Ключевые технологии")}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {t(
                  "Understanding the fundamental building blocks of the decentralized revolution.",
                  "Понимание фундаментальных строительных блоков децентрализованной революции."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="container-content">
            <div className="grid gap-8 md:grid-cols-2">
              <TechCard
                title={t("Blockchain Technology", "Технология блокчейн")}
                description={t(
                  "The foundational technology that enables secure, transparent, and immutable record-keeping across distributed networks. Learn about consensus mechanisms, blockchain types, and their strategic business applications.",
                  "Фундаментальная технология, обеспечивающая безопасное, прозрачное и неизменное ведение записей в распределенных сетях. Узнайте о механизмах консенсуса, типах блокчейнов и их стратегическом применении в бизнесе."
                )}
                icon={<div className="h-6 w-6 text-primary">🔗</div>}
                to="/technologies/blockchain"
              />
              <TechCard
                title={t("Smart Contracts", "Смарт-контракты")}
                description={t(
                  "Self-executing agreements with terms written directly into code, automating processes and eliminating intermediaries. Explore development platforms, use cases, and the legal implications of these powerful automation tools.",
                  "Самоисполняющиеся соглашения с условиями, записанными непосредственно в коде, автоматизирующие процессы и устраняющие посредников. Изучите платформы разработки, примеры использования и юридические аспекты этих мощных инструментов автоматизации."
                )}
                icon={<div className="h-6 w-6 text-primary">📝</div>}
                to="/technologies/smart-contracts"
              />
              <TechCard
                title={t("Crypto-Utility", "Крипто-утилиты")}
                description={t(
                  "Beyond speculation, cryptocurrencies and tokens offer powerful utility that can transform payments, fundraising, financial services, and digital ownership. Discover the evolving landscape of crypto-utility and its real-world applications.",
                  "Помимо спекуляций, криптовалюты и токены предлагают мощную утилитарность, которая может трансформировать платежи, сбор средств, финансовые услуги и цифровое владение. Откройте для себя эволюционирующий ландшафт крипто-утилит и их применение в реальном мире."
                )}
                icon={<div className="h-6 w-6 text-primary">💰</div>}
                to="/technologies/crypto-utility"
              />
              <TechCard
                title={t("Decentralized Autonomous Organizations", "Децентрализованные автономные организации")}
                description={t(
                  "DAOs represent a paradigm shift in organizational structure, enabling transparent, community-governed entities. Examine their anatomy, governance mechanisms, diverse applications, and future potential.",
                  "ДАО представляют собой парадигмальный сдвиг в организационной структуре, обеспечивая прозрачные, управляемые сообществом организации. Изучите их анатомию, механизмы управления, разнообразные приложения и будущий потенциал."
                )}
                icon={<div className="h-6 w-6 text-primary">🏛️</div>}
                to="/technologies/dao"
              />
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">
                {t("Synergistic Convergence", "Синергетическая конвергенция")}
              </h2>
              <TechCard
                title={t("AI & Blockchain Synergy", "Синергия ИИ и блокчейна")}
                description={t(
                  "The powerful combination of Artificial Intelligence and decentralized technologies is creating new paradigms for business, governance, and society. Explore how these technologies complement and enhance each other, driving unprecedented innovation and transformation across sectors.",
                  "Мощное сочетание искусственного интеллекта и децентрализованных технологий создает новые парадигмы для бизнеса, управления и общества. Узнайте, как эти технологии дополняют и улучшают друг друга, стимулируя беспрецедентные инновации и трансформацию во всех секторах."
                )}
                icon={<div className="h-6 w-6 text-primary">🤖</div>}
                to="/technologies/ai-synergy"
                className="bg-gradient-to-br from-background to-accent/30"
              />

              <div className="mt-12 text-center">
                <Button asChild>
                  <Link to="/use-cases">
                    {t("Explore Use Cases", "Изучить примеры использования")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologiesPage;
