
import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Search, X } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

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
  const [isIndustryOpen, setIsIndustryOpen] = useState(true);
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(true);

  const resetFilters = () => {
    const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
    if (searchInput) searchInput.value = '';
    searchInput?.dispatchEvent(new Event('change', { bubbles: true }));
  };

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
      <Collapsible open={isIndustryOpen} onOpenChange={setIsIndustryOpen}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">
            {t("Industry", "Отрасль")}
          </h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isIndustryOpen ? 
                <X className="h-4 w-4" /> : 
                <span className="text-xs text-muted-foreground">{t("Show", "Показать")}</span>
              }
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="space-y-3 mt-4 max-h-60 overflow-y-auto pr-2">
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
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      {/* Technology Filter */}
      <Collapsible open={isTechnologyOpen} onOpenChange={setIsTechnologyOpen}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">
            {t("Technology", "Технология")}
          </h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isTechnologyOpen ? 
                <X className="h-4 w-4" /> : 
                <span className="text-xs text-muted-foreground">{t("Show", "Показать")}</span>
              }
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="space-y-3 mt-4 max-h-60 overflow-y-auto pr-2">
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
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Button variant="outline" className="w-full" onClick={resetFilters}>
        {t("Reset Filters", "Сбросить фильтры")}
      </Button>
    </div>
  );
}
