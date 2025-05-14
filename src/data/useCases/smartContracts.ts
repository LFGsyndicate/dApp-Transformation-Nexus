
import { UseCase, DEFI_AI_PAPER_URL } from './types';

// Smart Contracts-specific use cases
export const smartContractsUseCases: UseCase[] = [
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
  },
  // Add more Smart Contracts use cases from the original file
];

// More Smart Contracts use cases
export const moreSmartContractsUseCases: UseCase[] = [
  {
    id: "51",
    title: {
      en: "Compound DeFi Protocol",
      ru: "DeFi протокол Compound",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "An algorithmic, autonomous interest rate protocol that allows users to supply assets to earn interest or borrow assets by posting collateral, with interest rates determined by supply and demand.",
      ru: "Алгоритмический автономный протокол процентных ставок, позволяющий пользователям поставлять активы для получения процентов или заимствовать активы, разместив залог, с процентными ставками, определяемыми спросом и предложением.",
    },
    source: {
      en: "Compound Finance",
      ru: "Compound Finance",
    },
    link: "https://compound.finance/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "52",
    title: {
      en: "Yearn Finance Yield Aggregator",
      ru: "Агрегатор доходности Yearn Finance",
    },
    industry: "Finance",
    technology: "Smart Contracts",
    description: {
      en: "A suite of products that automatically moves funds between DeFi lending protocols to find the highest yields, with strategies developed by the community and approved by governance.",
      ru: "Набор продуктов, которые автоматически перемещают средства между протоколами кредитования DeFi для поиска наивысшей доходности, со стратегиями, разработанными сообществом и утвержденными путем голосования.",
    },
    source: {
      en: "Yearn Finance",
      ru: "Yearn Finance",
    },
    link: "https://yearn.finance/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  // Include more smart contracts cases here from the original file
];

// Combine all smart contracts use cases
export const getAllSmartContractsUseCases = (): UseCase[] => {
  return [...smartContractsUseCases, ...moreSmartContractsUseCases];
};
