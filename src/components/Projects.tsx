import { useState } from "react";
import { ExternalLink, Github, Play, X } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Smart Drone with Pollution Detection",
      category: "IoT Development",
      description:
        "A drone system integrated with pollution detection sensors for real-time air quality monitoring and data collection.",
      technologies: ["Arduino IDE", "C++", "IoT Sensors", "GPS Module"],
      features: [
        "Real-time air quality monitoring",
        "Automated drone navigation",
        "Scalable and extendable design",
        "Data collection and reporting system",
      ],
      image:
        "https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
      demoUrl:
        "https://www.linkedin.com/posts/simran-savita_smart-activity-7124038780205883392-K8nA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6I-BwB9n50o8a-T8C6vahrCqHOuVgCdcg",
      githubUrl: "https://github.com/simransavita9984/smart-drone",
    },
    {
      id: 2,
      title: "Tic Tac Toe Game",
      category: "Frontend Development",
      description:
        "An interactive Tic Tac Toe game built with React and Tailwind CSS, offering a smooth and responsive gameplay experience.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      features: [
        "Player vs Player mode",
        "Real-time game status updates",
        "Responsive and modern UI with Tailwind CSS",
        "Instant win detection and reset functionality",
      ],
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      demoUrl: "https://letsplaytoe.netlify.app/",
      githubUrl: "https://github.com/simransavita9984/Tic-Tac-Toe-Game",
    },
    {
      id: 3,
      title: "Grammar Scoring Engine",
      category: "Machine Learning / NLP",
      description:
        "A grammar scoring engine that evaluates text for grammatical accuracy and provides a performance score.",
      technologies: ["Python", "NLP", "Flask", "Scikit-learn", "PostgreSQL"],
      features: [
        "Grammar error detection using NLP techniques",
        "Automated scoring system",
        "RESTful API integration",
        "User-friendly interface for text input and results",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpfGVufDB8fDB8fHww",
      demoUrl: "#",
      githubUrl: "https://github.com/simransavita9984/spoken-grammar-evaluator",
    },
    {
      id: 4,
      title: "VS Code Clone",
      category: "Frontend",
      description:
        "A simple VS Code clone built using HTML, CSS, and JavaScript with basic code editor functionalities.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
         "Basic code editor UI",
    "Syntax highlighting",
    "Resizable panels",
    "Dark theme",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dnMlMjBjb2RlfGVufDB8fDB8fHww",
      demoUrl: "https://vs-code-clone-six-bay.vercel.app/",
      githubUrl: "https://github.com/simransavita9984/VS-code-clone",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions across IoT, ML, and Full Stack
              development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="card-glass overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted/30 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-accent/20 rounded text-xs font-medium text-accent">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.demoUrl && project.demoUrl !== "#") {
                          window.open(
                            project.demoUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                    >
                      <Play className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </button>

                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted/20 border border-border rounded-lg hover:bg-muted hover:text-foreground transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.githubUrl && project.githubUrl !== "#") {
                          window.open(
                            project.githubUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const project = projects.find((p) => p.id === selectedProject);
              if (!project) return null;

              return (
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />

                  {/* Project Details */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-sm font-medium text-primary">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-glow">
                      {project.title}
                    </h3>

                    <p className="text-lg text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={
                          project.demoUrl && project.demoUrl !== "#"
                            ? project.demoUrl
                            : undefined
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!project.demoUrl || project.demoUrl === "#")
                            e.preventDefault();
                        }}
                        className="btn-hero flex items-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>

                      <a
                        href={
                          project.githubUrl && project.githubUrl !== "#"
                            ? project.githubUrl
                            : undefined
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!project.githubUrl || project.githubUrl === "#")
                            e.preventDefault();
                        }}
                        className="btn-hero-outline flex items-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
