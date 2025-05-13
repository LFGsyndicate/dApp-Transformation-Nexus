import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";

interface UseCaseCardProps {
  title: string;
  description: string;
  industry: string;
  technology: string;
  link: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, industry, technology, link }) => {
  const { t } = useLanguage();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">{industry}</Badge>
          <Badge variant="outline">{technology}</Badge>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {t("Learn More", "Узнать больше")}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { UseCaseCard };
