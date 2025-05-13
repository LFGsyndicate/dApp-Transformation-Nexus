import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { cn } from "../lib/utils";

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  className?: string;
}

export const TechCard: React.FC<TechCardProps> = ({ title, description, icon, to, className }) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-2xl">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardContent className="flex justify-end">
        <Link to={to}>
          <div className="text-primary hover:underline">Learn More</div>
        </Link>
      </CardContent>
    </Card>
  );
};
