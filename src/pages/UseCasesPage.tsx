
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { UseCaseCard } from "../components/UseCaseCard";
import { UseCaseFilters } from "../components/UseCaseFilters";
import { useLanguage } from "../hooks/useLanguage";
import { 
  useTranslatedUseCases, 
  getUniqueIndustries, 
  getUniqueTechnologies,
  getIndustryCounts,
  getTechnologyCounts
} from "../data/useCases";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "../components/ui/pagination";
import { Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { SEOMetaTags } from "../components/SEOMetaTags";

const ITEMS_PER_PAGE = 12;

// Define a type that matches what useTranslatedUseCases returns
type TranslatedUseCase = {
  id: string;
  title: string;
  description: string;
  industry: string;
  technology: string;
  source?: string;
  link?: string;
  researchPaper?: string;
};

const UseCasesPage = () => {
  const { t } = useLanguage();
  const useCases = useTranslatedUseCases();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // Get counts for industries and technologies
  const industryCounts = getIndustryCounts();
  const technologyCounts = getTechnologyCounts();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((item) => item !== industry)
        : [...prev, industry]
    );
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleTechnologyChange = (technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technology)
        ? prev.filter((item) => item !== technology)
        : [...prev, technology]
    );
    setCurrentPage(1); // Reset to first page on filter change
  };

  const filteredUseCases = useCases.filter((useCase) => {
    const searchMatch =
      useCase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      useCase.description.toLowerCase().includes(searchTerm.toLowerCase());

    const industryMatch =
      selectedIndustries.length === 0 ||
      selectedIndustries.includes(useCase.industry);

    const technologyMatch =
      selectedTechnologies.length === 0 ||
      selectedTechnologies.includes(useCase.technology);

    return searchMatch && industryMatch && technologyMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUseCases.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUseCases = filteredUseCases.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Get unique industries and technologies from the translated useCases array
  const industries = Array.from(new Set(useCases.map(useCase => useCase.industry))).sort();
  const technologies = Array.from(new Set(useCases.map(useCase => useCase.technology))).sort();

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // If we have fewer pages than our limit, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate the start and end of the "middle" section
      let startPage, endPage;
      
      if (currentPage <= 3) {
        // If we're near the beginning
        startPage = 2;
        endPage = 4;
        pages.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
        pages.push("ellipsis");
      } else if (currentPage >= totalPages - 2) {
        // If we're near the end
        pages.push("ellipsis");
        startPage = totalPages - 3;
        endPage = totalPages - 1;
        pages.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
      } else {
        // We're somewhere in the middle
        pages.push("ellipsis");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("ellipsis");
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  // Prepare SEO metadata based on filters
  let seoTitle = `Web3 Use Cases Catalog - ${useCases.length}+ Blockchain, DAO, NFT & AI Examples`;
  let seoDescription = `Explore ${useCases.length}+ real-world use cases of blockchain, smart contracts, DAOs, NFTs and AI across various industries with verified sources and research references.`;
  
  if (selectedTechnologies.length === 1) {
    seoTitle = `${selectedTechnologies[0]} Use Cases - Web3 Technology Applications Catalog`;
    seoDescription = `Explore real-world use cases of ${selectedTechnologies[0]} technology across various industries with verified sources and practical implementations.`;
  }
  
  if (selectedIndustries.length === 1) {
    seoTitle = `Web3 Use Cases in ${selectedIndustries[0]} - Industry Applications Catalog`;
    seoDescription = `Discover how blockchain, DAOs, NFTs, and AI are transforming the ${selectedIndustries[0]} industry with real-world use cases and verified implementations.`;
  }
  
  if (selectedTechnologies.length === 1 && selectedIndustries.length === 1) {
    seoTitle = `${selectedTechnologies[0]} Applications in ${selectedIndustries[0]} - Web3 Use Cases`;
    seoDescription = `Explore how ${selectedTechnologies[0]} technology is revolutionizing the ${selectedIndustries[0]} industry with practical examples and verified implementations.`;
  }

  // Toggle filters on mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SEOMetaTags 
        title={seoTitle}
        description={seoDescription}
        keywords={`${technologies.join(', ')}, ${industries.join(', ')}, use cases, blockchain, web3`}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-accent/60 py-8 md:py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
          <div className="container-content relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
                {t("Use Cases Catalog", "Каталог примеров использования")}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t(
                  `Explore ${useCases.length}+ comprehensive real-world applications of decentralized technologies and AI across various industries.`,
                  `Исчерпывающие примеры применения децентрализованных технологий и искусственного интеллекта в различных отраслях (${useCases.length}+ кейсов).`
                )}
              </p>
              <div className="relative max-w-md mx-auto mt-4 md:mt-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={t("Search use cases...", "Поиск примеров использования...")}
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <p className="mt-3 md:mt-4 text-sm text-muted-foreground">
                {filteredUseCases.length} {t("use cases found", "примеров использования найдено")}
              </p>
              
              {/* Mobile filter toggle button */}
              <div className="mt-4 md:hidden">
                <button 
                  onClick={toggleFilters}
                  className="flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium border rounded-md bg-background"
                >
                  <Search className="h-4 w-4" />
                  {showFilters ? t("Hide filters", "Скрыть фильтры") : t("Show filters", "Показать фильтры")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-6 md:py-12">
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Filters */}
              <aside className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden'} md:block use-cases-filters`}>
                <UseCaseFilters
                  searchTerm={searchTerm}
                  onSearch={handleSearch}
                  industries={industries}
                  selectedIndustries={selectedIndustries}
                  onIndustryChange={handleIndustryChange}
                  technologies={technologies}
                  selectedTechnologies={selectedTechnologies}
                  onTechnologyChange={handleTechnologyChange}
                  industryCounts={industryCounts}
                  technologyCounts={technologyCounts}
                />
              </aside>

              {/* Use Cases */}
              <section className="lg:col-span-3">
                {filteredUseCases.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {paginatedUseCases.map((useCase) => (
                        <div key={useCase.id} className="use-case-card">
                          <UseCaseCard useCase={useCase} />
                        </div>
                      ))}
                    </div>
                    
                    {/* Improved Pagination */}
                    {totalPages > 1 && (
                      <Pagination className="mt-6 md:mt-8">
                        <PaginationContent className="flex flex-wrap justify-center">
                          <PaginationItem className="mx-1">
                            <PaginationPrevious 
                              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                          
                          {getPageNumbers().map((page, index) => (
                            <PaginationItem key={index} className="mx-1">
                              {page === "ellipsis" ? (
                                <PaginationEllipsis />
                              ) : (
                                <PaginationLink 
                                  isActive={currentPage === page}
                                  onClick={() => setCurrentPage(page as number)}
                                >
                                  {page}
                                </PaginationLink>
                              )}
                            </PaginationItem>
                          ))}
                          
                          <PaginationItem className="mx-1">
                            <PaginationNext 
                              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12 md:py-16 bg-accent/30 rounded-lg">
                    <Search className="mx-auto h-8 w-8 md:h-12 md:w-12 text-muted-foreground mb-3 md:mb-4 opacity-50" />
                    <h3 className="text-lg md:text-xl font-medium mb-2">
                      {t("No results found", "Результаты не найдены")}
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
                      {t(
                        "Try adjusting your search or filter criteria to find what you're looking for.",
                        "Попробуйте изменить критерии поиска или фильтрации, чтобы найти то, что вы ищете."
                      )}
                    </p>
                  </div>
                )}
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
