
import { UseCase, BLOCKCHAIN_PAPER_URL } from './types';

// NFT-specific use cases
export const nftUseCases: UseCase[] = [
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
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
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "65",
    title: {
      en: "Rarible NFT Marketplace",
      ru: "NFT-маркетплейс Rarible",
    },
    industry: "Art",
    technology: "NFTs",
    description: {
      en: "A community-owned NFT marketplace that allows creators to mint, sell, and trade digital collectibles while earning RARI tokens for platform governance and curation.",
      ru: "NFT-маркетплейс, принадлежащий сообществу, который позволяет создателям выпускать, продавать и обменивать цифровые коллекционные предметы, получая токены RARI для управления платформой и курирования.",
    },
    source: {
      en: "Rarible",
      ru: "Rarible",
    },
    link: "https://rarible.com/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "66",
    title: {
      en: "SuperRare Digital Art Marketplace",
      ru: "Маркетплейс цифрового искусства SuperRare",
    },
    industry: "Art",
    technology: "NFTs",
    description: {
      en: "A curated marketplace for unique, limited-edition digital artworks that are authenticated on the Ethereum blockchain, empowering artists to connect directly with collectors.",
      ru: "Курируемый маркетплейс уникальных цифровых произведений искусства ограниченного выпуска, которые аутентифицируются в блокчейне Ethereum, позволяя художникам напрямую связываться с коллекционерами.",
    },
    source: {
      en: "SuperRare",
      ru: "SuperRare",
    },
    link: "https://superrare.com/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "68",
    title: {
      en: "Axie Infinity Play-to-Earn Game",
      ru: "Play-to-Earn игра Axie Infinity",
    },
    industry: "Gaming",
    technology: "NFTs",
    description: {
      en: "A blockchain-based game where players collect, breed, and battle fantasy creatures called Axies, which are NFTs that can be bought, sold, and bred, creating a player-owned economy.",
      ru: "Игра на основе блокчейна, где игроки собирают, разводят и сражаются фантастическими существами, называемыми Axies, которые являются NFT, которые можно покупать, продавать и разводить, создавая экономику, принадлежащую игрокам.",
    },
    source: {
      en: "Sky Mavis",
      ru: "Sky Mavis",
    },
    link: "https://axieinfinity.com/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  // Add more NFT use cases from the original file
];

// More NFT use cases
export const moreNftUseCases: UseCase[] = [
  {
    id: "72",
    title: {
      en: "The Sandbox Metaverse Platform",
      ru: "Метавселенная The Sandbox",
    },
    industry: "Gaming",
    technology: "NFTs",
    description: {
      en: "A virtual world where players can build, own, and monetize their gaming experiences using NFTs and SAND, the platform's utility token, enabling true ownership of in-game assets and experiences.",
      ru: "Виртуальный мир, где игроки могут создавать, владеть и монетизировать свой игровой опыт, используя NFT и SAND, токен платформы, обеспечивая реальное владение внутриигровыми активами и опытом.",
    },
    source: {
      en: "The Sandbox",
      ru: "The Sandbox",
    },
    link: "https://www.sandbox.game/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  {
    id: "80",
    title: {
      en: "Immutable X NFT Scaling Solution",
      ru: "Решение для масштабирования NFT Immutable X",
    },
    industry: "Technology",
    technology: "NFTs",
    description: {
      en: "A Layer 2 scaling solution for NFTs on Ethereum that offers gas-free minting and trading with instant transaction confirmation, while maintaining Ethereum's security guarantees.",
      ru: "Решение для масштабирования второго уровня для NFT на Ethereum, предлагающее бесплатное создание и торговлю с мгновенным подтверждением транзакций, сохраняя при этом гарантии безопасности Ethereum.",
    },
    source: {
      en: "Immutable",
      ru: "Immutable",
    },
    link: "https://www.immutable.com/",
    researchPaper: BLOCKCHAIN_PAPER_URL,
  },
  // Include more NFT cases here from the original file
];

// Combine all NFT use cases
export const getAllNftUseCases = (): UseCase[] => {
  return [...nftUseCases, ...moreNftUseCases];
};
