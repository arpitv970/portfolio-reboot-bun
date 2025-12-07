import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react"

const routes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
]

export const NavBar = () => {
  return (
    <nav
      className={cn(
        // "fixed top-0 w-full z-50 transition-all duration-300",
        // "bg-background/80 backdrop-blur-lg border-b"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center my-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <a key={route.href} href={route.href}>
                <Button
                  variant={'ghost'}
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
          >
          </Button>
        </div>

        {/* Mobile Navigation */}
      </div>
    </nav>
  )
}
