import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  tags: string[]
  githubUrl?: string
}

export default function ProjectCard({ title, description, date, tags, githubUrl }: ProjectCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-teal-400 text-sm mt-1">{date}</p>
        </div>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Github size={20} />
          </a>
        )}
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
