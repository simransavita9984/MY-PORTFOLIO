import { motion, Variants } from "framer-motion";
import { Code2, Brain, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end solutions with modern technologies",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Implementing AI-driven solutions for real-world problems",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Creating smart, connected devices and systems",
  },
];

const techStack = [
 "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Python",
  "Flask",
  "MongoDB",
  "MySQL",
  "SQL",
  "Machine Learning",
  "GitHub",
  "Postman",
  "Docker"
];


const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", duration: 0.7, ease: "easeOut" } 
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
        
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
         Turning complex problems into elegant, tech-driven solutions with passion and precision
            </motion.p>
          </div>

   
          <motion.div
            variants={staggerContainer}  
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
           
            <motion.div variants={fadeUp} className="space-y-6"> 
              <h3 className="text-2xl md:text-3xl font-semibold text-glow animate-pulse">
                Building Tomorrow's Technology Today...!!
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a passionate Full Stack Developer with a strong drive for innovation, building solutions that 
              seamlessly bridge the gap between software and hardware. I specialize in crafting scalable, intelli
              gent applications using modern web technologies, machine learning, and IoT systems to solve real-wo
              rld problems effectively.
              </p>

           
              <div className="flex flex-wrap gap-3 pt-4">
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.12,
                      backgroundColor: "#E0E7FF",
                      color: "#4170f6",
                    }}
                    transition={{ type: "spring", duration: 0.3 }}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium transition-all cursor-pointer hover:shadow-lg"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

        
            <motion.div variants={fadeUp} className="space-y-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                      boxShadow: "0 8px 32px rgba(72,104,255,0.12)",
                    }}
                    transition={{ type: "spring", duration: 0.4 }}
                    className="card-glass p-6 group relative overflow-hidden hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300 animate-spin-slow">
                          <Icon className="w-6 h-6 text-primary-foreground" />
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
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-primary to-accent opacity-40 blur-2xl rounded-full pointer-events-none animate-float-slow"></div>
    </section>
  );
};

export default About;
