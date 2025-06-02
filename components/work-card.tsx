import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"

interface WorkCardProps {
  logo: string
  title: string
  company: string
  date: string
  description: string
  tags: string[]
}

export default function WorkCard({ logo, title, company, date, description, tags }: WorkCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="w-12 h-12 rounded bg-teal-400 flex items-center justify-center overflow-hidden">
          {logo ? (
            <Image src={logo || "/placeholder.svg"} alt={company} width={48} height={48} />
          ) : (
            <div className="w-full h-full bg-teal-400" />
          )}
        </div>
        <div className="space-y-1 flex-1">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400">{company}</p>
        </div>
        <div className="text-teal-400 text-sm">{date}</div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300 mt-2">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-gray-800 text-teal-400 border-teal-400/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
