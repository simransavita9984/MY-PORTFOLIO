import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "DJango", level: 70 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {


       title: "Machine Learning",
      skills: [
        { name: "TensorFlow", level: 78 },
        { name: "Scikit-learn", level: 82 },
        { name: "Computer Vision", level: 75 },
        { name: "Data Analysis", level: 85 }
      ]
    },
    // {
    //  title: "IoT & Hardware",
    //   skills: [
    //     { name: "Arduino/ESP32", level: 85 },
    //     { name: "Raspberry Pi", level: 80 },
    //     { name: "Sensor Integration", level: 88 }
    //   ]
    // }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expertise across the full technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card-glass p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center text-glow">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h4 className="text-xl font-semibold mb-6">Additional Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "AWS", "Git", "Firebase",
              "Figma",
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-muted/30 border border-border rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;