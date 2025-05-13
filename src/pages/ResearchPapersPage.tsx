
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../hooks/useLanguage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ResearchPapersPage = () => {
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
                {t("Research Papers", "Исследовательские работы")}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {t(
                  "Comprehensive research on decentralized technologies and their applications in business and society.",
                  "Комплексные исследования децентрализованных технологий и их применения в бизнесе и обществе."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="container-content">
            <Tabs defaultValue="paper1" className="w-full">
              <TabsList className="mb-8 grid w-full md:w-[400px] grid-cols-2">
                <TabsTrigger value="paper1">
                  {t("Decentralization & Intelligence", "Децентрализация и интеллект")}
                </TabsTrigger>
                <TabsTrigger value="paper2">
                  {t("Web3 in Action", "Web3 в действии")}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="paper1" className="space-y-8">
                <div className="bg-card border rounded-lg p-6">
                  <h2 className="text-2xl font-bold">
                    {t(
                      "Decentralization & Intelligence: A Comprehensive Analysis of Blockchain, Smart Contracts, Crypto-Utility, and DAOs in Modern Business and Their Synergy with AI",
                      "Децентрализация и интеллект: комплексный анализ блокчейна, смарт-контрактов, крипто-утилит и DAO в современном бизнесе и их синергия с ИИ"
                    )}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Button variant="outline" asChild className="flex gap-2">
                      <Link to="/use-cases">
                        <ExternalLink size={16} />
                        {t("Browse Use Cases", "Просмотр примеров использования")}
                      </Link>
                    </Button>
                    
                    <Button variant="secondary" className="flex gap-2">
                      <Download size={16} />
                      {t("Download PDF", "Скачать PDF")}
                    </Button>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="prose max-w-none">
                    <h3>{t("Executive Summary", "Краткое содержание")}</h3>
                    <p>{t(
                      "The contemporary business and societal landscape is on the cusp of a significant transformation, driven by the synergistic integration of blockchain technologies, smart contracts, the evolving utility of the crypto-industry beyond speculation, and the innovative governance models of Decentralized Autonomous Organizations (DAOs).",
                      "Современный бизнес и социальный ландшафт находятся на пороге значительной трансформации, обусловленной синергетической интеграцией технологий блокчейн, смарт-контрактов, развивающейся утилитарной ценности крипто-индустрии за пределами спекуляций и инновационных моделей управления Децентрализованных Автономных Организаций (DAO)."
                    )}</p>
                    
                    <p>{t(
                      "This report provides an extensive analysis of these technologies, their current applications, and their profound potential, particularly when augmented by Artificial Intelligence (AI). The core findings indicate that these technologies are not merely offering incremental improvements but are fostering a fundamental shift towards more transparent, efficient, secure, and equitable systems.",
                      "Этот отчет представляет собой обширный анализ этих технологий, их текущих приложений и глубокого потенциала, особенно при усилении искусственным интеллектом (ИИ). Основные выводы указывают на то, что эти технологии не просто предлагают инкрементальные улучшения, но способствуют фундаментальному сдвигу в сторону более прозрачных, эффективных, безопасных и справедливых систем."
                    )}</p>
                    
                    <h3>{t("Key Findings", "Ключевые выводы")}</h3>
                    <ul>
                      <li>{t("Substantial reductions in operational expenses, the mitigation of corruption and bureaucratic inefficiencies, and decreased transactional costs", "Существенное снижение операционных расходов, смягчение коррупции и бюрократической неэффективности, а также снижение транзакционных издержек")}</li>
                      <li>{t("Enhanced transparency in processes, bolstering the stability of systems, and improving the quality and practical application of consensus mechanisms", "Повышение прозрачности процессов, укрепление стабильности систем и улучшение качества и практического применения механизмов консенсуса")}</li>
                      <li>{t("Powerful synergy between decentralized technologies and AI, creating a new 'trust and automation' layer for digital interactions", "Мощная синергия между децентрализованными технологиями и ИИ, создающая новый слой 'доверия и автоматизации' для цифровых взаимодействий")}</li>
                    </ul>
                    
                    <p>{t("This report culminates in a comprehensive compendium of several hundred use cases, each providing official sources for both the application and its underlying technology.", "Этот отчет завершается всеобъемлющим сборником нескольких сотен примеров использования, каждый из которых предоставляет официальные источники как для приложения, так и для его базовой технологии.")}</p>
                    
                    <div className="text-center mt-8 flex justify-between">
                      <Button variant="ghost" disabled className="flex gap-2">
                        <ChevronLeft size={16} />
                        {t("Previous", "Предыдущий")}
                      </Button>
                      
                      <Button className="flex gap-2">
                        {t("Read Full Paper", "Читать полную статью")}
                      </Button>
                      
                      <Button variant="ghost" className="flex gap-2">
                        {t("Next", "Следующий")}
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="paper2" className="space-y-8">
                <div className="bg-card border rounded-lg p-6">
                  <h2 className="text-2xl font-bold">
                    {t(
                      "Web3 in Action: A Comprehensive Catalog of Decentralized Solutions and Their Transformative Applications",
                      "Web3 в действии: комплексный каталог децентрализованных решений и их трансформационных приложений"
                    )}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Button variant="outline" asChild className="flex gap-2">
                      <Link to="/use-cases">
                        <ExternalLink size={16} />
                        {t("Browse Use Cases", "Просмотр примеров использования")}
                      </Link>
                    </Button>
                    
                    <Button variant="secondary" className="flex gap-2">
                      <Download size={16} />
                      {t("Download PDF", "Скачать PDF")}
                    </Button>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="prose max-w-none">
                    <h3>{t("Introduction – The Dawn of a Decentralized Era", "Введение – Рассвет децентрализованной эры")}</h3>
                    <p>{t(
                      "The digital world is undergoing a profound transformation, moving beyond the current Web2 paradigm towards what is increasingly known as Web3. This shift represents more than just a technological upgrade; it signifies a move towards a user-centric internet where individuals have greater control over their data, digital assets, and online interactions.",
                      "Цифровой мир переживает глубокую трансформацию, двигаясь за пределы текущей парадигмы Web2 к тому, что все чаще называют Web3. Этот сдвиг представляет собой больше, чем просто технологическое обновление; он означает движение к интернету, ориентированному на пользователя, где люди имеют больший контроль над своими данными, цифровыми активами и онлайн-взаимодействиями."
                    )}</p>
                    
                    <p>{t(
                      "Web3 is built upon core principles of decentralization, transparency, and immutability, aiming to address the limitations of centralized platforms, such as data silos, censorship, and a lack of true digital ownership. The technologies underpinning this new era, including DAOs, smart contracts, and various crypto-projects, are not merely offering incremental improvements but are laying the foundation for entirely new socio-economic infrastructures and interaction models.",
                      "Web3 построен на основных принципах децентрализации, прозрачности и неизменяемости, стремясь решить ограничения централизованных платформ, такие как изолированность данных, цензура и отсутствие истинного цифрового владения. Технологии, лежащие в основе этой новой эры, включая DAO, смарт-контракты и различные криптопроекты, не просто предлагают постепенные улучшения, но закладывают основу для совершенно новых социально-экономических инфраструктур и моделей взаимодействия."
                    )}</p>
                    
                    <h3>{t("Core Decentralized Technologies", "Основные децентрализованные технологии")}</h3>
                    <p>{t(
                      "This section provides a primer on blockchain technology, smart contracts, the utility-driven aspects of the crypto-industry, and Decentralized Autonomous Organizations (DAOs). Each component plays a distinct yet interconnected role in shaping the new digital frontier.",
                      "В этом разделе представлен обзор технологии блокчейн, смарт-контрактов, утилитарных аспектов крипто-индустрии и децентрализованных автономных организаций (DAO). Каждый компонент играет отдельную, но взаимосвязанную роль в формировании нового цифрового фронтира."
                    )}</p>
                    
                    <div className="text-center mt-8 flex justify-between">
                      <Button variant="ghost" disabled className="flex gap-2">
                        <ChevronLeft size={16} />
                        {t("Previous", "Предыдущий")}
                      </Button>
                      
                      <Button className="flex gap-2">
                        {t("Read Full Paper", "Читать полную статью")}
                      </Button>
                      
                      <Button variant="ghost" className="flex gap-2">
                        {t("Next", "Следующий")}
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPapersPage;
