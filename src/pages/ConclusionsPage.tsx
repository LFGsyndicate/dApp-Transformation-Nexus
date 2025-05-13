
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const ConclusionsPage = () => {
  const { t } = useLanguage();
  
  const keyFindings = [
    {
      title: t(
        "Fundamental Paradigm Shift",
        "Фундаментальный сдвиг парадигмы"
      ),
      description: t(
        "Decentralized technologies are not merely offering incremental improvements but are fostering a fundamental shift towards more transparent, efficient, secure, and equitable systems across commercial enterprises, NPOs, and social movements.",
        "Децентрализованные технологии не просто предлагают постепенные улучшения, но способствуют фундаментальному сдвигу в сторону более прозрачных, эффективных, безопасных и справедливых систем в коммерческих предприятиях, некоммерческих организациях и социальных движениях."
      ),
    },
    {
      title: t(
        "Tangible Business Benefits",
        "Ощутимые бизнес-преимущества"
      ),
      description: t(
        "Organizations implementing these technologies are experiencing substantial reductions in operational expenses, mitigation of bureaucratic inefficiencies, decreased transactional costs, enhanced transparency, and improved system stability.",
        "Организации, внедряющие эти технологии, испытывают существенное сокращение операционных расходов, смягчение бюрократической неэффективности, уменьшение транзакционных издержек, повышение прозрачности и улучшение стабильности системы."
      ),
    },
    {
      title: t(
        "Powerful AI Synergy",
        "Мощная синергия с ИИ"
      ),
      description: t(
        "The combination of decentralized technologies with AI creates a new 'trust and automation' layer for digital interactions, fundamentally altering how value is created, exchanged, and governed across sectors and domains.",
        "Сочетание децентрализованных технологий с искусственным интеллектом создает новый 'слой доверия и автоматизации' для цифровых взаимодействий, что фундаментально меняет способы создания, обмена и управления ценностями во всех секторах и областях."
      ),
    },
  ];

  const strategicImplications = [
    {
      title: t(
        "Competitive Positioning",
        "Конкурентное позиционирование"
      ),
      description: t(
        "Organizations that strategically explore and adopt integrated decentralized and intelligent systems will gain significant advantages in efficiency, trust, and innovation capability over those that delay engagement.",
        "Организации, стратегически исследующие и внедряющие интегрированные децентрализованные и интеллектуальные системы, получат значительные преимущества в эффективности, доверии и инновационных возможностях по сравнению с теми, кто откладывает взаимодействие."
      ),
    },
    {
      title: t(
        "Democratized Access",
        "Демократизированный доступ"
      ),
      description: t(
        "These technologies promise more democratized access to finance, information, and governance, empowering individuals with greater control over their data and digital interactions across global markets and communities.",
        "Эти технологии обещают более демократизированный доступ к финансам, информации и управлению, расширяя возможности людей с большим контролем над своими данными и цифровыми взаимодействиями на глобальных рынках и в сообществах."
      ),
    },
    {
      title: t(
        "Regulatory Evolution",
        "Регуляторная эволюция"
      ),
      description: t(
        "The revolutionary influence of decentralized technologies extends to legal and practical landscapes, requiring adaptive, balanced regulatory approaches that foster innovation while addressing risks and challenges.",
        "Революционное влияние децентрализованных технологий распространяется на правовые и практические ландшафты, требуя адаптивных, сбалансированных регуляторных подходов, которые способствуют инновациям, одновременно решая риски и проблемы."
      ),
    },
  ];

  const futureOutlook = [
    {
      title: t(
        "Intelligent Infrastructure",
        "Интеллектуальная инфраструктура"
      ),
      description: t(
        "The synergy between AI and decentralized technologies will enable self-optimizing supply chains, smart cities with decentralized governance, and personalized healthcare systems operating with unprecedented efficiency and trust.",
        "Синергия между искусственным интеллектом и децентрализованными технологиями обеспечит самооптимизирующиеся цепочки поставок, умные города с децентрализованным управлением и персонализированные системы здравоохранения, работающие с беспрецедентной эффективностью и доверием."
      ),
    },
    {
      title: t(
        "Collaborative Innovation",
        "Совместные инновации"
      ),
      description: t(
        "DAOs and blockchain platforms will facilitate new forms of global collaboration for funding public goods, scientific research, and social impact projects that transcend traditional organizational and national boundaries.",
        "ДАО и блокчейн-платформы будут способствовать новым формам глобального сотрудничества для финансирования общественных благ, научных исследований и проектов социального воздействия, которые выходят за рамки традиционных организационных и национальных границ."
      ),
    },
    {
      title: t(
        "New Economic Models",
        "Новые экономические модели"
      ),
      description: t(
        "Tokenization of assets (real estate, IP, AI models) and the rise of decentralized marketplaces will transform how value is created, distributed, and exchanged in the global economy, enabling novel business models and opportunities.",
        "Токенизация активов (недвижимость, ИС, модели ИИ) и рост децентрализованных рынков трансформируют способы создания, распределения и обмена ценностями в глобальной экономике, обеспечивая новые бизнес-модели и возможности."
      ),
    },
  ];
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-accent py-12">
          <div className="container-content">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight">
                {t("Key Conclusions & Future Outlook", "Ключевые выводы и перспективы на будущее")}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {t(
                  "Synthesized insights from comprehensive research on the transformative impact of decentralized technologies and AI.",
                  "Синтезированные выводы из всестороннего исследования о трансформационном влиянии децентрализованных технологий и ИИ."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="container-content">
            {/* Key Findings */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {t("Key Findings", "Ключевые выводы")}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {keyFindings.map((finding, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{finding.title}</h3>
                      <p className="text-muted-foreground flex-grow">{finding.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* The Journey Continues */}
            <div className="bg-gradient-to-br from-background to-accent/30 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {t("The Journey Towards Adoption", "Путь к внедрению")}
              </h2>
              <p className="text-lg mb-6 max-w-3xl mx-auto text-center">
                {t(
                  "Realizing the vast potential of decentralized technologies requires navigating complex challenges while maintaining focus on their transformative promise.",
                  "Реализация огромного потенциала децентрализованных технологий требует навигации по сложным проблемам при сохранении фокуса на их трансформационном обещании."
                )}
              </p>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {t("Current Challenges", "Текущие вызовы")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="h-6 w-6 flex-shrink-0 text-primary">⚖️</div>
                      <p>
                        {t(
                          "Regulatory uncertainty, especially regarding DAOs and token classifications",
                          "Регуляторная неопределенность, особенно в отношении ДАО и классификаций токенов"
                        )}
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 flex-shrink-0 text-primary">🔄</div>
                      <p>
                        {t(
                          "Scalability limitations of older blockchain networks",
                          "Ограничения масштабируемости старых блокчейн-сетей"
                        )}
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 flex-shrink-0 text-primary">🔗</div>
                      <p>
                        {t(
                          "Interoperability gaps between different blockchain ecosystems",
                          "Пробелы в совместимости между различными блокчейн-экосистемами"
                        )}
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 flex-shrink-0 text-primary">🛡️</div>
                      <p>
                        {t(
                          "Security vulnerabilities in smart contracts and protocol design",
                          "Уязвимости безопасности в смарт-контрактах и дизайне протоколов"
                        )}
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {t("Promising Solutions", "Перспективные решения")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="h-6 w-6 flex-shrink-0 text-primary">🚀</div>
                      <p>
                        {t(
                          "Layer 2 scaling solutions and modular blockchain architectures",
                          "Решения для масштабирования уровня 2 и модульные архитектуры блокчейна"
                        )}
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 flex-shrink-0 text-primary">🌉</div>
                      <p>
                        {t(
                          "Cross-chain protocols for interoperability and asset transfers",
                          "Протоколы между цепочками для обеспечения совместимости и передачи активов"
                        )}
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 flex-shrink-0 text-primary">🔍</div>
                      <p>
                        {t(
                          "Advanced auditing tools and formal verification methods",
                          "Передовые инструменты аудита и методы формальной верификации"
                        )}
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 flex-shrink-0 text-primary">👥</div>
                      <p>
                        {t(
                          "User interface improvements and abstraction of complexity",
                          "Улучшения пользовательского интерфейса и абстрагирование сложности"
                        )}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategic Implications */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {t("Strategic Implications", "Стратегические последствия")}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {strategicImplications.map((item, index) => (
                  <Card key={index} className="h-full bg-gradient-to-br from-background to-primary/5">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground flex-grow">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Future Outlook */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {t("Future Outlook", "Перспективы на будущее")}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {futureOutlook.map((item, index) => (
                  <Card key={index} className="h-full bg-gradient-to-br from-background to-secondary/5">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground flex-grow">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                {t(
                  "The Time for Strategic Exploration is Now",
                  "Время для стратегического исследования — сейчас"
                )}
              </h2>
              <p className="mb-8 max-w-2xl mx-auto text-muted-foreground">
                {t(
                  "Explore the comprehensive collection of use cases to understand how organizations are already leveraging these transformative technologies.",
                  "Исследуйте всестороннюю коллекцию примеров использования, чтобы понять, как организации уже используют эти трансформационные технологии."
                )}
              </p>
              <Button asChild size="lg">
                <Link to="/use-cases">
                  {t("Explore Use Cases", "Изучить примеры использования")}
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

export default ConclusionsPage;
