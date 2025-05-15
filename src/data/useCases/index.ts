
import { UseCase } from './types';
import { getAllBlockchainUseCases } from './blockchain';
import { getAllSmartContractsUseCases } from './smartContracts';
import { getAllDaoUseCases } from './dao';
import { getAllNftUseCases } from './nfts';
import { getAllAiUseCases } from './ai';
import { additionalUseCases } from './additional';
import { moreUseCases } from './more';
import { useLanguage } from '../../hooks/useLanguage';

// Function to get all use cases
export const getAllUseCases = (): UseCase[] => {
  return [
    ...getAllBlockchainUseCases(),
    ...getAllSmartContractsUseCases(),
    ...getAllDaoUseCases(),
    ...getAllNftUseCases(),
    ...getAllAiUseCases(),
    ...additionalUseCases,
    ...moreUseCases
  ];
};

// Function to translate use cases based on current language
export const useTranslatedUseCases = () => {
  const { currentLanguage } = useLanguage();
  const useCases = getAllUseCases();
  
  return useCases.map(useCase => ({
    id: useCase.id,
    title: useCase.title[currentLanguage as keyof typeof useCase.title] || useCase.title.en,
    description: useCase.description[currentLanguage as keyof typeof useCase.description] || useCase.description.en,
    industry: useCase.industry,
    technology: useCase.technology,
    source: useCase.source ? useCase.source[currentLanguage as keyof typeof useCase.source] || useCase.source.en : undefined,
    link: useCase.link,
    researchPaper: useCase.researchPaper
  }));
};

// Function to get all unique industries
export const getUniqueIndustries = (): string[] => {
  const useCases = getAllUseCases();
  const industries = useCases.map(useCase => useCase.industry);
  return Array.from(new Set(industries)).sort();
};

// Function to get all unique technologies
export const getUniqueTechnologies = (): string[] => {
  const useCases = getAllUseCases();
  const technologies = useCases.map(useCase => useCase.technology);
  return Array.from(new Set(technologies)).sort();
};

// Function to count cases per industry
export const getIndustryCounts = (): Record<string, number> => {
  const useCases = getAllUseCases();
  const counts: Record<string, number> = {};
  
  useCases.forEach(useCase => {
    const { industry } = useCase;
    counts[industry] = (counts[industry] || 0) + 1;
  });
  
  return counts;
};

// Function to count cases per technology
export const getTechnologyCounts = (): Record<string, number> => {
  const useCases = getAllUseCases();
  const counts: Record<string, number> = {};
  
  useCases.forEach(useCase => {
    const { technology } = useCase;
    counts[technology] = (counts[technology] || 0) + 1;
  });
  
  return counts;
};
