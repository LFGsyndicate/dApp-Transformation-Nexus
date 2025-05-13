import React from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

interface UseCaseFiltersProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  industries: string[];
  selectedIndustries: string[];
  onIndustryChange: (industry: string) => void;
  technologies: string[];
  selectedTechnologies: string[];
  onTechnologyChange: (technology: string) => void;
}

export function UseCaseFilters({
  searchTerm,
  onSearch,
  industries,
  selectedIndustries,
  onIndustryChange,
  technologies,
  selectedTechnologies,
  onTechnologyChange,
}: UseCaseFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Search */}
      <div>
        <h3 className="mb-4 text-lg font-medium">
          {t("Search", "Поиск")}
        </h3>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t("Search use cases...", "Поиск примеров использования...")}
            className="w-full pl-8"
            value={searchTerm}
            onChange={onSearch}
          />
        </div>
      </div>

      <Separator />

      {/* Industry Filter */}
      <div>
        <h3 className="mb-4 text-lg font-medium">
          {t("Industry", "Отрасль")}
        </h3>
        <div className="space-y-3">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center space-x-2">
              <Checkbox
                id={`industry-${industry}`}
                checked={selectedIndustries.includes(industry)}
                onCheckedChange={() => onIndustryChange(industry)}
              />
              <Label
                htmlFor={`industry-${industry}`}
                className="text-sm font-normal cursor-pointer"
              >
                {industry}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Technology Filter */}
      <div>
        <h3 className="mb-4 text-lg font-medium">
          {t("Technology", "Технология")}
        </h3>
        <div className="space-y-3">
          {technologies.map((technology) => (
            <div key={technology} className="flex items-center space-x-2">
              <Checkbox
                id={`tech-${technology}`}
                checked={selectedTechnologies.includes(technology)}
                onCheckedChange={() => onTechnologyChange(technology)}
              />
              <Label
                htmlFor={`tech-${technology}`}
                className="text-sm font-normal cursor-pointer"
              >
                {technology}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <Button variant="outline" className="w-full" onClick={() => {
        // Reset filters functionality could be added here if needed
      }}>
        {t("Reset Filters", "Сбросить фильтры")}
      </Button>
    </div>
  );
}
