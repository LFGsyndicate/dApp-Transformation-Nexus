import React from "react";
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";

export const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container-content text-center">
        <h2 className="text-3xl font-bold mb-6">
          {t("Ready to Transform Your Organization?", "Готовы трансформировать свою организацию?")}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {t(
            "Explore the potential of decentralized technologies and AI to drive efficiency, transparency, and innovation in your operations.",
            "Изучите потенциал децентрализованных технологий и ИИ для повышения эффективности, прозрачности и инноваций в вашей деятельности."
          )}
        </p>
        <Button size="lg">
          {t("Get Started Today", "Начать сегодня")}
        </Button>
      </div>
    </section>
  );
};
