
import { useLanguage } from "../hooks/useLanguage";

type UseCase = {
  id: string;
  title: { en: string; ru: string };
  industry: string;
  technology: string;
  description: { en: string; ru: string };
  source?: { en: string; ru: string };
  link?: string;
};

const useCases: UseCase[] = [
  // Existing use cases
  {
    id: "1",
    title: {
      en: "Decentralized Supply Chain Management",
      ru: "Децентрализованное управление цепочками поставок",
    },
    industry: "Supply Chain",
    technology: "Blockchain",
    description: {
      en: "Using blockchain to track goods from origin to consumer, ensuring transparency and reducing fraud.",
      ru: "Использование блокчейна для отслеживания товаров от производителя до потребителя, обеспечивая прозрачность и снижая мошенничество.",
    },
  },
  {
    id: "2",
    title: {
      en: "AI-Powered Personalized Education",
      ru: "Персонализированное образование на основе ИИ",
    },
    industry: "Education",
    technology: "AI",
    description: {
      en: "An AI platform that adapts to each student's learning style, providing customized lessons and feedback.",
      ru: "Платформа ИИ, которая адаптируется к стилю обучения каждого ученика, предоставляя индивидуальные уроки и обратную связь.",
    },
  },
  {
    id: "3",
    title: {
      en: "Smart Contract-Based Real Estate Transactions",
      ru: "Транзакции с недвижимостью на основе смарт-контрактов",
    },
    industry: "Real Estate",
    technology: "Smart Contracts",
    description: {
      en: "Automating property sales and rentals using smart contracts, eliminating intermediaries and reducing paperwork.",
      ru: "Автоматизация продаж и аренды недвижимости с использованием смарт-контрактов, устранение посредников и сокращение бумажной работы.",
    },
  },
  {
    id: "4",
    title: {
      en: "DAO-Governed Community Projects",
      ru: "Управляемые DAO общественные проекты",
    },
    industry: "Community",
    technology: "DAO",
    description: {
      en: "Using a DAO to manage and fund local community projects, allowing residents to vote on initiatives and allocate resources.",
      ru: "Использование DAO для управления и финансирования местных общественных проектов, позволяя жителям голосовать за инициативы и распределять ресурсы.",
    },
  },
  {
    id: "5",
    title: {
      en: "AI-Driven Fraud Detection in Finance",
      ru: "Обнаружение мошенничества на основе ИИ в финансах",
    },
    industry: "Finance",
    technology: "AI",
    description: {
      en: "Employing AI algorithms to identify and prevent fraudulent transactions in real-time, enhancing security and reducing losses.",
      ru: "Использование алгоритмов ИИ для выявления и предотвращения мошеннических транзакций в реальном времени, повышение безопасности и снижение убытков.",
    },
  },
  {
    id: "6",
    title: {
      en: "Blockchain-Based Healthcare Records",
      ru: "Медицинские записи на основе блокчейна",
    },
    industry: "Healthcare",
    technology: "Blockchain",
    description: {
      en: "Securing and sharing patient medical records using blockchain, ensuring privacy and interoperability between healthcare providers.",
      ru: "Безопасное хранение и обмен медицинскими записями пациентов с использованием блокчейна, обеспечение конфиденциальности и совместимости между поставщиками медицинских услуг.",
    },
  },
  {
    id: "7",
    title: {
      en: "Smart Contract-Enabled Voting Systems",
      ru: "Системы голосования на основе смарт-контрактов",
    },
    industry: "Government",
    technology: "Smart Contracts",
    description: {
      en: "Creating transparent and tamper-proof voting systems using smart contracts, increasing trust and participation in elections.",
      ru: "Создание прозрачных и защищенных от подделок систем голосования с использованием смарт-контрактов, повышение доверия и участия в выборах.",
    },
  },
  {
    id: "8",
    title: {
      en: "AI-Optimized Energy Consumption",
      ru: "Оптимизация энергопотребления на основе ИИ",
    },
    industry: "Energy",
    technology: "AI",
    description: {
      en: "Using AI to analyze energy consumption patterns and optimize energy distribution, reducing waste and promoting sustainability.",
      ru: "Использование ИИ для анализа моделей энергопотребления и оптимизации распределения энергии, сокращение отходов и содействие устойчивости.",
    },
  },
  {
    id: "9",
    title: {
      en: "DAO-Managed Open Source Projects",
      ru: "Управляемые DAO проекты с открытым исходным кодом",
    },
    industry: "Technology",
    technology: "DAO",
    description: {
      en: "Managing and funding open source software projects using a DAO, allowing developers and users to collectively decide on priorities and allocate resources.",
      ru: "Управление и финансирование проектов программного обеспечения с открытым исходным кодом с использованием DAO, позволяя разработчикам и пользователям коллективно определять приоритеты и распределять ресурсы.",
    },
  },
  {
    id: "10",
    title: {
      en: "Blockchain-Based Digital Identity",
      ru: "Цифровая идентификация на основе блокчейна",
    },
    industry: "Identity",
    technology: "Blockchain",
    description: {
      en: "Creating secure and self-sovereign digital identities using blockchain, giving individuals control over their personal data and reducing identity theft.",
      ru: "Создание безопасных и самоуправляемых цифровых идентификаторов с использованием блокчейна, предоставление людям контроля над своими личными данными и снижение кражи личных данных.",
    },
  },
  // Adding use cases from research papers
  {
    id: "11",
    title: {
      en: "De Beers Tracr Platform",
      ru: "Платформа De Beers Tracr",
    },
    industry: "Supply Chain",
    technology: "Blockchain",
    description: {
      en: "Diamond traceability platform ensuring provenance from source to store. Enhances transparency, combats conflict diamonds, and builds consumer confidence through ethical sourcing verification. Reduces fraud.",
      ru: "Платформа отслеживания алмазов, обеспечивающая происхождение от источника до магазина. Повышает прозрачность, борется с конфликтными алмазами и укрепляет доверие потребителей через проверку этического происхождения. Снижает мошенничество.",
    },
    source: {
      en: "De Beers Group",
      ru: "De Beers Group",
    },
    link: "https://www.tracr.com/",
  },
  {
    id: "12",
    title: {
      en: "MedRec Blockchain Medical Records",
      ru: "Блокчейн для медицинских записей MedRec",
    },
    industry: "Healthcare",
    technology: "Blockchain",
    description: {
      en: "A blockchain system for managing medical record access and permissions, enabling patients to control who can view their data while maintaining privacy and security across healthcare providers.",
      ru: "Блокчейн-система для управления доступом к медицинским записям и разрешениями, позволяющая пациентам контролировать, кто может просматривать их данные, сохраняя конфиденциальность и безопасность у всех поставщиков медицинских услуг.",
    },
    source: {
      en: "MIT Media Lab",
      ru: "MIT Media Lab",
    },
    link: "https://www.media.mit.edu/projects/medrec/overview/",
  },
  {
    id: "13",
    title: {
      en: "Aave DeFi Lending Protocol",
      ru: "DeFi протокол кредитования Aave",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A decentralized lending protocol allowing users to lend and borrow cryptocurrencies without intermediaries, with algorithmically determined interest rates based on market supply and demand.",
      ru: "Децентрализованный кредитный протокол, позволяющий пользователям давать и брать в долг криптовалюты без посредников, с алгоритмически определяемыми процентными ставками на основе рыночного спроса и предложения.",
    },
    source: {
      en: "Aave",
      ru: "Aave",
    },
    link: "https://aave.com/",
  },
  {
    id: "14",
    title: {
      en: "Uniswap Decentralized Exchange",
      ru: "Децентрализованная биржа Uniswap",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "An automated market maker protocol enabling decentralized token swaps without order books, leveraging liquidity pools and smart contracts to determine asset prices and execute trades.",
      ru: "Протокол автоматического маркет-мейкера, обеспечивающий децентрализованный обмен токенов без книг заказов, использующий пулы ликвидности и смарт-контракты для определения цен активов и выполнения сделок.",
    },
    source: {
      en: "Uniswap",
      ru: "Uniswap",
    },
    link: "https://uniswap.org/",
  },
  {
    id: "15",
    title: {
      en: "MakerDAO - DAI Stablecoin",
      ru: "MakerDAO - Стейблкоин DAI",
    },
    industry: "Finance",
    technology: "DAO",
    description: {
      en: "A decentralized governance system managing the DAI stablecoin, where MKR token holders vote on risk parameters, collateral types, and protocol upgrades to maintain the stability of DAI.",
      ru: "Децентрализованная система управления, управляющая стейблкоином DAI, где держатели токенов MKR голосуют за параметры риска, типы обеспечения и обновления протокола для поддержания стабильности DAI.",
    },
    source: {
      en: "MakerDAO",
      ru: "MakerDAO",
    },
    link: "https://makerdao.com/",
  },
  {
    id: "16",
    title: {
      en: "Gitcoin - Public Goods Funding",
      ru: "Gitcoin - Финансирование общественных благ",
    },
    industry: "Technology",
    technology: "DAO",
    description: {
      en: "A platform using quadratic funding to support open-source projects, where contributions are matched based on the number of contributors rather than the amount, democratizing funding decisions.",
      ru: "Платформа, использующая квадратичное финансирование для поддержки проектов с открытым исходным кодом, где вклады сопоставляются на основе количества участников, а не суммы, демократизируя решения о финансировании.",
    },
    source: {
      en: "Gitcoin",
      ru: "Gitcoin",
    },
    link: "https://www.gitcoin.co/",
  },
  {
    id: "17",
    title: {
      en: "VitaDAO - Longevity Research",
      ru: "VitaDAO - Исследования долголетия",
    },
    industry: "Healthcare",
    technology: "DAO",
    description: {
      en: "A community-owned collective funding longevity research and drug development, with IP rights represented as NFTs and governance decisions made by token holders.",
      ru: "Коллектив, принадлежащий сообществу, финансирующий исследования долголетия и разработку лекарств, с правами ИС, представленными в виде NFT, и решениями управления, принимаемыми держателями токенов.",
    },
    source: {
      en: "VitaDAO",
      ru: "VitaDAO",
    },
    link: "https://www.vitadao.com/",
  },
  {
    id: "18",
    title: {
      en: "Decentraland Virtual World",
      ru: "Виртуальный мир Decentraland",
    },
    industry: "Entertainment",
    technology: "NFTs",
    description: {
      en: "A blockchain-based virtual world where users can buy, develop, and monetize virtual land and assets represented as NFTs, with governance managed by a DAO of MANA token holders.",
      ru: "Виртуальный мир на основе блокчейна, где пользователи могут покупать, разрабатывать и монетизировать виртуальную землю и активы, представленные в виде NFT, с управлением через DAO держателей токенов MANA.",
    },
    source: {
      en: "Decentraland",
      ru: "Decentraland",
    },
    link: "https://decentraland.org/",
  },
  {
    id: "19",
    title: {
      en: "Ethereum Name Service (ENS)",
      ru: "Сервис имён Ethereum (ENS)",
    },
    industry: "Identity",
    technology: "Blockchain",
    description: {
      en: "A distributed, open naming system based on the Ethereum blockchain that maps human-readable names to machine-readable identifiers like Ethereum addresses, content hashes, and metadata.",
      ru: "Распределенная, открытая система именования на основе блокчейна Ethereum, которая сопоставляет человекочитаемые имена с машиночитаемыми идентификаторами, такими как адреса Ethereum, хеши контента и метаданные.",
    },
    source: {
      en: "ENS",
      ru: "ENS",
    },
    link: "https://ens.domains/",
  },
  {
    id: "20",
    title: {
      en: "Chainlink Oracles",
      ru: "Оракулы Chainlink",
    },
    industry: "Technology",
    technology: "Blockchain",
    description: {
      en: "A decentralized oracle network that enables smart contracts on blockchains to securely access off-chain data, API calls, and payments, bridging the gap between blockchain and the real world.",
      ru: "Децентрализованная сеть оракулов, которая позволяет смарт-контрактам на блокчейнах безопасно получать доступ к данным вне блокчейна, вызовам API и платежам, преодолевая разрыв между блокчейном и реальным миром.",
    },
    source: {
      en: "Chainlink",
      ru: "Chainlink",
    },
    link: "https://chain.link/",
  },
  {
    id: "21",
    title: {
      en: "Audius Music Platform",
      ru: "Музыкальная платформа Audius",
    },
    industry: "Entertainment",
    technology: "Blockchain",
    description: {
      en: "A decentralized music streaming platform that allows artists to publish their music and be directly rewarded by fans, eliminating middlemen and giving creators more control and revenue.",
      ru: "Децентрализованная платформа для потоковой передачи музыки, которая позволяет артистам публиковать свою музыку и получать вознаграждение напрямую от поклонников, устраняя посредников и давая создателям больше контроля и доходов.",
    },
    source: {
      en: "Audius",
      ru: "Audius",
    },
    link: "https://audius.co/",
  },
  {
    id: "22",
    title: {
      en: "IPFS - InterPlanetary File System",
      ru: "IPFS - Межпланетная файловая система",
    },
    industry: "Technology",
    technology: "Blockchain",
    description: {
      en: "A peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open, with content-addressed storage.",
      ru: "Одноранговый протокол гипермедиа, предназначенный для сохранения и расширения знаний человечества, делая веб обновляемым, устойчивым и более открытым, с хранилищем с адресацией по содержимому.",
    },
    source: {
      en: "IPFS",
      ru: "IPFS",
    },
    link: "https://ipfs.tech/",
  },
  {
    id: "23",
    title: {
      en: "Arweave - Permanent Data Storage",
      ru: "Arweave - Постоянное хранение данных",
    },
    industry: "Technology",
    technology: "Blockchain",
    description: {
      en: "A blockchain-like structure called the 'blockweave' that enables permanent, low-cost data storage by incentivizing miners to replicate valuable data through a novel proof of access consensus mechanism.",
      ru: "Структура, подобная блокчейну, называемая 'blockweave', которая обеспечивает постоянное, недорогое хранение данных, стимулируя майнеров реплицировать ценные данные с помощью нового механизма консенсуса доказательства доступа.",
    },
    source: {
      en: "Arweave",
      ru: "Arweave",
    },
    link: "https://www.arweave.org/",
  },
  {
    id: "24",
    title: {
      en: "Polygon ID - Decentralized Identity",
      ru: "Polygon ID - Децентрализованная идентификация",
    },
    industry: "Identity",
    technology: "Blockchain",
    description: {
      en: "A zero-knowledge identity system for web3, enabling users to prove their identity and credentials without revealing sensitive information, built on zk-SNARKs technology.",
      ru: "Система идентификации с нулевым разглашением для web3, позволяющая пользователям подтверждать свою личность и учетные данные без раскрытия конфиденциальной информации, построенная на технологии zk-SNARKs.",
    },
    source: {
      en: "Polygon",
      ru: "Polygon",
    },
    link: "https://polygon.technology/polygon-id/",
  },
  {
    id: "25",
    title: {
      en: "Friends With Benefits (FWB) DAO",
      ru: "DAO Friends With Benefits (FWB)",
    },
    industry: "Entertainment",
    technology: "DAO",
    description: {
      en: "A cultural membership DAO bringing together creators, artists, and Web3 enthusiasts, providing access to exclusive events, content, and collaboration opportunities based on token ownership.",
      ru: "Культурное ДАО-сообщество, объединяющее создателей, художников и энтузиастов Web3, предоставляющее доступ к эксклюзивным мероприятиям, контенту и возможностям сотрудничества на основе владения токенами.",
    },
    source: {
      en: "FWB",
      ru: "FWB",
    },
    link: "https://www.fwb.help/",
  },
  {
    id: "26",
    title: {
      en: "Lido Liquid Staking",
      ru: "Ликвидный стейкинг Lido",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A liquid staking solution allowing users to stake ETH while receiving stETH tokens that represent their staked assets, which can be used in other DeFi applications while earning staking rewards.",
      ru: "Решение для ликвидного стейкинга, позволяющее пользователям размещать ETH и получать токены stETH, которые представляют их размещенные активы и могут использоваться в других DeFi-приложениях, одновременно получая вознаграждения за стейкинг.",
    },
    source: {
      en: "Lido Finance",
      ru: "Lido Finance",
    },
    link: "https://lido.fi/",
  },
  {
    id: "27",
    title: {
      en: "GE Aerospace AI Engine Inspection",
      ru: "ИИ-инспекция двигателей GE Aerospace",
    },
    industry: "Manufacturing",
    technology: "AI",
    description: {
      en: "AI-driven tool to enhance aircraft engine inspections, maximizing engine time on wing by using advanced image recognition to detect and analyze potential issues.",
      ru: "Инструмент на базе ИИ для улучшения проверок авиационных двигателей, максимизирующий время работы двигателя на крыле за счет использования продвинутого распознавания изображений для обнаружения и анализа потенциальных проблем.",
    },
    source: {
      en: "GE Aerospace",
      ru: "GE Aerospace",
    },
    link: "https://www.geaerospace.com/news/press-releases/ge-aerospace-deploys-ai-driven-inspection-tool-maximize-narrowbody-engine-time-wing",
  },
  {
    id: "28",
    title: {
      en: "AES Corporation Maximo AI Robot",
      ru: "ИИ-робот Maximo от AES Corporation",
    },
    industry: "Energy",
    technology: "AI",
    description: {
      en: "AI-powered robot that optimizes solar panel installation, using generative AI for energy safety audits, reducing costs by up to 99% compared to traditional methods.",
      ru: "Робот на базе ИИ, оптимизирующий установку солнечных панелей, использующий генеративный ИИ для аудитов энергетической безопасности, снижая затраты до 99% по сравнению с традиционными методами.",
    },
    source: {
      en: "AES Corporation",
      ru: "AES Corporation",
    },
    link: "https://www.aes.com/maximo",
  },
  {
    id: "29",
    title: {
      en: "Disney Research Visual Computing",
      ru: "Визуальные вычисления Disney Research",
    },
    industry: "Entertainment",
    technology: "AI",
    description: {
      en: "Advanced AI systems for animation and storytelling, creating tools that help animators and filmmakers produce more compelling visual content with less manual effort.",
      ru: "Продвинутые системы ИИ для анимации и сторителлинга, создающие инструменты, помогающие аниматорам и кинематографистам создавать более увлекательный визуальный контент с меньшими ручными усилиями.",
    },
    source: {
      en: "Disney Research",
      ru: "Disney Research",
    },
    link: "https://la.disneyresearch.com/research/research-areas/",
  },
  {
    id: "30",
    title: {
      en: "World Food Programme Building Blocks",
      ru: "Проект Building Blocks Всемирной продовольственной программы",
    },
    industry: "Humanitarian",
    technology: "Blockchain",
    description: {
      en: "A blockchain-based system for delivering humanitarian assistance more efficiently, transparently tracking aid distribution and reducing financial transaction costs in refugee camps.",
      ru: "Система на основе блокчейна для более эффективного предоставления гуманитарной помощи, прозрачно отслеживающая распределение помощи и снижающая затраты на финансовые транзакции в лагерях беженцев.",
    },
    source: {
      en: "World Food Programme",
      ru: "Всемирная продовольственная программа",
    },
    link: "https://innovation.wfp.org/project/building-blocks",
  },
  
  // Adding more use cases from the research papers
  {
    id: "31",
    title: {
      en: "Centrifuge - RWA Tokenization",
      ru: "Centrifuge - токенизация реальных активов",
    },
    industry: "Finance",
    technology: "Blockchain",
    description: {
      en: "A protocol for tokenizing real-world assets, allowing businesses to use assets like invoices or mortgages as collateral to access DeFi liquidity.",
      ru: "Протокол для токенизации реальных активов, позволяющий бизнесу использовать такие активы, как счета или ипотеки, в качестве обеспечения для доступа к ликвидности DeFi.",
    },
    source: {
      en: "Polkadot",
      ru: "Polkadot",
    },
    link: "https://centrifuge.io/",
  },
  {
    id: "32",
    title: {
      en: "Synthetix - Decentralized Derivatives",
      ru: "Synthetix - децентрализованные деривативы",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A protocol allowing users to mint synthetic assets that track various real-world assets including commodities, currencies, and stocks using crypto as collateral.",
      ru: "Протокол, позволяющий пользователям выпускать синтетические активы, отслеживающие различные реальные активы, включая сырьевые товары, валюты и акции, используя криптовалюту в качестве обеспечения.",
    },
    source: {
      en: "Synthetix",
      ru: "Synthetix",
    },
    link: "https://synthetix.io/",
  },
  {
    id: "33",
    title: {
      en: "Axelar Network - Cross-Chain Infrastructure",
      ru: "Axelar Network - кросс-чейн инфраструктура",
    },
    industry: "Technology",
    technology: "Blockchain",
    description: {
      en: "A decentralized network enabling secure cross-chain communication, allowing developers to build applications that can access state or functions across multiple blockchain ecosystems.",
      ru: "Децентрализованная сеть, обеспечивающая безопасную кросс-чейн коммуникацию, позволяющая разработчикам создавать приложения, которые могут получать доступ к состоянию или функциям в различных блокчейн-экосистемах.",
    },
    source: {
      en: "Axelar Network",
      ru: "Axelar Network",
    },
    link: "https://axelar.network/",
  },
  {
    id: "34",
    title: {
      en: "LivePeer - Decentralized Video Infrastructure",
      ru: "LivePeer - децентрализованная видеоинфраструктура",
    },
    industry: "Media",
    technology: "Blockchain",
    description: {
      en: "A decentralized video transcoding network that leverages blockchain to provide affordable, reliable, and scalable video streaming infrastructure for developers.",
      ru: "Децентрализованная сеть транскодирования видео, использующая блокчейн для обеспечения доступной, надежной и масштабируемой инфраструктуры потоковой передачи видео для разработчиков.",
    },
    source: {
      en: "LivePeer",
      ru: "LivePeer",
    },
    link: "https://livepeer.org/",
  },
  {
    id: "35",
    title: {
      en: "Helium Network - Decentralized Wireless Infrastructure",
      ru: "Helium Network - децентрализованная беспроводная инфраструктура",
    },
    industry: "Telecommunications",
    technology: "Blockchain",
    description: {
      en: "A decentralized wireless network powered by blockchain, allowing users to earn cryptocurrency by deploying and operating network nodes that provide coverage for IoT devices.",
      ru: "Децентрализованная беспроводная сеть на основе блокчейна, позволяющая пользователям зарабатывать криптовалюту, развертывая и управляя узлами сети, которые обеспечивают покрытие для устройств IoT.",
    },
    source: {
      en: "Helium",
      ru: "Helium",
    },
    link: "https://www.helium.com/",
  },
  {
    id: "36",
    title: {
      en: "Klima DAO - Carbon Credits Tokenization",
      ru: "Klima DAO - токенизация углеродных кредитов",
    },
    industry: "Environment",
    technology: "DAO",
    description: {
      en: "A DAO focused on accelerating the price appreciation of carbon assets by purchasing and removing carbon credits from the market, driving adoption of carbon-backed currencies.",
      ru: "DAO, ориентированное на ускорение роста стоимости углеродных активов путем покупки и удаления углеродных кредитов с рынка, стимулируя внедрение валют, обеспеченных углеродными активами.",
    },
    source: {
      en: "KlimaDAO",
      ru: "KlimaDAO",
    },
    link: "https://www.klimadao.finance/",
  },
  {
    id: "37",
    title: {
      en: "PAXos Medical Data Management",
      ru: "PAXos управление медицинскими данными",
    },
    industry: "Healthcare",
    technology: "Blockchain",
    description: {
      en: "A blockchain platform for secure healthcare data management enabling patients to control access to their health records while facilitating verified data sharing between healthcare providers.",
      ru: "Блокчейн-платформа для безопасного управления медицинскими данными, позволяющая пациентам контролировать доступ к своим медицинским записям и облегчающая проверенный обмен данными между поставщиками медицинских услуг.",
    },
    source: {
      en: "PAXos",
      ru: "PAXos",
    },
    link: "https://paxos.com/",
  },
  {
    id: "38",
    title: {
      en: "Lens Protocol - Social Graph Ownership",
      ru: "Lens Protocol - владение социальным графом",
    },
    industry: "Social Media",
    technology: "Blockchain",
    description: {
      en: "A decentralized social graph protocol giving users ownership of their content, social connections, and engagement data that can be used across multiple applications.",
      ru: "Децентрализованный протокол социального графа, предоставляющий пользователям право собственности на свой контент, социальные связи и данные о взаимодействиях, которые можно использовать в различных приложениях.",
    },
    source: {
      en: "Lens Protocol",
      ru: "Lens Protocol",
    },
    link: "https://www.lens.xyz/",
  },
  {
    id: "39",
    title: {
      en: "Ramp Protocol - Fiat to Crypto On-Ramp",
      ru: "Ramp Protocol - упрощённый вход из фиата в крипто",
    },
    industry: "Finance",
    technology: "Blockchain",
    description: {
      en: "A payment infrastructure that enables users to purchase crypto directly using fiat currency without leaving the application they're using, reducing barriers to entry.",
      ru: "Платежная инфраструктура, позволяющая пользователям покупать криптовалюту напрямую с помощью фиатной валюты, не выходя из используемого приложения, снижая барьеры для входа.",
    },
    source: {
      en: "Ramp Network",
      ru: "Ramp Network",
    },
    link: "https://ramp.network/",
  },
  {
    id: "40",
    title: {
      en: "Aragon Client - DAO Creation Platform",
      ru: "Aragon Client - платформа для создания DAO",
    },
    industry: "Governance",
    technology: "DAO",
    description: {
      en: "A platform allowing users to create and manage decentralized autonomous organizations with customizable governance structures, tokenomics, and dispute resolution mechanisms.",
      ru: "Платформа, позволяющая пользователям создавать и управлять децентрализованными автономными организациями с настраиваемыми структурами управления, токеномикой и механизмами разрешения споров.",
    },
    source: {
      en: "Aragon",
      ru: "Aragon",
    },
    link: "https://aragon.org/",
  },
  {
    id: "41",
    title: {
      en: "ENS - Ethereum Name Service",
      ru: "ENS - служба имен Ethereum",
    },
    industry: "Identity",
    technology: "Blockchain",
    description: {
      en: "A distributed, open naming system based on the Ethereum blockchain that maps human-readable names to machine-readable identifiers, simplifying the use of blockchain addresses.",
      ru: "Распределенная, открытая система именования на основе блокчейна Ethereum, которая сопоставляет человекочитаемые имена с машиночитаемыми идентификаторами, упрощая использование блокчейн-адресов.",
    },
    source: {
      en: "ENS",
      ru: "ENS",
    },
    link: "https://ens.domains/",
  },
  {
    id: "42",
    title: {
      en: "Molecule Protocol - Drug Development IP-NFTs",
      ru: "Molecule Protocol - IP-NFT для разработки лекарств",
    },
    industry: "Healthcare",
    technology: "NFTs",
    description: {
      en: "A platform that tokenizes intellectual property rights for drug development as IP-NFTs, enabling researchers to find funding and collaborate more efficiently on pharmaceutical research.",
      ru: "Платформа, токенизирующая права интеллектуальной собственности на разработку лекарств в виде IP-NFT, позволяющая исследователям находить финансирование и более эффективно сотрудничать в фармацевтических исследованиях.",
    },
    source: {
      en: "Molecule Protocol",
      ru: "Molecule Protocol",
    },
    link: "https://www.molecule.to/",
  },
  {
    id: "43",
    title: {
      en: "Tornado Cash - Privacy Solution",
      ru: "Tornado Cash - решение для конфиденциальности",
    },
    industry: "Finance",
    technology: "Blockchain",
    description: {
      en: "A non-custodial privacy solution utilizing zero-knowledge proofs to enable private transactions on Ethereum by breaking the on-chain link between source and destination addresses.",
      ru: "Некастодиальное решение для конфиденциальности, использующее доказательства с нулевым разглашением для обеспечения приватных транзакций в Ethereum путём разрыва связи между адресами источника и назначения.",
    },
    source: {
      en: "Tornado Cash",
      ru: "Tornado Cash",
    },
    link: "https://tornado.cash/",
  },
  {
    id: "44",
    title: {
      en: "Proof of Humanity - Sybil Resistance Registry",
      ru: "Proof of Humanity - реестр устойчивости к атаке Сивиллы",
    },
    industry: "Identity",
    technology: "Blockchain",
    description: {
      en: "A system combining social verification and video submission to create a registry of unique human identities, providing Sybil resistance for applications requiring one-person-one-vote mechanisms.",
      ru: "Система, сочетающая социальную верификацию и отправку видео для создания реестра уникальных человеческих личностей, обеспечивающая устойчивость к атаке Сивиллы для приложений, требующих механизмов один-человек-один-голос.",
    },
    source: {
      en: "Proof of Humanity",
      ru: "Proof of Humanity",
    },
    link: "https://www.proofofhumanity.id/",
  },
  {
    id: "45",
    title: {
      en: "Gitcoin Quadratic Funding",
      ru: "Квадратичное финансирование Gitcoin",
    },
    industry: "Finance",
    technology: "DAO",
    description: {
      en: "A funding mechanism that uses quadratic voting principles to determine the allocation of matching funds, emphasizing the number of contributors over the amount contributed.",
      ru: "Механизм финансирования, использующий принципы квадратичного голосования для определения распределения соответствующих средств, подчеркивая количество участников, а не сумму вклада.",
    },
    source: {
      en: "Gitcoin",
      ru: "Gitcoin",
    },
    link: "https://gitcoin.co/grants/",
  },
  {
    id: "46",
    title: {
      en: "Filecoin - Decentralized Storage",
      ru: "Filecoin - децентрализованное хранилище",
    },
    industry: "Technology",
    technology: "Blockchain",
    description: {
      en: "A decentralized storage network that turns cloud storage into an algorithmic market, enabling users to rent out their unused hard drive space and get paid in FIL tokens.",
      ru: "Децентрализованная сеть хранения, превращающая облачное хранилище в алгоритмический рынок, позволяющая пользователям сдавать в аренду неиспользуемое место на жестком диске и получать оплату в токенах FIL.",
    },
    source: {
      en: "Protocol Labs",
      ru: "Protocol Labs",
    },
    link: "https://filecoin.io/",
  },
  {
    id: "47",
    title: {
      en: "UMA Protocol - Synthetic Assets",
      ru: "UMA Protocol - синтетические активы",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A protocol for creating synthetic assets on Ethereum, allowing anyone to create custom financial contracts secured by economic incentives without the need for trusted oracles.",
      ru: "Протокол для создания синтетических активов на Ethereum, позволяющий любому создавать пользовательские финансовые контракты, защищенные экономическими стимулами, без необходимости доверенных оракулов.",
    },
    source: {
      en: "UMA Protocol",
      ru: "UMA Protocol",
    },
    link: "https://umaproject.org/",
  },
  {
    id: "48",
    title: {
      en: "EigenLayer - Restaking Protocol",
      ru: "EigenLayer - протокол рестейкинга",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A protocol that enables Ethereum validators to restake their ETH, extending Ethereum's security to other applications and services through cryptoeconomic security sharing.",
      ru: "Протокол, позволяющий валидаторам Ethereum повторно размещать свой ETH, распространяя безопасность Ethereum на другие приложения и сервисы через совместное использование криптоэкономической безопасности.",
    },
    source: {
      en: "EigenLayer",
      ru: "EigenLayer",
    },
    link: "https://www.eigenlayer.xyz/",
  },
  {
    id: "49",
    title: {
      en: "Celestia - Modular Blockchain Network",
      ru: "Celestia - модульная блокчейн-сеть",
    },
    industry: "Technology",
    technology: "Blockchain",
    description: {
      en: "A modular blockchain architecture that separates consensus and execution, allowing developers to deploy their own execution layers while leveraging shared security.",
      ru: "Модульная архитектура блокчейна, разделяющая консенсус и выполнение, позволяющая разработчикам развертывать собственные слои выполнения, используя общую безопасность.",
    },
    source: {
      en: "Celestia",
      ru: "Celestia",
    },
    link: "https://celestia.org/",
  },
  {
    id: "50",
    title: {
      en: "WorldCoin - Biometric Identity",
      ru: "WorldCoin - биометрическая идентификация",
    },
    industry: "Identity",
    technology: "Blockchain",
    description: {
      en: "A protocol that uses biometric verification (iris scanning) to create unique digital identities, aiming to enable a globally inclusive digital economy with privacy-preserving authentication.",
      ru: "Протокол, использующий биометрическую верификацию (сканирование радужной оболочки) для создания уникальных цифровых удостоверений личности, направленный на создание глобально инклюзивной цифровой экономики с аутентификацией, сохраняющей конфиденциальность.",
    },
    source: {
      en: "WorldCoin",
      ru: "WorldCoin",
    },
    link: "https://worldcoin.org/",
  }
];

// Helper functions to get unique industries and technologies
export const getUniqueIndustries = (useCases: UseCase[]) => {
  const industries = useCases.map((useCase) => useCase.industry);
  return [...new Set(industries)].sort();
};

export const getUniqueTechnologies = (useCases: UseCase[]) => {
  const technologies = useCases.map((useCase) => useCase.technology);
  return [...new Set(technologies)].sort();
};

// Function to get translated use cases based on current language
export const useTranslatedUseCases = () => {
  const { currentLanguage } = useLanguage();
  
  return useCases.map((useCase) => ({
    id: useCase.id,
    title: useCase.title[currentLanguage as keyof typeof useCase.title],
    description: useCase.description[currentLanguage as keyof typeof useCase.description],
    industry: useCase.industry,
    technology: useCase.technology,
    source: useCase.source ? useCase.source[currentLanguage as keyof typeof useCase.source] : undefined,
    link: useCase.link,
  }));
};
