import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface IUnderDev {
  children?: React.ReactNode;
  className?: string;
}

export const UnderDev: React.FC<IUnderDev> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        // 1. Dimensions: Fill whatever space the parent gives it
        "h-full w-full",
        // 2. Layout: Center content vertically & horizontally
        "flex flex-col items-center justify-center p-4",
        // 3. Styling
        "border border-dashed rounded-lg",
        className
      )}
    >
      <p className="text-3xl lg:text-4xl font-black tracking-tighter text-center text-nowrap">
        🚧 Under Development
      </p>
      {children ? (
        <div className="my-3 px-5">
          <Separator />
          <div className="my-3 tracking-wide font-mono text-center mx-auto flex flex-wrap justify-center items-center gap-3">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};
