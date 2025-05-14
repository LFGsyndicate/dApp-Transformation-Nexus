
import { UseCase, DEFI_AI_PAPER_URL } from './types';

// AI-specific use cases
export const aiUseCases: UseCase[] = [
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
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
    researchPaper: DEFI_AI_PAPER_URL,
  },
  // Add more AI use cases from the original file
];

// More AI use cases
export const moreAiUseCases: UseCase[] = [
  {
    id: "73",
    title: {
      en: "Numerai Crowdsourced Hedge Fund",
      ru: "Краудсорсинговый хедж-фонд Numerai",
    },
    industry: "Finance",
    technology: "AI",
    description: {
      en: "A hedge fund that uses encrypted data and a tournament model to crowdsource AI predictions from data scientists, rewarding successful models with cryptocurrency while preserving data privacy.",
      ru: "Хедж-фонд, использующий зашифрованные данные и турнирную модель для привлечения прогнозов ИИ от специалистов по данным, вознаграждая успешные модели криптовалютой при сохранении конфиденциальности данных.",
    },
    source: {
      en: "Numerai",
      ru: "Numerai",
    },
    link: "https://numer.ai/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  {
    id: "142",
    title: {
      en: "Port3 Blockchain Identity Analytics",
      ru: "Аналитика блокчейн-идентификации Port3",
    },
    industry: "Technology",
    technology: "AI",
    description: {
      en: "A platform combining AI and blockchain data to provide identity analytics for Web3, helping projects understand user behavior, assess wallets for airdrops, and facilitate community building.",
      ru: "Платформа, сочетающая ИИ и данные блокчейна для предоставления аналитики идентификации для Web3, помогающая проектам понимать поведение пользователей, оценивать кошельки для аирдропов и содействовать построению сообщества.",
    },
    source: {
      en: "Port3 Network",
      ru: "Port3 Network",
    },
    link: "https://www.port3.io/",
    researchPaper: DEFI_AI_PAPER_URL,
  },
  // Include more AI cases here from the original file
];

// Combine all AI use cases
export const getAllAiUseCases = (): UseCase[] => {
  return [...aiUseCases, ...moreAiUseCases];
};
