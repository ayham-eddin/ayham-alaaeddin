import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features",
      tech: ["Next.js", "TypeScript", "MongoDB", "WebSockets"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform for business intelligence with interactive charts and reports",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Social Media API",
      description: "RESTful API for a social networking platform with authentication and content management",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
