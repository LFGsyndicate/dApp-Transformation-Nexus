
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative py-10 w-full">
      <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t(
              "The Decentralized Transformation Nexus",
              "Нексус Децентрализованной Трансформации"
            )}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            {t(
              "Your guide to understanding the transformative power of decentralized technologies and AI.",
              "Ваш путеводитель по пониманию преобразующей силы децентрализованных технологий и ИИ."
            )}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="/technologies">
                {t("Explore Technologies", "Изучить технологии")}
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/use-cases">
                {t("Browse Use Cases", "Просмотреть примеры использования")}
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-lg"></div>
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative">
              {/* Replace the logo with abstract fluid design */}
              <div className="absolute inset-0 rounded-lg opacity-10 bg-blend-overlay overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-400/20 to-indigo-600/30"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/20 via-transparent to-purple-700/30 animate-pulse"></div>
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-500/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
                <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
