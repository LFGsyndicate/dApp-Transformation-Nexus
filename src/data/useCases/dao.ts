
import { UseCase, BLOCKCHAIN_PAPER_URL, DEFI_AI_PAPER_URL } from './types';

// DAO-specific use cases
export const daoUseCases: UseCase[] = [
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  // Add more DAO use cases from the original file
];

// More DAO use cases
export const moreDaoUseCases: UseCase[] = [
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  // Include more DAO cases here from the original file
];

// Combine all DAO use cases
export const getAllDaoUseCases = (): UseCase[] => {
  return [...daoUseCases, ...moreDaoUseCases];
};
