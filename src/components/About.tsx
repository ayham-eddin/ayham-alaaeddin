import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
          <Avatar className="w-48 h-48 shrink-0 border-4 border-primary/20">
            <AvatarImage src="/src/assets/ayham.png" alt="Ayham Alaa Eddin" />
            <AvatarFallback className="text-6xl">AA</AvatarFallback>
          </Avatar>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="animate-fade-in">
              I’m a passionate Web Developer and Software Engineer with a strong
              foundation in building scalable, high-performance applications.
              Certified as a Fachinformatiker für Anwendungsentwicklung, I bring
              hands-on experience across the full stack — from designing
              intuitive user interfaces with React to architecting robust
              backend systems with Node.js, Express, and MongoDB.
            </p>
            <p className="animate-fade-in-delay">
              What drives me is more than just code — it’s the idea of creating
              digital solutions that genuinely improve people’s lives. I enjoy
              transforming complex problems into clean, efficient, and
              maintainable software, while keeping user experience at the heart
              of every decision.
            </p>
            <p className="animate-fade-in-delay">
              With experience in automated testing using Cypress and Jest, and a
              strong understanding of agile methodologies and CI/CD workflows,
              I’m dedicated to building reliable and future-ready applications.
              Whether developing new features, optimizing performance, or
              collaborating within diverse teams, I approach every project with
              creativity, precision, and commitment to excellence.
            </p>
            <p className="animate-fade-in-delay">
              When I’m not coding, I love exploring emerging technologies,
              contributing to open source, and sharing ideas with the developer
              community — always learning, always evolving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
