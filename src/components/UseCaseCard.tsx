
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/useLanguage";

type UseCase = {
  id: string;
  title: string;
  description: string;
  industry: string;
  technology: string;
};

interface UseCaseCardProps {
  useCase: UseCase;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase }) => {
  const { t } = useLanguage();
  const { title, description, industry, technology } = useCase;
  
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
        <Button variant="secondary">
          {t("Learn More", "Узнать больше")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export { UseCaseCard };
