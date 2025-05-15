
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";
import { ExternalLink, Info } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

// Update the type to match what useTranslatedUseCases returns
type UseCase = {
  id: string;
  title: string;
  description: string;
  industry: string;
  technology: string;
  source?: string;
  link?: string;
  researchPaper?: string;
};

interface UseCaseCardProps {
  useCase: UseCase;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase }) => {
  const { t } = useLanguage();
  const { title, description, industry, technology, source, link, researchPaper } = useCase;
  
  // Generate a consistent but visually distinct background for each card based on the industry
  const getBgPattern = (industry: string) => {
    // Simple hash function to convert industry to a number
    let hash = 0;
    for (let i = 0; i < industry.length; i++) {
      hash = industry.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Map to one of several predefined gradient patterns
    const patterns = [
      "bg-gradient-to-br from-blue-50 to-blue-100",
      "bg-gradient-to-br from-green-50 to-green-100",
      "bg-gradient-to-br from-purple-50 to-purple-100",
      "bg-gradient-to-br from-amber-50 to-amber-100",
      "bg-gradient-to-br from-rose-50 to-rose-100",
      "bg-gradient-to-br from-cyan-50 to-cyan-100",
    ];
    
    const index = Math.abs(hash) % patterns.length;
    return patterns[index] + " dark:opacity-10";
  };
  
  const getBadgeColor = (technology: string) => {
    const techColors: Record<string, string> = {
      "Blockchain": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "Smart Contracts": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      "NFTs": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
      "DAO": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "AI": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
    };
    
    return techColors[technology] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  };
  
  return (
    <Card className="h-full flex flex-col overflow-hidden border-opacity-40 hover:shadow-md transition-shadow">
      <AspectRatio ratio={16/3} className={getBgPattern(industry)}>
        <div className="h-full flex items-center justify-center">
          <Badge className="uppercase tracking-wider text-xs font-medium">{industry}</Badge>
        </div>
      </AspectRatio>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3 mb-4">{description}</CardDescription>
        <Badge 
          variant="secondary" 
          className={`${getBadgeColor(technology)} font-normal`}
        >
          {technology}
        </Badge>
        
        {source && (
          <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
            <Info className="h-3 w-3" />
            <span>{source}</span>
          </div>
        )}
      </CardContent>
      
      {/* Только показываем кнопку, если есть ссылка или исследовательский документ */}
      {(link || researchPaper) && (
        <CardFooter className="pt-0">
          {link ? (
            <Button variant="outline" asChild size="sm" className="w-full">
              <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`View source for ${title}`}>
                {t("View Source", "Посмотреть источник")}
                <ExternalLink size={14} className="ml-2" />
              </a>
            </Button>
          ) : researchPaper ? (
            <Button variant="outline" asChild size="sm" className="w-full">
              <a href={researchPaper} target="_blank" rel="noopener noreferrer" aria-label={`View research paper for ${title}`}>
                {t("View Research Paper", "Посмотреть исследование")}
                <ExternalLink size={14} className="ml-2" />
              </a>
            </Button>
          ) : null}
        </CardFooter>
      )}
    </Card>
  );
};

export { UseCaseCard };
