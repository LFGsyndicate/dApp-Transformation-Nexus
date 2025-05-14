
// Define the common types used across all use case files
export type UseCase = {
  id: string;
  title: { en: string; ru: string };
  industry: string;
  technology: string;
  description: { en: string; ru: string };
  source?: { en: string; ru: string };
  link?: string;
  researchPaper?: string;
};

// URL constants for research papers
export const BLOCKCHAIN_PAPER_URL = "https://github.com/LFGsyndicate/Decentralized-Transformation-Nexus/blob/main/Cases%20DAO%2C%20crypto%2C%20Web3.pdf";
export const DEFI_AI_PAPER_URL = "https://github.com/LFGsyndicate/Decentralized-Transformation-Nexus/blob/93feee7a3618b2b65b52875936b996ba2dc4bbf1/Decentralization%20%26%20Intelligence_%20A%20Comprehensive%20Analysis%20of%20Blockchain%2C%20Smart%20Contracts%2C%20Crypto-Utility%2C%20and%20DAOs%20in%20Modern%20Business%20and%20Their%20Synergy%20with%20AI.pdf";

// Helper function to sort use cases - cases with links first
export const sortUseCases = (useCases: UseCase[]): UseCase[] => {
  return [...useCases].sort((a, b) => {
    if (a.link && !b.link) return -1;
    if (!a.link && b.link) return 1;
    return 0;
  });
};
