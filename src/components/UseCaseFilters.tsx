
import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Search, Filter, X, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "./ui/collapsible";
import { Badge } from "./ui/badge";

interface UseCaseFiltersProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  industries: string[];
  selectedIndustries: string[];
  onIndustryChange: (industry: string) => void;
  technologies: string[];
  selectedTechnologies: string[];
  onTechnologyChange: (technology: string) => void;
  // These properties are still needed by the component but we won't display the counts
  industryCounts: Record<string, number>;
  technologyCounts: Record<string, number>;
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
  industryCounts,
  technologyCounts
}: UseCaseFiltersProps) {
  const { t } = useLanguage();
  const [isIndustryOpen, setIsIndustryOpen] = useState(true);
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(true);

  const resetFilters = () => {
    // Reset all filters
    const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
    if (searchInput) searchInput.value = '';
    
    // Trigger search with empty value
    const event = {
      target: { value: '' }
    } as React.ChangeEvent<HTMLInputElement>;
    
    onSearch(event);
    
    // Clear selected filters
    selectedIndustries.forEach(industry => onIndustryChange(industry));
    selectedTechnologies.forEach(tech => onTechnologyChange(tech));
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-lg flex items-center">
            <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
            {t("Filters", "Фильтры")}
          </h3>
          
          {(selectedIndustries.length > 0 || selectedTechnologies.length > 0) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-sm"
            >
              {t("Reset", "Сбросить")}
            </Button>
          )}
        </div>
        
        {/* Selected filters */}
        {(selectedIndustries.length > 0 || selectedTechnologies.length > 0) && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedIndustries.map(industry => (
                <Badge key={industry} variant="secondary" className="pr-1 flex items-center gap-1">
                  {industry}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-foreground transition-colors" 
                    onClick={() => onIndustryChange(industry)}
                  />
                </Badge>
              ))}
              {selectedTechnologies.map(technology => (
                <Badge key={technology} variant="outline" className="pr-1 flex items-center gap-1">
                  {technology}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-foreground transition-colors" 
                    onClick={() => onTechnologyChange(technology)}
                  />
                </Badge>
              ))}
            </div>
            <Separator />
          </div>
        )}
      </div>

      {/* Industry Filter */}
      <Collapsible open={isIndustryOpen} onOpenChange={setIsIndustryOpen} className="border rounded-md p-2">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-md font-medium">
            {t("Industry", "Отрасль")}
          </h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-1 h-7 w-7">
              {isIndustryOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="space-y-2 mt-2 max-h-60 overflow-y-auto pr-2 px-2">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center space-x-2">
                <Checkbox
                  id={`industry-${industry}`}
                  checked={selectedIndustries.includes(industry)}
                  onCheckedChange={() => onIndustryChange(industry)}
                />
                <Label
                  htmlFor={`industry-${industry}`}
                  className="text-sm font-normal cursor-pointer flex-grow"
                >
                  {industry}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Technology Filter */}
      <Collapsible open={isTechnologyOpen} onOpenChange={setIsTechnologyOpen} className="border rounded-md p-2">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-md font-medium">
            {t("Technology", "Технология")}
          </h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-1 h-7 w-7">
              {isTechnologyOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="space-y-2 mt-2 max-h-60 overflow-y-auto pr-2 px-2">
            {technologies.map((technology) => (
              <div key={technology} className="flex items-center space-x-2">
                <Checkbox
                  id={`tech-${technology}`}
                  checked={selectedTechnologies.includes(technology)}
                  onCheckedChange={() => onTechnologyChange(technology)}
                />
                <Label
                  htmlFor={`tech-${technology}`}
                  className="text-sm font-normal cursor-pointer flex-grow"
                >
                  {technology}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
