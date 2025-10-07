import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.png"; // Your profile image

const Hero = () => {
  const [text, setText] = useState("");
  const fullText =  ["Full Stack Developer", "Machine Learning Enthusiast", "Frontend Developer"];

useEffect(() => {
  let titleIndex = 0;
  let charIndex = 0; 
  let deleting = false;

  const type = () => {
    const currentTitle = fullText[titleIndex];

    if (!deleting && charIndex <= currentTitle.length) {
      setText(currentTitle.slice(0, charIndex));
      charIndex++;
    } else if (deleting && charIndex >= 0) {
      setText(currentTitle.slice(0, charIndex));
      charIndex--;
    }

    if (charIndex === currentTitle.length + 1) {
      deleting = true;
      setTimeout(type, 1000); 
      return;
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      titleIndex = (titleIndex + 1) % fullText.length;
    }

    const speed = deleting ? 50 : 100; 
    setTimeout(type, speed);
  };

  type();

  return () => {}; 
}, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

    
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
      
        <div className="md:w-1/2 lg:w-2/5 text-left space-y-8">
          <div className="mb-2 animate-fade-in-up">
            <span className="text-accent text-lg font-medium">Hello, My name is</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="text-gradient">Simran Savita</span>
          </h1>
          <div className="text-2xl md:text-4xl font-semibold h-16 flex items-center animate-fade-in-up text-glow">
            {text}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 animate-fade-in-up">
            Passionate about creating innovative solutions through Web Development and Machine Learning.
            Building the future, one line of code at a time.
          </p>
          <div className="flex gap-4 animate-fade-in-up flex-wrap">
            <button
              className="btn-hero"
              onClick={() =>
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </button>
            <button
              className="btn-hero-outline"
              onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </button>
          </div>
        </div>

      
        <div className="md:w-1/2 lg:w-2/5 flex justify-center items-center relative">
          <div
            className="rounded-full border-8 border-primary bg-gradient-to-tr from-primary/40 to-accent/40 shadow-2xl overflow-hidden
              transition-transform duration-300 hover:scale-105 hover:shadow-glow animate-float"
            style={{
              width: "360px",
              height: "360px",
              maxWidth: "90vw",
            }}
          >
            <img
              src={profileImage}
              alt="Simran Savita"
              className="w-full h-full object-cover rounded-full"
            />
            <span className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-full border-4 border-accent animate-pulse"></span>
          </div>
        </div>
      </div>

   
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>

    
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(14px); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        .shadow-glow {
          box-shadow: 0 0 48px 10px #a855f7;
        }
      `}</style>
    </section>
  );
};

export default Hero;
