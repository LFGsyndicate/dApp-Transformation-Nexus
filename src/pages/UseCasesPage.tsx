import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { UseCaseCard } from "../components/UseCaseCard";
import { UseCaseFilters } from "../components/UseCaseFilters";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslatedUseCases, getUniqueIndustries, getUniqueTechnologies } from "../data/useCases";
import { Input } from "../components/ui/input";

const UseCasesPage = () => {
  const { t } = useLanguage();
  const useCases = useTranslatedUseCases();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((item) => item !== industry)
        : [...prev, industry]
    );
  };

  const handleTechnologyChange = (technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technology)
        ? prev.filter((item) => item !== technology)
        : [...prev, technology]
    );
  };

  const filteredUseCases = useCases.filter((useCase) => {
    const searchMatch =
      useCase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      useCase.description.toLowerCase().includes(searchTerm.toLowerCase());

    const industryMatch =
      selectedIndustries.length === 0 ||
      selectedIndustries.some((industry) =>
        useCase.industries.includes(industry)
      );

    const technologyMatch =
      selectedTechnologies.length === 0 ||
      selectedTechnologies.some((technology) =>
        useCase.technologies.includes(technology)
      );

    return searchMatch && industryMatch && technologyMatch;
  });

  const industries = getUniqueIndustries(useCases, t);
  const technologies = getUniqueTechnologies(useCases, t);

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredUseCases.length > 0 ? (
                    filteredUseCases.map((useCase) => (
                      <UseCaseCard key={useCase.id} useCase={useCase} />
                    ))
                  ) : (
                    <div className="text-center col-span-2">
                      {t(
                        "No use cases match the current filters.",
                        "Нет примеров использования, соответствующих текущим фильтрам."
                      )}
                    </div>
                  )}
                </div>
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
