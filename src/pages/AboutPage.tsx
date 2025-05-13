
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../hooks/useLanguage";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
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
                {t("About The Project", "О проекте")}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {t(
                  "Mission, authorship, and vision behind The Decentralized Transformation Nexus.",
                  "Миссия, авторство и видение, стоящие за Нексусом Децентрализованной Трансформации."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Mission section */}
        <section className="py-12 md:py-16">
          <div className="container-content">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t("Our Mission", "Наша миссия")}
                </h2>
                <div className="space-y-4 text-lg">
                  <p>
                    {t(
                      "The Decentralized Transformation Nexus serves as an authoritative resource illuminating the profound transformative impact of decentralized technologies and their synergy with Artificial Intelligence.",
                      "Нексус Децентрализованной Трансформации служит авторитетным ресурсом, освещающим глубокое трансформационное влияние децентрализованных технологий и их синергии с искусственным интеллектом."
                    )}
                  </p>
                  <p>
                    {t(
                      "Our objective is to transcend a mere catalog, presenting real-world use cases as compelling evidence of tangible benefits—such as enhanced efficiency, radical transparency, robust security, mitigation of corruption, and democratized participation—while providing analytical insights, critical conclusions, and forward-looking perspectives.",
                      "Наша цель — выйти за рамки простого каталога, представляя примеры из реального мира как убедительные доказательства ощутимых преимуществ — таких как повышенная эффективность, радикальная прозрачность, надежная безопасность, смягчение коррупции и демократизированное участие — предоставляя аналитические выводы, критические заключения и перспективные взгляды."
                    )}
                  </p>
                  <p>
                    {t(
                      "We aim to serve as a definitive resource for businesses, researchers, policymakers, and enthusiasts seeking to understand and leverage the revolutionary potential of these technologies.",
                      "Мы стремимся служить определяющим ресурсом для бизнеса, исследователей, политиков и энтузиастов, стремящихся понять и использовать революционный потенциал этих технологий."
                    )}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center p-8">
                  <div className="max-w-md text-center">
                    <div className="text-4xl mb-6">🔍 + 🔮</div>
                    <h3 className="text-xl font-bold mb-4">
                      {t(
                        "Research-Driven Insights & Future Vision",
                        "Аналитические выводы на основе исследований и видение будущего"
                      )}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(
                        "Combining rigorous analysis of current applications with visionary perspectives on future potential.",
                        "Сочетание строгого анализа текущих приложений с перспективным видением будущего потенциала."
                      )}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Authorship section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container-content">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                {t("Authorship", "Авторство")}
              </h2>
              <p className="text-lg mb-8">
                {t(
                  "This resource is based on comprehensive research conducted by CL, synthesizing insights from extensive analysis of decentralized technologies, their mechanisms, business implications, and future potential.",
                  "Этот ресурс основан на всестороннем исследовании, проведенном CL, синтезирующем выводы из обширного анализа децентрализованных технологий, их механизмов, бизнес-последствий и будущего потенциала."
                )}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="default">
                  <a href="https://t.me/ruhunt" target="_blank" rel="noopener noreferrer">
                    Telegram: @ruhunt
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="https://aiix.pro" target="_blank" rel="noopener noreferrer">
                    {t("Order Project", "Заказать проект")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical info section */}
        <section className="py-12 md:py-16">
          <div className="container-content">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t("Technical Information", "Техническая информация")}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">📱</div>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t("Mobile-First Design", "Дизайн Mobile-First")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "Built with a responsive, mobile-first approach following Material Design 3 principles for optimal reading comfort across all devices.",
                    "Создан с отзывчивым подходом mobile-first, следуя принципам Material Design 3 для оптимального комфорта чтения на всех устройствах."
                  )}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🌐</div>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t("Bilingual Support", "Двуязычная поддержка")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "Full English and Russian versions of all content, with intuitive language switching and culturally nuanced translations.",
                    "Полные английская и русская версии всего контента с интуитивным переключением языков и культурно нюансированными переводами."
                  )}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🌓</div>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t("Day & Night Modes", "Дневной и ночной режимы")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "Toggle between ergonomic light and dark themes, both carefully designed for maximum reading comfort and reduced eye strain.",
                    "Переключение между эргономичными светлой и темной темами, обе тщательно разработаны для максимального комфорта чтения и уменьшения напряжения глаз."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore section */}
        <section className="py-12 md:py-16 bg-accent">
          <div className="container-content text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t("Start Exploring", "Начните исследование")}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {t(
                "Discover how decentralized technologies and AI are transforming business models, governance structures, and society through our comprehensive resources.",
                "Откройте для себя, как децентрализованные технологии и ИИ трансформируют бизнес-модели, структуры управления и общество через наши всесторонние ресурсы."
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/technologies">
                  {t("Explore Technologies", "Изучить технологии")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/use-cases">
                  {t("Browse Use Cases", "Просмотреть примеры использования")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/conclusions">
                  {t("Read Conclusions", "Читать выводы")}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
