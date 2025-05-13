import { useLanguage } from "../hooks/useLanguage";

type UseCase = {
  id: string;
  title: { en: string; ru: string };
  industry: string;
  technology: string;
  description: { en: string; ru: string };
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
];

export const useTranslatedUseCases = () => {
  const { t, currentLanguage } = useLanguage();

  const translatedUseCases = useCases.map((useCase) => ({
    ...useCase,
    title: useCase.title[currentLanguage],
    description: useCase.description[currentLanguage],
  }));

  return translatedUseCases;
};

export const getUniqueIndustries = () => {
  const industries = [...new Set(useCases.map((useCase) => useCase.industry))];
  return industries;
};

export const getUniqueTechnologies = () => {
  const technologies = [...new Set(useCases.map((useCase) => useCase.technology))];
  return technologies;
};
