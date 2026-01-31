import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface INotFound {
  type: "blog" | "project" | "service";
  className?: string;
}

export const NotFound: React.FC<INotFound> = ({
  type,
  className,
}) => {
  const getEmoji = () => {
    switch (type) {
      case "blog":
        return "📝";
      case "project":
        return "🚀";
      case "service":
        return "💼";
      default:
        return "🔍";
    }
  };

  const getTitle = () => {
    switch (type) {
      case "blog":
        return "No Blog Found";
      case "project":
        return "No Project Found";
      case "service":
        return "No Service Found";
      default:
        return "Content Not Found";
    }
  };

  const getMessage = () => {
    switch (type) {
      case "blog":
        return "This blog post doesn't exist yet or has been removed.";
      case "project":
        return "This project doesn't exist yet or has been removed.";
      case "service":
        return "This service doesn't exist yet or has been removed.";
      default:
        return "The requested content could not be found.";
    }
  };

  return (
    <div
      className={cn(
        "h-full w-full",
        "flex flex-col items-center justify-center p-4",
        "border border-dashed rounded-lg",
        className
      )}
    >
      <p className="text-6xl mb-4">{getEmoji()}</p>
      <p className="text-3xl lg:text-4xl font-black tracking-tighter text-center text-nowrap">
        {getTitle()}
      </p>
      <div className="my-3 px-5">
        <Separator />
        <p className="my-3 text-center text-muted-foreground max-w-md mx-auto">
          {getMessage()}
        </p>
      </div>
    </div>
  );
};
