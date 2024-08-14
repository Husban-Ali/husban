import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card"
import { Github, Link2Icon } from "lucide-react"
import { Badge } from "./ui/badge"

const ProjectCard = ({ project }) => {
  return (
    <Card className="flex flex-col h-[450px] overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_bg_project_light xl:bg-[110%] overflow-hidden">
          <Image 
            className="absolute bottom-0 shadow-2xl transition-transform duration-300 hover:scale-105" 
            width={247} 
            height={250} 
            alt={project.name} 
            priority 
            src={project.image} 
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 flex flex-col">
        <Badge className="self-start text-sm font-medium mb-2">{project.category}</Badge>
        <h4 className="h4 mb-2">{project.name}</h4>
        <p className="text-muted-foreground text-sm flex-grow overflow-y-auto">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <Link href={project.github} className="text-muted-foreground hover:text-primary transition-colors" target="blank">
          <Github size={20} />
        </Link>
        <Link href={project.link} className="text-muted-foreground hover:text-primary transition-colors" target="blank">
          <Link2Icon size={20} />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard