import { SectionWrapper } from "../shared"
import { ClientTestimonials } from "./client-testimonial"

export const ClientSec = () => {
  return (
    <SectionWrapper background="muted">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Clients Say
      </h2>
      <ClientTestimonials />
    </SectionWrapper>
  )
}
