import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ayham.alaaeddin@gmail.com",
      href: "mailto:ayham.alaaeddin@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com"
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download CV",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Let's Connect</h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.label}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <a 
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{method.label}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {method.value}
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-glow transition-all"
            asChild
          >
            <a href="mailto:your.email@example.com">
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
