
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";
import { ExternalLink } from "lucide-react";

type UseCase = {
  id: string;
  title: string;
  description: string;
  industry: string;
  technology: string;
  source?: string;
  link?: string;
};

interface UseCaseCardProps {
  useCase: UseCase;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase }) => {
  const { t } = useLanguage();
  const { title, description, industry, technology, source, link } = useCase;
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{industry}</Badge>
          <Badge variant="outline">{technology}</Badge>
        </div>
        {source && (
          <div className="text-sm text-muted-foreground">
            {t("Source", "Источник")}: {source}
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-between">
        {link ? (
          <Button variant="outline" asChild className="flex gap-2">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {t("Visit Source", "Посетить источник")}
              <ExternalLink size={16} />
            </a>
          </Button>
        ) : (
          <Button variant="secondary">
            {t("Learn More", "Узнать больше")}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export { UseCaseCard };
