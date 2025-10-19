import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
          <Avatar className="w-48 h-48 shrink-0 border-4 border-primary/20">
            <AvatarImage src="/src/assets/ayham.png" alt="Ayham Alaa Eddin" />
            <AvatarFallback className="text-6xl">AA</AvatarFallback>
          </Avatar>
          <div className="space-y-6 text-lg text-muted-foreground">
          <p className="animate-fade-in">
            I'm a passionate web developer and software engineer with a strong foundation in building 
            scalable, performant applications. My journey in tech has equipped me with expertise across 
            the full stack, from crafting intuitive user interfaces to architecting robust backend systems.
          </p>
          <p className="animate-fade-in-delay">
            I thrive on solving complex problems with elegant solutions, always keeping user experience 
            at the forefront of my work. Whether it's optimizing performance, implementing new features, 
            or collaborating with cross-functional teams, I bring dedication and technical excellence to 
            every project.
          </p>
          <p className="animate-fade-in-delay">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
            or sharing knowledge with the developer community.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
