
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { UseCaseCard } from "../components/UseCaseCard";
import { UseCaseFilters } from "../components/UseCaseFilters";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslatedUseCases, getUniqueIndustries, getUniqueTechnologies } from "../data/useCases";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 12;

const UseCasesPage = () => {
  const { t } = useLanguage();
  const useCases = useTranslatedUseCases();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const industries = getUniqueIndustries(useCases);
  const technologies = getUniqueTechnologies(useCases);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-accent py-12">
          <div className="container-content">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight">
                {t("Explore Use Cases", "Изучить примеры использования")}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {t(
                  "Discover real-world applications of decentralized technologies and AI across various industries.",
                  "Откройте для себя реальные примеры применения децентрализованных технологий и ИИ в различных отраслях."
                )}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {filteredUseCases.length} {t("use cases found", "примеров использования найдено")}
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters */}
              <aside className="lg:col-span-1">
                <UseCaseFilters
                  searchTerm={searchTerm}
                  onSearch={handleSearch}
                  industries={industries}
                  selectedIndustries={selectedIndustries}
                  onIndustryChange={handleIndustryChange}
                  technologies={technologies}
                  selectedTechnologies={selectedTechnologies}
                  onTechnologyChange={handleTechnologyChange}
                />
              </aside>

              {/* Use Cases */}
              <section className="lg:col-span-3">
                {filteredUseCases.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {paginatedUseCases.map((useCase) => (
                        <UseCaseCard key={useCase.id} useCase={useCase} />
                      ))}
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center mt-8 gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="flex items-center gap-1"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          {t("Previous", "Предыдущая")}
                        </Button>
                        
                        <div className="flex items-center gap-1 mx-2">
                          <span className="text-sm">
                            {t("Page", "Страница")} {currentPage} {t("of", "из")} {totalPages}
                          </span>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="flex items-center gap-1"
                        >
                          {t("Next", "Следующая")}
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center col-span-3 py-16">
                    {t(
                      "No use cases match the current filters.",
                      "Нет примеров использования, соответствующих текущим фильтрам."
                    )}
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
