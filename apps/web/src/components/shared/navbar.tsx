import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { useEffect, useState } from "react";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const routes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
]

interface IProp {
  pathname: string
}
export const NavBar: React.FC<IProp> = ({
  pathname
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b"
          : "bg-background",
      )}
    >
      <MaxWidthWrapper>
        <div className="mx-auto md:py-4">
          <div className="relative flex items-center my-4">
            {/* Desktop Navigation */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-6">
              {routes.map((route) => (
                <a key={route.href} href={route.href}>
                  <Button
                    variant={pathname === route.href ? "secondary" : "ghost"}
                  >
                    {route.label}
                  </Button>
                </a>
              ))}
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="ml-auto md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
                <nav className="flex flex-col gap-4 mt-8">
                  {routes.map((route) => (
                    <a key={route.href} href={route.href}>
                      <Button
                        variant={pathname === route.href ? "secondary" : "ghost"}
                        className="w-full justify-start"
                      >
                        {route.label}
                      </Button>
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
