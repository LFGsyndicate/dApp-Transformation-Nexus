
import { useLanguage } from "../../hooks/useLanguage";
import { UseCase, sortUseCases } from './types';
import { getAllBlockchainUseCases } from './blockchain';
import { getAllSmartContractsUseCases } from './smartContracts';
import { getAllDaoUseCases } from './dao';
import { getAllNftUseCases } from './nfts';
import { getAllAiUseCases } from './ai';
import { getAllAdditionalUseCases } from './additional';

// Combine all use cases from different technology files
const getAllUseCases = (): UseCase[] => {
  return [
    ...getAllBlockchainUseCases(),
    ...getAllSmartContractsUseCases(),
    ...getAllDaoUseCases(),
    ...getAllNftUseCases(),
    ...getAllAiUseCases(),
    ...getAllAdditionalUseCases() // Добавляем дополнительные кейсы
  ];
};

// Function to get unique industries across all use cases
export const getUniqueIndustries = (useCases: UseCase[] = getAllUseCases()) => {
  const industries = useCases.map((useCase) => useCase.industry);
  return [...new Set(industries)].sort();
};

// Function to get unique technologies across all use cases
export const getUniqueTechnologies = (useCases: UseCase[] = getAllUseCases()) => {
  const technologies = useCases.map((useCase) => useCase.technology);
  return [...new Set(technologies)].sort();
};

// Function to get translated use cases based on current language
export const useTranslatedUseCases = () => {
  const { currentLanguage } = useLanguage();
  const allUseCases = getAllUseCases();
  
  // Returns sorted use cases (with links first)
  return sortUseCases(allUseCases).map((useCase) => ({
    id: useCase.id,
    title: useCase.title[currentLanguage as keyof typeof useCase.title],
    description: useCase.description[currentLanguage as keyof typeof useCase.description],
    industry: useCase.industry,
    technology: useCase.technology,
    source: useCase.source ? useCase.source[currentLanguage as keyof typeof useCase.source] : undefined,
    link: useCase.link,
    researchPaper: useCase.researchPaper,
  }));
};

// Function to get use cases by technology
export const getUseCasesByTechnology = (technology: string): UseCase[] => {
  return getAllUseCases().filter(useCase => useCase.technology === technology);
};

// Function to get use cases by industry
export const getUseCasesByIndustry = (industry: string): UseCase[] => {
  return getAllUseCases().filter(useCase => useCase.industry === industry);
};

// Функция для подсчета количества кейсов по индустриям
export const getIndustryCounts = (): Record<string, number> => {
  const useCases = getAllUseCases();
  const counts: Record<string, number> = {};
  
  useCases.forEach(useCase => {
    if (counts[useCase.industry]) {
      counts[useCase.industry]++;
    } else {
      counts[useCase.industry] = 1;
    }
  });
  
  return counts;
};

// Функция для подсчета количества кейсов по технологиям
export const getTechnologyCounts = (): Record<string, number> => {
  const useCases = getAllUseCases();
  const counts: Record<string, number> = {};
  
  useCases.forEach(useCase => {
    if (counts[useCase.technology]) {
      counts[useCase.technology]++;
    } else {
      counts[useCase.technology] = 1;
    }
  });
  
  return counts;
};
