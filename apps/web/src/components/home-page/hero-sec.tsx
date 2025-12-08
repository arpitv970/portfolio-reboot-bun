import { SectionWrapper } from "../shared"
import { Button } from "../ui/button"

export const HeroSec = () => {
  return (

    <SectionWrapper className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 relative z-10" >
      <div className="space-y-6 text-center">
        <p className="text-3xl md:text-4xl font-semibold tracking-wide">
          {`I'm`} <span className="italic font-serif font-black">Arpit</span>{" "}
          👋
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          Crafting seamless web experiences with precision and creativity.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {`A Full Stack Developer passionate about building exceptional digital experiences that make a difference.`}
        </p>
        <Button asChild size="lg" className="mt-8 z-10">
          <a href="/contact">{`Let's Work Together`}</a>
        </Button>
      </div>
    </SectionWrapper>
  )
}
