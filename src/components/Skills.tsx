import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js / Next.js", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Django / Flask", level: 75 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    category: "Version Control & Tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Postman", level: 90 },
      { name: "Docker", level: 80 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "TensorFlow", level: 78 },
      { name: "Scikit-learn", level: 82 },
      { name: "Data Analysis", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-1 cursor-default">
    <div className="flex justify-between items-center font-medium text-sm sm:text-base">
      <span>{name}</span>
      <span className="text-primary font-semibold">{level}%</span>
    </div>
    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 sm:h-4 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="bg-primary h-3 sm:h-4 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 sm:px-12 md:px-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across full technology stack categorized clearly
          </p>
        </div>

      
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
              repeatType: "loop",
            }}
          >
          
            {[...skillCategories, ...skillCategories].map((category, idx) => (
              <div
                key={idx}
                className="card-glass p-6 sm:p-8 flex flex-col min-w-[280px] hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold text-center mb-6 text-glow">
                  {category.category}
                </h3>
                <div className="space-y-4 flex-1">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
