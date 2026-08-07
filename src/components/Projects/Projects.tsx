import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

import Image1 from "../../assets/project01.jpeg";
import Image2 from "../../assets/project02.png";
import Image3 from "../../assets/project03.png";
import Image4 from "../../assets/project04.png";
import BarberShop from "../../assets/barbershop.png";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  // Ref for scrolling back to projects on pagination click
  const projectsRef = useRef<HTMLDivElement | null>(null);

  // Scroll only when user changes the PAGE (not on refresh)
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const projects = [
    {
      id: 1,
      title: "BarberShop Booking & Management System",
      description:
        "A comprehensive booking and management system tailored for barber shops, enabling seamless appointment scheduling, customer management, and service tracking.",
      tech: ["React", "Node.js", "MongoDB", "ExpressJS"],
      category: "FullStack",
      github: "https://github.com/ayham-eddin/barbershop",
      demo: "https://barbershop-orcin.vercel.app/",
      image: BarberShop,
    },
    {
      id: 2,
      title: "Schu Fi Ma Fi – The Syrian Cultural Collective",
      description:
        "A CMS for a cultural collective. It allows for the easy management of content such as events, news, and other website content.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "ExpressJS"],
      category: "FullStack",
      github: "https://github.com/ayham-eddin/collective-platform",
      demo: "https://schufimafi-collective.vercel.app/",
      image: Image2,
    },
    {
      id: 3,
      title: "Project Discover & Share Places",
      description:
        "ExploreHub helps users discover new places and share their favorite locations with the community.",
      tech: ["React", "Node.js", "MongoDB", "ExpressJS"],
      category: "FullStack",
      github: "https://github.com/ayham-da/my-projekt/tree/master'",
      demo: "",
      image: Image1,
    },
    {
      id: 4,
      title: "Keyboard Reader App",
      description:
        "Reads the content of keyboard.txt and prints it in the terminal. Useful for debugging/logging.",
      tech: ["Node.js"],
      category: "Backend",
      github: "https://github.com/ayham-da/print-keyboard-2",
      demo: "",
      image: Image3,
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description:
        "A portfolio website to showcase my projects, skills, and developer experience.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      category: "Frontend",
      github: "https://github.com/ayham-eddin/ayham-alaaeddin",
      demo: "https://ayham-eddin.github.io/ayham-alaaeddin/",
      image: Image4,
    },
  ];

  const categories = ["All", "FullStack", "Frontend", "Backend"];

  // Filter projects by category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Reset to page 1 when category changes (NO SCROLL HERE)
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Check out some of the projects I recently worked on.
        </p>

        {/* Category Filter */}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    currentPage > 1 && handlePageChange(currentPage - 1)
                  }
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Next */}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    currentPage < totalPages &&
                    handlePageChange(currentPage + 1)
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default Projects;
