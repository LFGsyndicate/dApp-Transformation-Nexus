
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
  }
];

export const useTranslatedUseCases = () => {
  const { currentLanguage } = useLanguage();

  const translatedUseCases = useCases.map((useCase) => ({
    ...useCase,
    title: useCase.title[currentLanguage],
    description: useCase.description[currentLanguage],
    source: useCase.source ? useCase.source[currentLanguage] : undefined,
  }));

  return translatedUseCases;
};

export const getUniqueIndustries = (useCases: any[]) => {
  const industries = [...new Set(useCases.map((useCase) => useCase.industry))];
  return industries;
};

export const getUniqueTechnologies = (useCases: any[]) => {
  const technologies = [...new Set(useCases.map((useCase) => useCase.technology))];
  return technologies;
};
