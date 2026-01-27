import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { CollectionEntry } from "astro:content"

interface IProps {
  service: CollectionEntry<'service'>
}

export const ServiceCard: React.FC<IProps> = ({ service }) => {
  const { id, data } = service

  return (
    <a href={`/services/${id}`}>
      <Card className="overflow-hidden group h-full">
        <CardHeader className="p-0 -mt-8">
          <div className="relative h-52 overflow-hidden">
            <img
              src={data.coverImgSrc}
              alt={data.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">{data.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {data.tags && data.tags.map((tag) => (
              <Badge key={tag} variant={'secondary'}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  )
}