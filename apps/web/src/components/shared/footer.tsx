import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-lg font-semibold">
            <span className="text-primary">&lt;</span>
            Arpit
            <span className="text-primary">/&gt;</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/arpitv970"
              className="hover:text-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/arpitv970"
              className="hover:text-primary transition-colors"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/arpitv970"
              className="hover:text-primary transition-colors"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arpitv970"
              className="hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arpit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
