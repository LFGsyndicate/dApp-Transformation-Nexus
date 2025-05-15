
import { UseCase, BLOCKCHAIN_PAPER_URL, DEFI_AI_PAPER_URL } from './types';

// Дополнительные кейсы для увеличения общего количества
export const additionalUseCases: UseCase[] = [
  {
    id: "401",
    title: {
      en: "UNCHAIN Protocol Data Verification",
      ru: "Верификация данных UNCHAIN Protocol",
    },
    industry: "Data Integrity",
    technology: "Blockchain",
    description: {
      en: "A blockchain-based data verification system that creates cryptographic proofs of data authenticity, enabling secure sharing of sensitive information with third parties without revealing the underlying data.",
      ru: "Система проверки данных на основе блокчейна, создающая криптографические доказательства подлинности данных, позволяющая безопасно делиться конфиденциальной информацией с третьими сторонами без раскрытия исходных данных.",
    },
    source: {
      en: "UNCHAIN Labs",
      ru: "UNCHAIN Labs",
    },
    link: "https://unchain.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "402",
    title: {
      en: "Zest Protocol Decentralized Insurance",
      ru: "Децентрализованное страхование Zest Protocol",
    },
    industry: "Insurance",
    technology: "Smart Contracts",
    description: {
      en: "A decentralized insurance protocol enabling P2P coverage for various risks, with smart contracts automatically executing claims based on verified data from trusted oracles, reducing administration costs and claim processing time.",
      ru: "Децентрализованный страховой протокол, обеспечивающий P2P-покрытие различных рисков, со смарт-контрактами, автоматически выполняющими выплаты на основе проверенных данных от доверенных оракулов, снижающий административные расходы и время обработки претензий.",
    },
    source: {
      en: "Zest Protocol",
      ru: "Zest Protocol",
    },
    link: "https://zestprotocol.fi/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "403",
    title: {
      en: "Quantum DAO Research Collective",
      ru: "Исследовательский коллектив Quantum DAO",
    },
    industry: "Research",
    technology: "DAO",
    description: {
      en: "A decentralized community of researchers and quantum computing enthusiasts pooling resources to fund research projects and open-source development in the quantum computing field with transparent allocation of grants.",
      ru: "Децентрализованное сообщество исследователей и энтузиастов квантовых вычислений, объединяющих ресурсы для финансирования исследовательских проектов и разработки с открытым исходным кодом в области квантовых вычислений с прозрачным распределением грантов.",
    },
    source: {
      en: "Quantum Foundation",
      ru: "Quantum Foundation",
    },
    link: "https://quantumdao.network/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "404",
    title: {
      en: "MusicVerse Royalty Distribution System",
      ru: "Система распределения роялти MusicVerse",
    },
    industry: "Music",
    technology: "Smart Contracts",
    description: {
      en: "A blockchain-based music platform that automatically splits and distributes royalties to all contributors of a song through smart contracts, ensuring transparent and immediate payments every time the music is played or licensed.",
      ru: "Музыкальная платформа на блокчейне, которая автоматически разделяет и распределяет роялти всем участникам создания песни через смарт-контракты, обеспечивая прозрачные и моментальные выплаты каждый раз, когда музыка воспроизводится или лицензируется.",
    },
    source: {
      en: "MusicVerse",
      ru: "MusicVerse",
    },
    link: "https://musicverse.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "405",
    title: {
      en: "CrossChain Identity Protocol",
      ru: "Межсетевой протокол идентификации",
    },
    industry: "Identity",
    technology: "Blockchain",
    description: {
      en: "A protocol enabling self-sovereign identity management across multiple blockchains, allowing users to maintain a consistent digital identity that works seamlessly between different networks and applications.",
      ru: "Протокол, обеспечивающий самостоятельное управление идентификацией в нескольких блокчейнах, позволяющий пользователям поддерживать последовательную цифровую идентичность, которая работает без проблем между различными сетями и приложениями.",
    },
    source: {
      en: "CrossChain Labs",
      ru: "CrossChain Labs",
    },
    link: "https://crosschainid.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "406",
    title: {
      en: "Arbitrum Nova Gaming Infrastructure",
      ru: "Игровая инфраструктура Arbitrum Nova",
    },
    industry: "Gaming",
    technology: "Blockchain",
    description: {
      en: "A Layer 2 scaling solution optimized for game developers, offering fast transactions, low fees, and specialized tools for in-game assets, player identity, and cross-game interoperability through shared standards.",
      ru: "Решение для масштабирования уровня 2, оптимизированное для разработчиков игр, предлагающее быстрые транзакции, низкие комиссии и специализированные инструменты для внутриигровых активов, идентификации игроков и межигровой совместимости через общие стандарты.",
    },
    source: {
      en: "Offchain Labs",
      ru: "Offchain Labs",
    },
    link: "https://nova.arbitrum.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "407",
    title: {
      en: "Lumina AI Ethically Sourced Training Data",
      ru: "Этично полученные данные для обучения Lumina AI",
    },
    industry: "AI",
    technology: "AI",
    description: {
      en: "An AI system that uses blockchain to verify and compensate creators whose data is used for training machine learning models, creating a transparent marketplace for ethically sourced training data.",
      ru: "Система искусственного интеллекта, использующая блокчейн для проверки и компенсации создателям, чьи данные используются для обучения моделей машинного обучения, создавая прозрачный рынок для этично полученных обучающих данных.",
    },
    source: {
      en: "Lumina Intelligence",
      ru: "Lumina Intelligence",
    },
    link: "https://luminaai.tech/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "408",
    title: {
      en: "CarbonTrack Supply Chain Emissions Monitoring",
      ru: "Мониторинг выбросов в цепочке поставок CarbonTrack",
    },
    industry: "Sustainability",
    technology: "Blockchain",
    description: {
      en: "A blockchain solution tracking carbon emissions throughout global supply chains, providing verifiable carbon footprint data for products from raw material extraction to final delivery with automated reporting.",
      ru: "Блокчейн-решение, отслеживающее выбросы углерода по всей глобальной цепочке поставок, предоставляющее проверяемые данные о углеродном следе продуктов от добычи сырья до конечной доставки с автоматической отчетностью.",
    },
    source: {
      en: "CarbonTrack Inc.",
      ru: "CarbonTrack Inc.",
    },
    link: "https://carbontrack.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "409",
    title: {
      en: "PharmaLedger Clinical Trial Management",
      ru: "Управление клиническими испытаниями PharmaLedger",
    },
    industry: "Healthcare",
    technology: "Blockchain",
    description: {
      en: "A blockchain platform for managing clinical trials that ensures data integrity, patient consent tracking, and regulatory compliance, while enabling secure data sharing between multiple research institutions.",
      ru: "Блокчейн-платформа для управления клиническими испытаниями, обеспечивающая целостность данных, отслеживание согласия пациентов и соответствие нормативным требованиям, позволяя безопасно обмениваться данными между несколькими исследовательскими учреждениями.",
    },
    source: {
      en: "PharmaLedger Consortium",
      ru: "PharmaLedger Consortium",
    },
    link: "https://pharmaledger.org/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "410",
    title: {
      en: "EnergyWeb Decentralized Grid Management",
      ru: "Децентрализованное управление электросетью EnergyWeb",
    },
    industry: "Energy",
    technology: "Blockchain",
    description: {
      en: "A blockchain-based platform enabling decentralized management of power grids, facilitating peer-to-peer energy trading, renewable energy certification, and grid flexibility services with real-time balancing capabilities.",
      ru: "Платформа на основе блокчейна, обеспечивающая децентрализованное управление электросетями, способствующая одноранговой торговле энергией, сертификации возобновляемой энергии и услугам гибкости сети с возможностями балансировки в реальном времени.",
    },
    source: {
      en: "Energy Web Foundation",
      ru: "Energy Web Foundation",
    },
    link: "https://www.energyweb.org/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "411",
    title: {
      en: "Stellar Aid Assistance Distribution",
      ru: "Распределение гуманитарной помощи Stellar Aid",
    },
    industry: "Humanitarian",
    technology: "Blockchain",
    description: {
      en: "A system using the Stellar blockchain to distribute humanitarian aid transparently to disaster victims, enabling real-time tracking of funds from donors to recipients with minimal transaction costs and fraud prevention.",
      ru: "Система, использующая блокчейн Stellar для прозрачного распределения гуманитарной помощи жертвам бедствий, обеспечивающая отслеживание средств от доноров до получателей в реальном времени с минимальными транзакционными издержками и предотвращением мошенничества.",
    },
    source: {
      en: "Stellar Development Foundation",
      ru: "Stellar Development Foundation",
    },
    link: "https://www.stellar.org/foundation/mandate",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "412",
    title: {
      en: "TaxChain Automated Tax Compliance",
      ru: "Автоматизированное соблюдение налогового законодательства TaxChain",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A smart contract system that automates tax calculations, withholding, and reporting for crypto transactions and income, helping users maintain compliance with evolving tax regulations worldwide.",
      ru: "Система смарт-контрактов, которая автоматизирует расчет налогов, удержание и отчетность для криптотранзакций и доходов, помогая пользователям соблюдать соответствие с развивающимися налоговыми правилами по всему миру.",
    },
    source: {
      en: "TaxChain Solutions",
      ru: "TaxChain Solutions",
    },
    link: "https://taxchain.network/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "413",
    title: {
      en: "CreativeDAO Content Creator Collective",
      ru: "Коллектив создателей контента CreativeDAO",
    },
    industry: "Media",
    technology: "DAO",
    description: {
      en: "A decentralized organization for independent content creators to collaborate on projects, share resources, and build audience networks while retaining ownership of their work and receiving fair compensation.",
      ru: "Децентрализованная организация для независимых создателей контента для сотрудничества над проектами, совместного использования ресурсов и создания сетей аудитории, сохраняя при этом право собственности на свою работу и получая справедливую компенсацию.",
    },
    source: {
      en: "CreativeDAO Foundation",
      ru: "CreativeDAO Foundation",
    },
    link: "https://creativedao.art/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "414",
    title: {
      en: "ArtRegistry Provenance Verification",
      ru: "Проверка происхождения ArtRegistry",
    },
    industry: "Art",
    technology: "NFTs",
    description: {
      en: "An NFT-based system for establishing and verifying the provenance of physical artworks, creating an immutable record of ownership history, authenticity certificates, and condition reports for valuable art pieces.",
      ru: "Система на основе NFT для установления и проверки происхождения физических произведений искусства, создающая неизменяемую запись истории владения, сертификатов подлинности и отчетов о состоянии ценных предметов искусства.",
    },
    source: {
      en: "ArtRegistry Foundation",
      ru: "ArtRegistry Foundation",
    },
    link: "https://artregistry.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "415",
    title: {
      en: "Prometeus Decentralized Science Publishing",
      ru: "Децентрализованное научное издательство Prometeus",
    },
    industry: "Science",
    technology: "Blockchain",
    description: {
      en: "A platform for peer-reviewed scientific publishing on blockchain, enabling transparent review processes, researcher reputation tracking, and fair compensation for reviewers and authors without traditional publishers.",
      ru: "Платформа для рецензируемых научных публикаций на блокчейне, обеспечивающая прозрачные процессы рецензирования, отслеживание репутации исследователей и справедливую компенсацию для рецензентов и авторов без традиционных издательств.",
    },
    source: {
      en: "Prometeus Labs",
      ru: "Prometeus Labs",
    },
    link: "https://prometeus.io/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "416",
    title: {
      en: "Mintbase Creator Royalty Protection",
      ru: "Защита авторских отчислений Mintbase",
    },
    industry: "Creator Economy",
    technology: "NFTs",
    description: {
      en: "An NFT marketplace that enforces creator royalties across all secondary sales, even when traded on other platforms, using on-chain enforcement mechanisms to ensure ongoing compensation for original creators.",
      ru: "NFT-маркетплейс, который обеспечивает выплату роялти создателям при всех вторичных продажах, даже при торговле на других платформах, используя механизмы обеспечения в блокчейне для непрерывной компенсации оригинальным создателям.",
    },
    source: {
      en: "Mintbase",
      ru: "Mintbase",
    },
    link: "https://www.mintbase.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "417",
    title: {
      en: "CustodyChain Asset Proof-of-Reserves",
      ru: "Доказательство резервов активов CustodyChain",
    },
    industry: "Finance",
    technology: "Blockchain",
    description: {
      en: "A blockchain solution allowing financial institutions to verifiably prove their crypto asset reserves without revealing sensitive customer information, enhancing transparency and trust in the digital asset ecosystem.",
      ru: "Блокчейн-решение, позволяющее финансовым учреждениям проверяемо доказывать свои криптовалютные резервы без раскрытия конфиденциальной информации о клиентах, повышая прозрачность и доверие в экосистеме цифровых активов.",
    },
    source: {
      en: "CustodyChain Ltd.",
      ru: "CustodyChain Ltd.",
    },
    link: "https://custodychain.com/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "418",
    title: {
      en: "Sovereign Data Custody Platform",
      ru: "Платформа суверенного хранения данных",
    },
    industry: "Privacy",
    technology: "Blockchain",
    description: {
      en: "A decentralized platform enabling individuals to store, manage, and selectively share personal data with service providers while maintaining full ownership and control over who accesses their information.",
      ru: "Децентрализованная платформа, позволяющая людям хранить, управлять и выборочно делиться личными данными с поставщиками услуг, сохраняя при этом полное владение и контроль над тем, кто получает доступ к их информации.",
    },
    source: {
      en: "Sovereign Data Foundation",
      ru: "Sovereign Data Foundation",
    },
    link: "https://sovereigndata.org/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "419",
    title: {
      en: "MetaFactory Digital Fashion NFTs",
      ru: "NFT цифровой моды MetaFactory",
    },
    industry: "Fashion",
    technology: "NFTs",
    description: {
      en: "A community-owned platform creating digital fashion items as NFTs that can be worn in multiple metaverse environments and games, with physical counterparts manufactured on demand when purchased.",
      ru: "Платформа, принадлежащая сообществу, создающая предметы цифровой моды в виде NFT, которые можно носить в различных средах метавселенной и играх, с физическими аналогами, которые производятся по запросу при покупке.",
    },
    source: {
      en: "MetaFactory",
      ru: "MetaFactory",
    },
    link: "https://www.metafactory.ai/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "420",
    title: {
      en: "Aleo Privacy-Preserving Smart Contracts",
      ru: "Смарт-контракты с сохранением конфиденциальности Aleo",
    },
    industry: "Privacy",
    technology: "Smart Contracts",
    description: {
      en: "A blockchain platform enabling fully private smart contracts using zero-knowledge proofs, allowing applications to process sensitive data while keeping the information and the computation itself confidential.",
      ru: "Блокчейн-платформа, обеспечивающая полностью приватные смарт-контракты с использованием доказательств с нулевым разглашением, позволяющая приложениям обрабатывать конфиденциальные данные, сохраняя при этом информацию и сами вычисления конфиденциальными.",
    },
    source: {
      en: "Aleo Systems",
      ru: "Aleo Systems",
    },
    link: "https://aleo.org/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "421",
    title: {
      en: "ThinkDAO Crowdsourced Research Funding",
      ru: "Краудсорсинговое финансирование исследований ThinkDAO",
    },
    industry: "Research",
    technology: "DAO",
    description: {
      en: "A decentralized organization funding academic and independent research projects through community proposal evaluation and quadratic funding, with research outputs published openly and accessible to all.",
      ru: "Децентрализованная организация, финансирующая академические и независимые исследовательские проекты через оценку предложений сообществом и квадратичное финансирование, с результатами исследований, публикуемыми открыто и доступными для всех.",
    },
    source: {
      en: "ThinkDAO",
      ru: "ThinkDAO",
    },
    link: "https://thinkdao.org/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "422",
    title: {
      en: "Votem Secure Digital Voting Platform",
      ru: "Безопасная платформа цифрового голосования Votem",
    },
    industry: "Governance",
    technology: "Blockchain",
    description: {
      en: "A blockchain-based voting platform enabling secure, transparent elections with voter anonymity, vote verification, and resistance to tampering, suitable for government elections and organizational governance.",
      ru: "Платформа для голосования на основе блокчейна, обеспечивающая безопасные, прозрачные выборы с анонимностью избирателей, проверкой голосов и устойчивостью к несанкционированному доступу, подходящая для государственных выборов и организационного управления.",
    },
    source: {
      en: "Votem Corp",
      ru: "Votem Corp",
    },
    link: "https://votem.com/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "423",
    title: {
      en: "Habitat Tokenized Real Estate Investment",
      ru: "Токенизированные инвестиции в недвижимость Habitat",
    },
    industry: "Real Estate",
    technology: "Smart Contracts",
    description: {
      en: "A platform for fractional ownership of real estate through tokenization, allowing investors to purchase shares in properties, receive rental income dividends, and trade their stakes on secondary markets.",
      ru: "Платформа для долевого владения недвижимостью через токенизацию, позволяющая инвесторам приобретать доли в объектах недвижимости, получать дивиденды от арендного дохода и торговать своими долями на вторичных рынках.",
    },
    source: {
      en: "Habitat Investments",
      ru: "Habitat Investments",
    },
    link: "https://habitat.investments/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "424",
    title: {
      en: "Quorum Enterprise Blockchain Solutions",
      ru: "Корпоративные блокчейн-решения Quorum",
    },
    industry: "Enterprise",
    technology: "Blockchain",
    description: {
      en: "An enterprise-focused version of Ethereum enabling private transactions and network permissioning, used by major financial institutions for settlements, trade finance, and interbank payment solutions.",
      ru: "Версия Ethereum, ориентированная на предприятия, обеспечивающая частные транзакции и управление разрешениями сети, используемая крупными финансовыми учреждениями для расчетов, торгового финансирования и решений для межбанковских платежей.",
    },
    source: {
      en: "ConsenSys",
      ru: "ConsenSys",
    },
    link: "https://consensys.io/quorum",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "425",
    title: {
      en: "Thales Prediction Markets",
      ru: "Рынки предсказаний Thales",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A decentralized prediction market protocol allowing users to take positions on the outcome of real-world events, from sports and politics to financial markets, with automated settlement based on reliable oracle data.",
      ru: "Децентрализованный протокол рынка предсказаний, позволяющий пользователям занимать позиции по исходу событий реального мира, от спорта и политики до финансовых рынков, с автоматическим расчетом на основе надежных данных оракула.",
    },
    source: {
      en: "Thales Market",
      ru: "Thales Market",
    },
    link: "https://thalesmarket.io/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "426",
    title: {
      en: "DeSci Labs Open Research Platform",
      ru: "Платформа открытых исследований DeSci Labs",
    },
    industry: "Science",
    technology: "DAO",
    description: {
      en: "A platform connecting scientists, funders, and community members to fund, conduct, and publish research in a decentralized manner, with incentive structures rewarding open science practices and reproducibility.",
      ru: "Платформа, соединяющая ученых, спонсоров и членов сообщества для финансирования, проведения и публикации исследований децентрализованным образом, со структурами стимулирования, вознаграждающими практики открытой науки и воспроизводимость.",
    },
    source: {
      en: "DeSci Labs",
      ru: "DeSci Labs",
    },
    link: "https://www.desci.com/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "427",
    title: {
      en: "Etha Smart Agreements for Legal Contracts",
      ru: "Умные соглашения для юридических контрактов Etha",
    },
    industry: "Legal",
    technology: "Smart Contracts",
    description: {
      en: "A platform bridging traditional legal contracts with blockchain execution, allowing parties to create and manage legally binding agreements that can self-execute specific clauses when conditions are met.",
      ru: "Платформа, соединяющая традиционные юридические контракты с блокчейн-исполнением, позволяющая сторонам создавать и управлять юридически обязывающими соглашениями, которые могут самостоятельно выполнять определенные пункты при выполнении условий.",
    },
    source: {
      en: "Etha Legal Tech",
      ru: "Etha Legal Tech",
    },
    link: "https://etha.legal/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "428",
    title: {
      en: "Hedron Derivatives Exchange",
      ru: "Биржа деривативов Hedron",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A decentralized exchange for cryptocurrency derivatives trading, offering futures, options, and synthetic assets with cross-margin functionality, portfolio margining, and advanced risk management tools.",
      ru: "Децентрализованная биржа для торговли криптовалютными деривативами, предлагающая фьючерсы, опционы и синтетические активы с функциональностью кросс-маржи, портфельным маржированием и продвинутыми инструментами управления рисками.",
    },
    source: {
      en: "Hedron Labs",
      ru: "Hedron Labs",
    },
    link: "https://hedron.exchange/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "429",
    title: {
      en: "CivicLedger Public Infrastructure Management",
      ru: "Управление общественной инфраструктурой CivicLedger",
    },
    industry: "Government",
    technology: "Blockchain",
    description: {
      en: "A blockchain platform for managing public infrastructure assets and utilities, enabling transparent monitoring of maintenance, funding allocation, and usage while reducing administrative overhead and corruption risk.",
      ru: "Блокчейн-платформа для управления объектами общественной инфраструктуры и коммунальными услугами, обеспечивающая прозрачный мониторинг обслуживания, распределения финансирования и использования при снижении административных накладных расходов и риска коррупции.",
    },
    source: {
      en: "CivicLedger",
      ru: "CivicLedger",
    },
    link: "https://civicledger.com/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "430",
    title: {
      en: "DeFi Saver Smart Portfolio Management",
      ru: "Умное управление портфелем DeFi Saver",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A DeFi dashboard and automation platform that manages positions across multiple protocols, with features like automated leverage management, one-click complex strategies, and smart liquidation protection.",
      ru: "Панель управления DeFi и платформа автоматизации, управляющая позициями в нескольких протоколах, с такими функциями, как автоматизированное управление левериджем, сложные стратегии в один клик и умная защита от ликвидации.",
    },
    source: {
      en: "DeFi Saver Team",
      ru: "DeFi Saver Team",
    },
    link: "https://defisaver.com/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "431",
    title: {
      en: "Hyphen Instant Cross-Chain Transfers",
      ru: "Мгновенные межцепочечные переводы Hyphen",
    },
    industry: "Finance",
    technology: "Blockchain",
    description: {
      en: "A protocol enabling instant token transfers between different blockchain networks with minimal fees, solved through a network of liquidity pools and relayers that pre-fill transactions and settle later.",
      ru: "Протокол, обеспечивающий мгновенные переводы токенов между различными блокчейн-сетями с минимальными комиссиями, решаемый через сеть пулов ликвидности и релееров, которые предварительно заполняют транзакции и рассчитываются позже.",
    },
    source: {
      en: "Hyphen Network",
      ru: "Hyphen Network",
    },
    link: "https://hyphen.fi/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "432",
    title: {
      en: "Render Network Distributed GPU Rendering",
      ru: "Распределенный рендеринг GPU Render Network",
    },
    industry: "Technology",
    technology: "Blockchain",
    description: {
      en: "A decentralized network connecting artists and studios needing rendering power with GPU owners willing to rent their computing resources, creating a distributed rendering farm for 3D animation and visual effects.",
      ru: "Децентрализованная сеть, соединяющая художников и студии, нуждающиеся в вычислительной мощности для рендеринга, с владельцами GPU, готовыми сдавать в аренду свои вычислительные ресурсы, создавая распределенную ферму для рендеринга 3D-анимации и визуальных эффектов.",
    },
    source: {
      en: "OTOY",
      ru: "OTOY",
    },
    link: "https://rendernetwork.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "433",
    title: {
      en: "Vibe Protocol Social Reputation System",
      ru: "Система социальной репутации Vibe Protocol",
    },
    industry: "Social",
    technology: "Blockchain",
    description: {
      en: "A decentralized protocol building cross-platform reputation and social graphs, allowing users to maintain their social connections, reputation, and content across different web3 applications and communities.",
      ru: "Децентрализованный протокол, создающий кросс-платформенную репутацию и социальные графы, позволяющий пользователям поддерживать свои социальные связи, репутацию и контент в различных приложениях и сообществах web3.",
    },
    source: {
      en: "Vibe Labs",
      ru: "Vibe Labs",
    },
    link: "https://vibe.xyz/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "434",
    title: {
      en: "Provenance Blockchain Wine Authentication",
      ru: "Аутентификация вина на блокчейне Provenance",
    },
    industry: "Luxury Goods",
    technology: "Blockchain",
    description: {
      en: "A blockchain solution for premium wine authentication and tracking from vineyard to consumer, with NFC-tagged bottles linked to immutable blockchain records detailing production, storage conditions, and ownership history.",
      ru: "Блокчейн-решение для аутентификации и отслеживания премиального вина от винодельни до потребителя, с бутылками с NFC-метками, связанными с неизменяемыми записями в блокчейне, детализирующими производство, условия хранения и историю владения.",
    },
    source: {
      en: "Provenance Blockchain Foundation",
      ru: "Provenance Blockchain Foundation",
    },
    link: "https://provenance.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "435",
    title: {
      en: "Mirror Protocol Synthetic Assets",
      ru: "Синтетические активы Mirror Protocol",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A DeFi protocol that enables the creation of synthetic assets (mirrored assets or mAssets) that track the price of real-world assets like stocks, commodities, and other financial instruments.",
      ru: "DeFi-протокол, который позволяет создавать синтетические активы (зеркальные активы или mAssets), которые отслеживают цену активов реального мира, таких как акции, товары и другие финансовые инструменты.",
    },
    source: {
      en: "Mirror Protocol",
      ru: "Mirror Protocol",
    },
    link: "https://mirror.finance/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "436",
    title: {
      en: "SKALE Network Elastic Blockchains",
      ru: "Эластичные блокчейны SKALE Network",
    },
    industry: "Infrastructure",
    technology: "Blockchain",
    description: {
      en: "A highly scalable multi-chain network enabling developers to create their own customized blockchains with specific parameters for throughput, storage, and functionality while inheriting Ethereum's security.",
      ru: "Высокомасштабируемая мультичейн-сеть, позволяющая разработчикам создавать собственные настраиваемые блокчейны с определенными параметрами для пропускной способности, хранения и функциональности, унаследовав безопасность Ethereum.",
    },
    source: {
      en: "SKALE Labs",
      ru: "SKALE Labs",
    },
    link: "https://skale.space/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "437",
    title: {
      en: "Chainlink Data Feeds for DeFi",
      ru: "Источники данных Chainlink для DeFi",
    },
    industry: "Finance",
    technology: "Blockchain",
    description: {
      en: "A decentralized oracle network providing secure, reliable price feeds and data to DeFi applications, enabling smart contracts to interact with real-world information in a trustless and tamper-proof manner.",
      ru: "Децентрализованная оракул-сеть, предоставляющая безопасные, надежные ценовые потоки и данные для DeFi-приложений, позволяющая смарт-контрактам взаимодействовать с информацией из реального мира безопасным и защищенным от подделки образом.",
    },
    source: {
      en: "Chainlink Labs",
      ru: "Chainlink Labs",
    },
    link: "https://chain.link/data-feeds",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "438",
    title: {
      en: "Electroneum Mobile Payment Solution",
      ru: "Мобильное платежное решение Electroneum",
    },
    industry: "Payments",
    technology: "Blockchain",
    description: {
      en: "A blockchain-based mobile payment solution designed for unbanked populations in developing countries, offering instant, low-cost transactions and a mobile mining experience accessible to smartphone users.",
      ru: "Мобильное платежное решение на основе блокчейна, разработанное для населения без доступа к банковским услугам в развивающихся странах, предлагающее мгновенные, низкозатратные транзакции и опыт мобильного майнинга, доступный пользователям смартфонов.",
    },
    source: {
      en: "Electroneum Ltd",
      ru: "Electroneum Ltd",
    },
    link: "https://electroneum.com/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "439",
    title: {
      en: "Akash Network Decentralized Cloud Computing",
      ru: "Децентрализованные облачные вычисления Akash Network",
    },
    industry: "Cloud Computing",
    technology: "Blockchain",
    description: {
      en: "A decentralized marketplace for cloud computing resources allowing users to rent unused server capacity from data centers and individuals, offering lower costs than traditional cloud providers and improved resource utilization.",
      ru: "Децентрализованный рынок для облачных вычислительных ресурсов, позволяющий пользователям арендовать неиспользуемые серверные мощности у центров обработки данных и частных лиц, предлагая более низкие затраты, чем у традиционных облачных провайдеров, и улучшенное использование ресурсов.",
    },
    source: {
      en: "Akash Network",
      ru: "Akash Network",
    },
    link: "https://akash.network/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "440",
    title: {
      en: "Aragon Court Decentralized Dispute Resolution",
      ru: "Децентрализованное разрешение споров Aragon Court",
    },
    industry: "Legal",
    technology: "DAO",
    description: {
      en: "A decentralized dispute resolution protocol that uses a network of jurors incentivized by game theory to resolve disputes in DAOs and other decentralized applications, without relying on traditional legal systems.",
      ru: "Децентрализованный протокол разрешения споров, использующий сеть присяжных, стимулируемых теорией игр, для разрешения споров в DAO и других децентрализованных приложениях, без опоры на традиционные правовые системы.",
    },
    source: {
      en: "Aragon Association",
      ru: "Aragon Association",
    },
    link: "https://court.aragon.org/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "441",
    title: {
      en: "Unmarshal Blockchain Data Indexing",
      ru: "Индексация данных блокчейна Unmarshal",
    },
    industry: "Data",
    technology: "Blockchain",
    description: {
      en: "A multi-chain data network providing clean and reliable data for blockchain applications, offering indexed and processed on-chain data through APIs to simplify dApp development across multiple blockchains.",
      ru: "Мультичейн-сеть данных, предоставляющая чистые и надежные данные для блокчейн-приложений, предлагающая индексированные и обработанные онлайн-данные через API для упрощения разработки dApp на нескольких блокчейнах.",
    },
    source: {
      en: "Unmarshal",
      ru: "Unmarshal",
    },
    link: "https://unmarshal.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "442",
    title: {
      en: "Binance Chain NFT Marketplace",
      ru: "NFT-маркетплейс Binance Chain",
    },
    industry: "Digital Art",
    technology: "NFTs",
    description: {
      en: "A marketplace for creating, buying, and selling NFTs with low transaction fees, featuring premium events, celebrity collaborations, and exclusive drops while leveraging the Binance ecosystem for global reach.",
      ru: "Маркетплейс для создания, покупки и продажи NFT с низкими комиссиями за транзакции, с премиальными мероприятиями, сотрудничеством со знаменитостями и эксклюзивными выпусками, используя экосистему Binance для глобального охвата.",
    },
    source: {
      en: "Binance",
      ru: "Binance",
    },
    link: "https://www.binance.com/en/nft/home",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "443",
    title: {
      en: "Enjin NFT Gaming Ecosystem",
      ru: "Игровая NFT-экосистема Enjin",
    },
    industry: "Gaming",
    technology: "NFTs",
    description: {
      en: "A platform for creating, integrating, and scaling blockchain games with NFT assets that can be used across multiple games, enabling true ownership and interoperability of virtual items.",
      ru: "Платформа для создания, интеграции и масштабирования блокчейн-игр с NFT-активами, которые можно использовать в нескольких играх, обеспечивая истинное владение и совместимость виртуальных предметов.",
    },
    source: {
      en: "Enjin",
      ru: "Enjin",
    },
    link: "https://enjin.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "444",
    title: {
      en: "Swarm Decentralized Storage",
      ru: "Децентрализованное хранилище Swarm",
    },
    industry: "Storage",
    technology: "Blockchain",
    description: {
      en: "A distributed storage platform and content distribution service designed as the storage layer for Ethereum's web3 stack, incentivizing storage providers with native BZZ tokens while ensuring data availability and redundancy.",
      ru: "Распределенная платформа хранения и служба распространения контента, разработанная как уровень хранения для стека web3 Ethereum, стимулирующая поставщиков хранилища с помощью нативных токенов BZZ при обеспечении доступности данных и избыточности.",
    },
    source: {
      en: "Swarm Foundation",
      ru: "Swarm Foundation",
    },
    link: "https://www.ethswarm.org/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "445",
    title: {
      en: "Gnosis Safe Multi-Signature Wallet",
      ru: "Многоподписный кошелек Gnosis Safe",
    },
    industry: "Security",
    technology: "Smart Contracts",
    description: {
      en: "A multi-signature smart contract wallet securing billions in digital assets for organizations and individuals, requiring multiple approved signatures for transactions to prevent single points of failure.",
      ru: "Многоподписный смарт-контракт кошелек, обеспечивающий безопасность миллиардов в цифровых активах для организаций и частных лиц, требующий нескольких утвержденных подписей для транзакций для предотвращения единых точек отказа.",
    },
    source: {
      en: "Gnosis",
      ru: "Gnosis",
    },
    link: "https://gnosis-safe.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "446",
    title: {
      en: "Hop Protocol Cross-Rollup Transfers",
      ru: "Межроллапные переводы Hop Protocol",
    },
    industry: "Finance",
    technology: "Blockchain",
    description: {
      en: "A protocol that enables fast and cost-effective token transfers between different Ethereum L2 scaling solutions (rollups) and sidechains, solving the fragmented liquidity problem in the Ethereum ecosystem.",
      ru: "Протокол, обеспечивающий быстрые и экономичные переводы токенов между различными L2-решениями масштабирования Ethereum (роллапами) и сайдчейнами, решающий проблему фрагментированной ликвидности в экосистеме Ethereum.",
    },
    source: {
      en: "Hop Protocol",
      ru: "Hop Protocol",
    },
    link: "https://hop.exchange/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "447",
    title: {
      en: "Rally Creator Coins",
      ru: "Монеты создателей Rally",
    },
    industry: "Creator Economy",
    technology: "NFTs",
    description: {
      en: "A platform allowing creators to launch their own branded cryptocurrencies to build independent digital economies with their communities, offering exclusive content, experiences, and merchandise to coin holders.",
      ru: "Платформа, позволяющая создателям запускать свои собственные брендированные криптовалюты для создания независимых цифровых экономик со своими сообществами, предлагая эксклюзивный контент, опыт и товары держателям монет.",
    },
    source: {
      en: "Rally",
      ru: "Rally",
    },
    link: "https://rally.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "448",
    title: {
      en: "Threshold Network Privacy Infrastructure",
      ru: "Инфраструктура приватности Threshold Network",
    },
    industry: "Privacy",
    technology: "Blockchain",
    description: {
      en: "A decentralized threshold cryptography network offering privacy services for blockchains, including private BTC custody (tBTC), confidential computing, and secure private key management for applications.",
      ru: "Децентрализованная сеть пороговой криптографии, предлагающая услуги приватности для блокчейнов, включая частное хранение BTC (tBTC), конфиденциальные вычисления и безопасное управление приватными ключами для приложений.",
    },
    source: {
      en: "Threshold Network",
      ru: "Threshold Network",
    },
    link: "https://threshold.network/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "449",
    title: {
      en: "PowerLedger Energy Trading Platform",
      ru: "Платформа торговли энергией PowerLedger",
    },
    industry: "Energy",
    technology: "Blockchain",
    description: {
      en: "A blockchain-based energy trading platform enabling peer-to-peer electricity trading in microgrids, allowing consumers with solar panels to sell excess energy directly to neighbors at fair market rates.",
      ru: "Платформа для торговли энергией на основе блокчейна, позволяющая осуществлять пиринговую торговлю электричеством в микросетях, позволяя потребителям с солнечными панелями продавать излишки энергии непосредственно соседям по справедливым рыночным ценам.",
    },
    source: {
      en: "Power Ledger",
      ru: "Power Ledger",
    },
    link: "https://powerledger.io/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "450",
    title: {
      en: "Perpetual Protocol Decentralized Perpetuals",
      ru: "Децентрализованные бессрочные контракты Perpetual Protocol",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A decentralized perpetual contract protocol allowing traders to take leveraged long or short positions on various assets without an expiry date, using a virtual automated market maker (vAMM) for pricing and liquidity.",
      ru: "Децентрализованный протокол бессрочных контрактов, позволяющий трейдерам занимать длинные или короткие позиции с левериджем по различным активам без даты истечения, используя виртуальный автоматизированный маркет-мейкер (vAMM) для ценообразования и ликвидности.",
    },
    source: {
      en: "Perpetual Protocol",
      ru: "Perpetual Protocol",
    },
    link: "https://perp.com/",
    researchPaper: DEFI_AI_PAPER_URL,
  }
];

// Экспортируем функцию для получения всех дополнительных кейсов
export const getAllAdditionalUseCases = (): UseCase[] => {
  return additionalUseCases;
};
