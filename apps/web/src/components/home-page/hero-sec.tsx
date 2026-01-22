import { SectionWrapper } from "../shared"
import { Button } from "../ui/button"
import { Calendar } from "lucide-react"

export const HeroSec = () => {
  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 relative z-10" >
      <div className="space-y-4 sm:space-y-6 text-center">
        <p className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
          {`I'm`} <span className="italic font-serif font-black">Arpit</span>{" "}
          👋
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Building{' '}
          <span className="underline italic decoration-wavy decoration-2 decoration-primary/70 underline-offset-4">
            boring systems
          </span>{' '}
          that quietly print serious money for your business
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
          Engineering scalable multi-tenant <b>CRMs, ERPs & Dashboards</b> with granular access controls and plugins for <i>Salesforce, SAP or any of your ecosystem</i>
        </p>
        <Button asChild size="lg" className="mt-8 z-10">
          <a href="https://cal.com/arpitv970">
            <Calendar className="w-4 h-4" />
            Book a Quick Call
          </a>
        </Button>
      </div>
    </SectionWrapper>
  )
}
