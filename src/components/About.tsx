import { Code2, Brain, Cpu } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building end-to-end solutions with modern technologies"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Implementing AI-driven solutions for real-world problems"
    },
     {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Creating smart, connected devices and systems"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with expertise in cutting-edge technologies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-glow">
                Building Tomorrow's Technology Today
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Full Stack Developer with a passion for creating innovative solutions 
                that bridge the gap between software and hardware. My expertise spans across modern 
                web technologies, machine learning applications and IoT systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in both frontend and backend Web development, I specialize in 
                building scalable applications that integrate seamlessly with IoT devices and leverage 
                the power of AI to solve complex problems.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {["React.js","Next.js" ,"Node.js", "Express.js","MongoDB","Python", "TypeScript","Javascript", "SQL", "Machine Learning", "MYSQL", "GitHub"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="card-glass p-6 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;