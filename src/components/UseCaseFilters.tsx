import { useState } from "react";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";

interface UseCaseFiltersProps {
  industries: string[];
  technologies: string[];
  onSearch: (searchTerm: string) => void;
  onIndustryFilter: (industry: string | null) => void;
  onTechnologyFilters: (technologies: string[]) => void;
}

export const UseCaseFilters: React.FC<UseCaseFiltersProps> = ({
  industries,
  technologies,
  onSearch,
  onIndustryFilter,
  onTechnologyFilters,
}) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleIndustryChange = (industry: string | null) => {
    setSelectedIndustry(industry);
    onIndustryFilter(industry);
  };

  const handleTechnologyChange = (technology: string) => {
    const isSelected = selectedTechnologies.includes(technology);
    let newTechnologies;

    if (isSelected) {
      newTechnologies = selectedTechnologies.filter((tech) => tech !== technology);
    } else {
      newTechnologies = [...selectedTechnologies, technology];
    }

    setSelectedTechnologies(newTechnologies);
    onTechnologyFilters(newTechnologies);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedIndustry(null);
    setSelectedTechnologies([]);
    onSearch("");
    onIndustryFilter(null);
    onTechnologyFilters([]);
  };

  return (
    <Card className="w-full">
      <div className="p-6 space-y-4">
        <h2 className="text-lg font-semibold">{t("Filters", "Фильтры")}</h2>

        {/* Search */}
        <div>
          <Label htmlFor="search">{t("Search", "Поиск")}</Label>
          <Input
            type="search"
            id="search"
            placeholder={t("Search use cases...", "Поиск примеров использования...")}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Industry Filter */}
        <div>
          <Label htmlFor="industry">{t("Industry", "Отрасль")}</Label>
          <Select value={selectedIndustry || undefined} onValueChange={handleIndustryChange}>
            <SelectTrigger id="industry">
              <SelectValue placeholder={t("Select an industry", "Выберите отрасль")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={null}>{t("All Industries", "Все отрасли")}</SelectItem>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {t(industry, industry)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Technologies Filter */}
        <div>
          <Label>{t("Technologies", "Технологии")}</Label>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
            {technologies.map((technology) => (
              <div key={technology} className="flex items-center space-x-2">
                <Checkbox
                  id={`technology-${technology}`}
                  checked={selectedTechnologies.includes(technology)}
                  onCheckedChange={() => handleTechnologyChange(technology)}
                />
                <Label htmlFor={`technology-${technology}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {t(technology, technology)}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        <div>
          <Button variant="outline" onClick={clearFilters}>
            {t("Clear Filters", "Очистить фильтры")}
          </Button>
        </div>
      </div>
    </Card>
  );
};
