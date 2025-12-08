import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  background?: "default" | "muted"
}

export const SectionWrapper = ({
  children,
  className,
  containerClassName,
  background = "default",
}: SectionWrapperProps) => {
  return (
    <section
      className={cn(
        "py-20",
        background === "muted" && "bg-secondary/30",
        className
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 max-w-7xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}
