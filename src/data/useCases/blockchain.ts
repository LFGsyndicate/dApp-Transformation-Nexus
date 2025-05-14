
import { UseCase, BLOCKCHAIN_PAPER_URL } from './types';

// Blockchain-specific use cases
export const blockchainUseCases: UseCase[] = [
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  // Add many more blockchain use cases from the original file
];

// Adding more blockchain use cases from the original file
export const moreBlockchainUseCases: UseCase[] = [
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  // Include more blockchain cases here from the original file
];

// Combine all blockchain use cases
export const getAllBlockchainUseCases = (): UseCase[] => {
  return [...blockchainUseCases, ...moreBlockchainUseCases];
};
