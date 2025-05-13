import { useParams, Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CallToAction } from "../components/CallToAction";
import { useLanguage } from "../hooks/useLanguage";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const TechnologyDetailPage = () => {
  const { techId } = useParams<{ techId: string }>();
  const { t } = useLanguage();
  
  // Get technology data based on techId
  const getTechnologyData = () => {
    switch (techId) {
      case 'blockchain':
        return {
          title: t("Blockchain Technology", "Технология блокчейн"),
          icon: "🔗",
          intro: t(
            "The foundational technology enabling decentralized applications and services.",
            "Фундаментальная технология, обеспечивающая децентрализованные приложения и сервисы."
          ),
          sections: [
            {
              title: t("Core Principles", "Основные принципы"),
              content: t(
                "Blockchain technology is built on several key principles: decentralization, where data is distributed across multiple nodes rather than stored centrally; immutability, meaning once data is recorded, it becomes extremely difficult to alter; and transparency, allowing anyone to verify transactions. These features create a secure, tamper-resistant ledger that doesn't rely on traditional intermediaries.",
                "Технология блокчейн построена на нескольких ключевых принципах: децентрализация, где данные распределены между несколькими узлами, а не хранятся централизованно; неизменяемость, означающая, что после записи данных их становится крайне сложно изменить; и прозрачность, позволяющая любому проверять транзакции. Эти функции создают безопасный, защищенный от несанкционированного доступа реестр, который не полагается на традиционных посредников."
              )
            },
            {
              title: t("Consensus Mechanisms", "Механизмы консенсуса"),
              content: t(
                "Consensus mechanisms are the protocols that ensure all nodes in a blockchain network agree on the current state of the ledger. Popular mechanisms include Proof of Work (used by Bitcoin), which requires participants to solve complex puzzles; Proof of Stake (used by Ethereum 2.0), which selects validators based on their cryptocurrency holdings; and Proof of Authority, often used in permissioned networks where validators are pre-approved entities.",
                "Механизмы консенсуса — это протоколы, обеспечивающие согласие всех узлов в сети блокчейн относительно текущего состояния реестра. Популярные механизмы включают Proof of Work (используемый Bitcoin), который требует от участников решения сложных головоломок; Proof of Stake (используемый Ethereum 2.0), который выбирает валидаторов на основе их криптовалютных запасов; и Proof of Authority, часто используемый в сетях с разрешениями, где вали��аторы являются предварительно одобренными организациями."
              )
            },
            {
              title: t("Types of Blockchains", "Типы блокчейнов"),
              content: t(
                "Blockchains can be categorized into public (like Bitcoin and Ethereum), where anyone can participate; private, controlled by a single organization; and consortium blockchains, governed by a group of organizations. These different architectures offer varying trade-offs between decentralization, scalability, and privacy, allowing organizations to choose the model that best fits their specific requirements.",
                "Блокчейны можно разделить на публичные (такие как Bitcoin и Ethereum), где может участвовать каждый; частные, контролируемые одной организацией; и консорциумные блокчейны, управляемые группой организаций. Эти различные архитектуры предлагают разные компромиссы между децентрализацией, масштабируемостью и конфиденциальностью, позволяя организациям выбрать модель, которая наилучшим образом соответствует их конкретным требованиям."
              )
            }
          ],
          relatedTechnologies: ['smart-contracts', 'crypto-utility', 'dao']
        };
      case 'smart-contracts':
        return {
          title: t("Smart Contracts", "Смарт-контракты"),
          icon: "📝",
          intro: t(
            "Self-executing contracts with the terms directly written into code.",
            "Самоисполняющиеся контракты с условиями, непосредственно записанными в коде."
          ),
          sections: [
            {
              title: t("Definition & Functionality", "Определение и функциональность"),
              content: t(
                "Smart contracts are self-executing programs stored on a blockchain that run when predetermined conditions are met. They automate agreement execution so that all participants can be immediately certain of the outcome, without an intermediary's involvement. This capability for automated execution is transforming how businesses approach contractual obligations.",
                "Смарт-контракты — это самоисполняющиеся программы, хранящиеся в блокчейне, которые запускаются при выполнении предопределенных условий. Они автоматизируют исполнение соглашений так, что все участники могут быть немедленно уверены в результате, без участия посредников. Эта возможность автоматического исполнения трансформирует подход бизнеса к договорным обязательствам."
              )
            },
            {
              title: t("Key Capabilities", "Ключевые возможности"),
              content: t(
                "Smart contracts offer automation of processes, reducing the need for manual oversight; reduction of intermediaries and counterparty risk by codifying terms and automating execution; significant cost savings through efficiency gains and minimized disputes; and enhanced transparency and auditability, as their code and execution history are transparent and immutable on the blockchain.",
                "Смарт-контракты предлагают автоматизацию процессов, уменьшая необходи��ость в ручном надзоре; сокращение посредников и риска контрагента путем кодификации условий и автоматизации исполнения; значительную экономию затрат за счет повышения эффективности и минимизации споров; и улучшенную прозрачность и аудируемость, поскольку их код и история выполнения прозрачны и неизменны в блокчейне."
              )
            },
            {
              title: t("Development Platforms", "Платформы разработки"),
              content: t(
                "Several blockchain platforms support smart contract development, including Ethereum (using Solidity language), Solana (using Rust, C, C++), Cardano (using Plutus and Marlowe), and Polkadot (using the Substrate framework). Enterprise-focused options include Hyperledger Fabric, which supports smart contracts in Go, Java, or Node.js, and is designed for permissioned networks.",
                "Несколько блокчейн-платформ поддерживают разработку смарт-контрактов, включая Ethereum (использующий язык Solidity), Solana (использующий Rust, C, C++), Cardano (использующий Plutus и Marlowe) и Polkadot (использующий фреймворк Substrate). Варианты, ориентированные на предприятия, включают Hyperledger Fabric, который поддерживает смарт-контракты на Go, Java или Node.js и предназначен для сетей с разрешениями."
              )
            }
          ],
          relatedTechnologies: ['blockchain', 'dao', 'ai-synergy']
        };
      case 'crypto-utility':
        return {
          title: t("Crypto-Utility", "Крипто-утилиты"),
          icon: "💰",
          intro: t(
            "Cryptocurrencies and tokens with practical applications beyond speculation.",
            "Криптовалюты и токены с практическим применением помимо спекуляций."
          ),
          sections: [
            {
              title: t("Beyond Speculation", "За пределами спекуляций"),
              content: t(
                "The crypto industry is rapidly maturing beyond mere financial speculation into a space offering tangible utility through blockchain technology. These digital assets now serve practical purposes in payments, remittances, innovative fundraising, decentralized finance, and representing ownership of various assets.",
                "Крипто-индустрия быстро развивается за пределами простых финансовых спекуляций в пространство, предлагающее ощутимую полезность через технологию блокчейн. Эти цифровые активы теперь служат практическим целям в платежах, денежных переводах, инновационном сборе средств, децентрализованных финансах и представлении права собственности на различные активы."
              )
            },
            {
              title: t("Payments & Remittances", "Платежи и денежные переводы"),
              content: t(
                "Cryptocurrencies facilitate faster, cheaper cross-border transactions compared to traditional systems. Stablecoins—digital currencies pegged to stable assets like fiat—offer the benefits of crypto (speed, transparency) while minimizing volatility. These technologies significantly reduce costs and increase efficiency in global payments and remittances.",
                "Криптовалюты обеспечивают более быстрые, дешевые трансграничные транзакции по сравнению с традиционными системами. Стейблкоины — цифровые валюты, привязанные к стабильным активам, таким как фиатные деньги — предлагают преимущества криптовалют (скорость, прозрачность), минимизируя волатильность. Эти технологии значительно снижают затраты и повышают эффективность глобальных платежей и денежных переводов."
              )
            },
            {
              title: t("DeFi & NFTs", "DeFi и NFT"),
              content: t(
                "Decentralized Finance (DeFi) recreates traditional financial systems in a decentralized manner, offering services like lending, borrowing, trading, and insurance without intermediaries. Non-Fungible Tokens (NFTs) represent unique digital assets, enabling verifiable ownership of everything from digital art and virtual real estate to intellectual property and access rights. Both technologies are redefining ownership and financial services.",
                "Децентрализованные финансы (DeFi) воссоздают традиционные финансовые системы децентрализованным образом, предлагая услуги, такие как кредитование, заимствование, торговля и страхование без посредников. Невзаимозаменяемые токены (NFT) представляют собой уникальные цифровые активы, позволяющие проверяемое владение всем: от цифрового искусства и виртуальной недвижимости до интеллектуальной собственности и прав доступа. Обе технологии переопределяют понятие собственности и финансовых услуг."
              )
            }
          ],
          relatedTechnologies: ['blockchain', 'dao', 'smart-contracts']
        };
      case 'dao':
        return {
          title: t("Decentralized Autonomous Organizations", "Децентрализованные автономные организации"),
          icon: "🏛️",
          intro: t(
            "Community-governed entities that operate through rules encoded as smart contracts.",
            "Управляемые сообществом организации, работающие посредством правил, закодированных как смарт-контракты."
          ),
          sections: [
            {
              title: t("Anatomy of a DAO", "Анатомия ДАО"),
              content: t(
                "DAOs are essentially organizations where rules and governance mechanisms are embedded in smart contracts on a blockchain. Key components typically include smart contracts forming the backbone, governance tokens representing membership and voting rights, a treasury of collective funds, and a community of members who contribute and participate in decision-making.",
                "ДАО по сути являются организациями, в которых правила и механизмы управления встроены в смарт-контракты в блокчейне. Ключевые компоненты обычно включают смарт-контракты, формирующие основу, токены управления, представляющие членство и право голоса, казначейство к��ллективных средств и сообщество членов, которые вносят вклад и участвуют в принятии решений."
              )
            },
            {
              title: t("Governance Models", "Модели управления"),
              content: t(
                "DAO governance models are diverse and evolving, including token-weighted voting (where voting power corresponds to token holdings); quadratic voting (making each additional vote progressively more expensive to prevent domination by large holders); reputation-based systems (where influence is earned through contributions); multi-signature governance (requiring approval from multiple designated signers); and various hybrid approaches combining these elements.",
                "Модели управления ДАО разнообразны и развиваются, включая голосование, взвешенное по токенам (где сила голоса соответствует количеству токенов); квадратичное голосование (делающее каждый дополнительный голос прогрессивно дороже для предотвращения доминирования крупных держателей); системы, основанные на репутации (где влияние зарабатывается через вклады); мультиподписное управление (требующее одобрения от нескольких назначенных подписывающих); и различные гибридные подходы, сочетающие эти элементы."
              )
            },
            {
              title: t("Applications", "Применения"),
              content: t(
                "DAOs are being used across a remarkable range of fields, including venture capital and investment (pooling resources for funding projects); community management and social DAOs (governing online communities); project funding and grants (distributing resources to support ecosystems); protocol governance (managing parameters of decentralized protocols); service DAOs (collectives offering specialized services); media DAOs (decentralizing content creation); and social impact initiatives (addressing social challenges).",
                "ДАО используются в удивительно широком диапазоне областей, включая венчурный капитал и инвестиции (объединение ресурсов для финансирования проектов); управление сообществом и социальные ДАО (управление онлайн-сообществами); финансирование проектов и гранты (распределение ресурсов для поддержки экосистем); управление протоколами (управление параметрами децентрализованных протоколов); сервисные ДАО (коллективы, предлагающие специализированные услуги); медиа-ДАО (децентрализация создания контента); и инициативы социального воздействия (решение социальных проблем)."
              )
            }
          ],
          relatedTechnologies: ['blockchain', 'smart-contracts', 'ai-synergy']
        };
      case 'ai-synergy':
        return {
          title: t("AI & Blockchain Synergy", "Синергия ИИ и блокчейна"),
          icon: "🤖",
          intro: t(
            "The powerful combination of AI and decentralized technologies is creating transformative innovations.",
            "Мощное сочетание ИИ и децентрализованных технологий создает трансформационные инновации."
          ),
          sections: [
            {
              title: t("Mutual Enhancement", "Взаимное улучшение"),
              content: t(
                "AI and blockchain technologies complement and enhance each other in powerful ways. AI provides intelligence for on-chain operations, data analysis, and decision-making, while blockchain offers a foundation of trust, verification, and secure data management for AI systems. This synergy is moving rapidly from theoretical potential to practical applications across industries.",
                "Технологии ИИ и блокчейн дополняют и улучшают друг друга мощными способами. ИИ обеспечивает интеллект для операций в блокчейне, анализа данных и принятия решений, в то время как блокчейн предлагает основу доверия, проверки и безопасного управления данными для систем ИИ. Эта синергия быстро переходит от теоретического потенциала к практическим приложениям в различных отраслях."
              )
            },
            {
              title: t("AI Enhancing Blockchain", "ИИ улучшает блокчейн"),
              content: t(
                "AI significantly augments blockchain functionality through intelligent oracles that provide nuanced real-world data to smart contracts; optimization and auditing of smart contract code; enhanced efficiency in DAO operations and governance through automated proposal filtering and sentiment analysis; predictive analytics for on-chain data to identify patterns and optimize resources; and improved security through anomaly detection in blockchain networks.",
                "ИИ значительно расширяет функциональность блокчейна через интеллектуальные оракулы, предоставляющие нюансированные данные реального мира смарт-контрактам; оптимизацию и аудит кода смарт-контрактов; повышенную эффективность операций и управления ДАО через автоматическую фильтрацию предложений и анализ настроений; предиктивную аналитику для данных в блокчейне для выявления шаблонов и оптимизации ресурсов; и улучшенную безопасность через обнаружение аномалий в сетях блокчейн."
              )
            },
            {
              title: t("Blockchain Enhancing AI", "Блокчейн улучшает ИИ"),
              content: t(
                "Blockchain technology addresses key challenges in AI development through immutable data trails that enhance trust in AI training data; decentralized AI marketplaces that democratize access to AI tools and models; auditable decision logs for AI actions stored on a transparent blockchain; secure, private data sharing for collaborative AI development; and tokenization of AI assets that creates new economic models around AI development and deployment.",
                "Технология блокчейн решает ключевые проблемы в разработке ИИ через неизменяемые следы данных, повышающие доверие к обучающим данным ИИ; децентрализованные рынки ИИ, демократизирующие доступ к инструментам и моделям ИИ; проверяемые журналы решений для действий ИИ, х��анящиеся в прозрачном блокчейне; безопасный, приватный обмен данными для совместной разработки ИИ; и токенизацию активов ИИ, создающую новые экономические модели вокруг разработки и внедрения ИИ."
              )
            }
          ],
          relatedTechnologies: ['blockchain', 'smart-contracts', 'dao']
        };
      default:
        return {
          title: t("Technology Not Found", "Технология не найдена"),
          icon: "❓",
          intro: t("This technology page does not exist.", "Эта страница технологии не существует."),
          sections: [],
          relatedTechnologies: []
        };
    }
  };

  const techData = getTechnologyData();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-accent py-12">
          <div className="container-content">
            <div className="flex items-center mb-4">
              <Link to="/technologies" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("Technologies", "Технологии")}
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-foreground">{techData.title}</span>
            </div>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-2xl">
                  {techData.icon}
                </div>
                <h1 className="text-4xl font-bold tracking-tight">
                  {techData.title}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">
                {techData.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main content */}
              <div className="lg:col-span-3 space-y-12">
                {techData.sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {techData.relatedTechnologies.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">
                        {t("Related Technologies", "Связанные технологии")}
                      </h3>
                      <div className="space-y-2">
                        {techData.relatedTechnologies.map(tech => {
                          const relatedTech = (() => {
                            switch (tech) {
                              case 'blockchain':
                                return t("Blockchain Technology", "Технология блокчейн");
                              case 'smart-contracts':
                                return t("Smart Contracts", "Смарт-контракты");
                              case 'crypto-utility':
                                return t("Crypto-Utility", "Крипто-утилиты");
                              case 'dao':
                                return t("DAOs", "ДАО");
                              case 'ai-synergy':
                                return t("AI & Blockchain Synergy", "Синергия ИИ и блокчейна");
                              default:
                                return tech;
                            }
                          })();
                          
                          return (
                            <div key={tech} className="py-2 border-b last:border-b-0">
                              <Link 
                                to={`/technologies/${tech}`} 
                                className="text-primary hover:underline"
                              >
                                {relatedTech}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">
                      {t("Explore Further", "Узнать больше")}
                    </h3>
                    <div className="space-y-4">
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/use-cases">
                          {t("View Use Cases", "Примеры использования")}
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/conclusions">
                          {t("Read Conclusions", "Читать выводы")}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyDetailPage;
