import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "Working with Arpit was a game-changer for our startup. His technical expertise and attention to detail helped us launch our platform ahead of schedule.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "Arpit's ability to understand our business needs and translate them into elegant technical solutions was impressive. A true professional.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "The level of communication and project management Arpit brings to the table is exceptional. He's more than a developer; he's a valuable partner.",
  },
]

export function ClientTestimonials() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
