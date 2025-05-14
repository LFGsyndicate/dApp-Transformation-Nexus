
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../hooks/useLanguage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { ChevronRight, Download, ExternalLink, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

const ResearchPapersPage = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultTab = searchParams.get("tab") || "paper1";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-accent/60 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
          <div className="container-content relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {t("Research Papers", "Исследовательские работы")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            <Tabs defaultValue={defaultTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full md:w-[600px] grid-cols-2">
                  <TabsTrigger value="paper1" className="py-3">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span className="hidden sm:inline">
                        {t("Decentralization & Intelligence", "Децентрализация и интеллект")}
                      </span>
                      <span className="sm:hidden">
                        {t("Paper 1", "Статья 1")}
                      </span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="paper2" className="py-3">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span className="hidden sm:inline">
                        {t("Web3 in Action", "Web3 в действии")}
                      </span>
                      <span className="sm:hidden">
                        {t("Paper 2", "Статья 2")}
                      </span>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="paper1" className="space-y-8">
                <div className="bg-card border rounded-lg overflow-hidden">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      {t(
                        "Decentralization & Intelligence: A Comprehensive Analysis of Blockchain, Smart Contracts, Crypto-Utility, and DAOs in Modern Business and Their Synergy with AI",
                        "Децентрализация и интеллект: комплексный анализ блокчейна, смарт-контрактов, крипто-утилит и DAO в современном бизнесе и их синергия с ИИ"
                      )}
                    </h2>
                    
                    <div className="flex flex-wrap gap-4 mt-6">
                      <Button asChild className="flex gap-2">
                        <a 
                          href="https://github.com/LFGsyndicate/Decentralized-Transformation-Nexus/blob/93feee7a3618b2b65b52875936b996ba2dc4bbf1/Decentralization%20%26%20Intelligence_%20A%20Comprehensive%20Analysis%20of%20Blockchain%2C%20Smart%20Contracts%2C%20Crypto-Utility%2C%20and%20DAOs%20in%20Modern%20Business%20and%20Their%20Synergy%20with%20AI.pdf"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Download size={16} />
                          {t("Download PDF", "Скачать PDF")}
                        </a>
                      </Button>
                      
                      <Button variant="outline" asChild className="flex gap-2">
                        <Link to="/use-cases">
                          <ExternalLink size={16} />
                          {t("Browse Use Cases", "Просмотр примеров использования")}
                        </Link>
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
                      
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{t("Technology", "Технология")}</TableHead>
                            <TableHead>{t("Key Benefits", "Ключевые преимущества")}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Blockchain</TableCell>
                            <TableCell>
                              {t("Transparency, immutability, decentralization, reduced operational costs", "Прозрачность, неизменность, децентрализация, сниженные операционные расходы")}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Smart Contracts</TableCell>
                            <TableCell>
                              {t("Automation, disintermediation, reduced counterparty risk, cost savings", "Автоматизация, устранение посредников, снижение риска контрагента, экономия затрат")}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Crypto-Utility</TableCell>
                            <TableCell>
                              {t("Lower transaction costs, borderless payments, innovative fundraising, new financial primitives", "Снижение транзакционных издержек, трансграничные платежи, инновационный фандрайзинг, новые финансовые примитивы")}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">DAOs</TableCell>
                            <TableCell>
                              {t("Democratic governance, transparent resource allocation, global collaboration, reduced bureaucracy", "Демократическое управление, прозрачное распределение ресурсов, глобальное сотрудничество, сниженная бюрократия")}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">AI Integration</TableCell>
                            <TableCell>
                              {t("Enhanced automation, intelligent oracles, optimization of DAO operations, predictive analytics", "Улучшенная автоматизация, интеллектуальные оракулы, оптимизация операций DAO, предиктивная аналитика")}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      
                      <p className="mt-4">{t("This report culminates in a comprehensive compendium of several hundred use cases, each providing official sources for both the application and its underlying technology.", "Этот отчет завершается всеобъемлющим сборником нескольких сотен примеров использования, каждый из которых предоставляет официальные источники как для приложения, так и для его базовой технологии.")}</p>
                      
                      <h3>{t("Methodology", "Методология")}</h3>
                      <p>{t(
                        "The research employed a mixed-methods approach, combining quantitative analysis of blockchain network metrics, qualitative assessment of project documentation and white papers, case study analysis of prominent implementations, and expert interviews with industry leaders.",
                        "В исследовании использовался комбинированный подход, сочетающий количественный анализ метрик блокчейн-сетей, качественную оценку проектной документации и белых книг, анализ кейсов видных реализаций и экспертные интервью с лидерами отрасли."
                      )}</p>
                      
                      <div className="flex justify-center mt-8">
                        <Button variant="default" size="lg" asChild>
                          <a 
                            href="https://github.com/LFGsyndicate/Decentralized-Transformation-Nexus/blob/93feee7a3618b2b65b52875936b996ba2dc4bbf1/Decentralization%20%26%20Intelligence_%20A%20Comprehensive%20Analysis%20of%20Blockchain%2C%20Smart%20Contracts%2C%20Crypto-Utility%2C%20and%20DAOs%20in%20Modern%20Business%20and%20Their%20Synergy%20with%20AI.pdf"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            {t("Read Full Research Paper", "Читать полное исследование")}
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="paper2" className="space-y-8">
                <div className="bg-card border rounded-lg overflow-hidden">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      {t(
                        "Web3 in Action: A Comprehensive Catalog of Decentralized Solutions and Their Transformative Applications",
                        "Web3 в действии: комплексный каталог децентрализованных решений и их трансформационных применений"
                      )}
                    </h2>
                    
                    <div className="flex flex-wrap gap-4 mt-6">
                      <Button asChild className="flex gap-2">
                        <a 
                          href="https://github.com/LFGsyndicate/Decentralized-Transformation-Nexus/blob/main/Cases%20DAO%2C%20crypto%2C%20Web3.pdf"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Download size={16} />
                          {t("Download PDF", "Скачать PDF")}
                        </a>
                      </Button>
                      
                      <Button variant="outline" asChild className="flex gap-2">
                        <Link to="/use-cases">
                          <ExternalLink size={16} />
                          {t("Browse Use Cases", "Просмотр примеров использования")}
                        </Link>
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
                      
                      <div className="not-prose my-6">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>{t("Technology", "Технология")}</TableHead>
                              <TableHead>{t("Description", "Описание")}</TableHead>
                              <TableHead>{t("Key Features", "Ключевые особенности")}</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                {t("Decentralized Autonomous Organizations (DAOs)", "Децентрализованные автономные организации (DAO)")}
                              </TableCell>
                              <TableCell>
                                {t("Internet-native organizations with collective ownership and governance", "Интернет-организации с коллективным владением и управлением")}
                              </TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>{t("Token-based governance", "Управление на основе токенов")}</li>
                                  <li>{t("Transparent treasury management", "Прозрачное управление казначейством")}</li>
                                  <li>{t("Automated decision execution", "Автоматическое исполнение решений")}</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                {t("Smart Contracts", "Смарт-контракты")}
                              </TableCell>
                              <TableCell>
                                {t("Self-executing code that automates agreements", "Самоисполняющийся код, автоматизирующий соглашения")}
                              </TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>{t("Deterministic execution", "Детерминированное исполнение")}</li>
                                  <li>{t("Trustless operations", "Операции без доверия")}</li>
                                  <li>{t("Composability", "Компонуемость")}</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                {t("Crypto-Projects", "Крипто-проекты")}
                              </TableCell>
                              <TableCell>
                                {t("Initiatives built around blockchain-based digital assets", "Инициативы, построенные вокруг цифровых активов на блокчейне")}
                              </TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>{t("Fungible tokens (cryptocurrencies, utility tokens)", "Взаимозаменяемые токены (криптовалюты, утилитарные токены)")}</li>
                                  <li>{t("Non-fungible tokens (NFTs)", "Невзаимозаменяемые токены (NFT)")}</li>
                                  <li>{t("Tokenized real-world assets (RWAs)", "Токенизированные реальные активы (RWA)")}</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                {t("Broader Decentralized Technologies", "Более широкие децентрализованные технологии")}
                              </TableCell>
                              <TableCell>
                                {t("Foundational infrastructure layers supporting Web3", "Фундаментальные инфраструктурные слои, поддерживающие Web3")}
                              </TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>{t("Decentralized storage (IPFS, Arweave)", "Децентрализованное хранилище (IPFS, Arweave)")}</li>
                                  <li>{t("Decentralized identity (DID)", "Децентрализованная идентификация (DID)")}</li>
                                  <li>{t("Oracles (Chainlink, Pyth)", "Оракулы (Chainlink, Pyth)")}</li>
                                  <li>{t("Layer 1 & Layer 2 scaling solutions", "Решения масштабирования Layer 1 и Layer 2")}</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      
                      <p>{t("This paper catalogs over 100 use cases across these different technology categories, offering real-world examples and documentation of their transformative potential.", "Эта статья каталогизирует более 100 примеров использования по этим различным технологическим категориям, предлагая реальные примеры и документацию их трансформационного потенциала.")}</p>
                      
                      <div className="flex justify-center mt-8">
                        <Button variant="default" size="lg" asChild>
                          <a 
                            href="https://github.com/LFGsyndicate/Decentralized-Transformation-Nexus/blob/main/Cases%20DAO%2C%20crypto%2C%20Web3.pdf"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            {t("Read Full Research Paper", "Читать полное исследование")}
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
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
