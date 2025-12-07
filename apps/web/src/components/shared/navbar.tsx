import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { useEffect, useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center my-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
          </Button>
        </div>

        {/* Mobile Navigation */}
      </div>
    </nav>
  )
}
