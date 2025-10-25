import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) => {
  return (
    <Card
      key={project.title}
      className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
      style={{ animationDelay: `${(index ?? 0) * 100}ms` }}
    >
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-base">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
