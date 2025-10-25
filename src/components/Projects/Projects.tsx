import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

import Image1 from '../../assets/project01.jpeg';
import Image2 from '../../assets/project02.png';
import Image3 from '../../assets/project03.png';


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Project Discover & Share Places",
      description: "ExploreHub is a modern web and mobile application designed to help users discover new places and share their favorite spots with the community. Whether you’re looking for hidden cafés, scenic parks, or must-visit attractions, ExploreHub makes it easy to find, review, and contribute locations.",
      tech: ["React", "Node.js", "MongoDB", "ExpressJS"],
      category: "FullStack",
      github: "https://github.com/ayham-da/my-projekt/tree/master'",
      demo: "",
      image: Image1
    },
    {
      id: 1,
      title: "Schu Fi Ma Fi – The Syrian Cultural Collective ",
      description: "Collaborative project management tool with real-time updates and team collaboration features",
      tech: ["React", "TypeScript"],
      category: "Frontend",
      github: "https://github.com/ayham-da/schufi--mafi",
      demo: "https://schufimafi-collective.com/'",
      image: Image2
      
    },
    {
      id: 3,
      title: "Keyboard Reader App",
      description: "This app reads the content of the **keyboard.txt** file within the project and displays it in the terminal. It’s a simple utility for processing and outputting text data, making it useful for debugging, logging, or quick file previews.",
      tech: ["Node.js"],
      category: "Backend",
      github: "https://github.com/ayham-da/print-keyboard-2",
      demo: "",
      image: Image3
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
