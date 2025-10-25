import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "FullStack",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features",
      tech: ["Next.js", "TypeScript", "MongoDB", "WebSockets"],
      category: "FullStack",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform for business intelligence with interactive charts and reports",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      category: "Frontend",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Social Media API",
      description: "RESTful API for a social networking platform with authentication and content management",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "Backend",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const categories = ["All", "FullStack", "Frontend", "Backend"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Check out some of the projects I recently worked on. Use the buttons to toggle the different categories.
        </p>
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="min-w-[120px]"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
