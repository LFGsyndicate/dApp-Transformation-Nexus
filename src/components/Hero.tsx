
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";

export function Hero() {
  const { t } = useLanguage();
  // Get base path from environment
  const basePath = import.meta.env.VITE_BASE_PATH || '/';

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
              <Link to="/technologies">
                {t("Explore Technologies", "Изучить технологии")}
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/use-cases">
                {t("Browse Use Cases", "Просмотреть примеры использования")}
              </Link>
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-lg"></div>
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative">
              {/* Use the uploaded image for the abstract fluid design with corrected path */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img 
                  src={`${basePath}lovable-uploads/b44163f8-2a72-4112-b57b-a37d258b660d.png`}
                  alt="Decentralized Transformation Concept" 
                  className="w-full h-full object-cover opacity-80" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
