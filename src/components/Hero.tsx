import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
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
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up mb-4">
            <span className="text-accent text-lg font-medium">Hello, My name is</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Simran Savita</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold mb-8 h-16 flex items-center justify-center">
            <span className="text-glow">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up">
            Passionate about creating innovative solutions through Web Development and Machine Learning. 
            Building the future, one line of code at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <button className="btn-hero"  onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </button>
            <button className="btn-hero-outline"  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
              Get In Touch
            </button>
   
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rotate-45 animate-float hidden md:block" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float hidden md:block" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 border border-accent/30 rotate-12 animate-float hidden lg:block" style={{ animationDelay: "4s" }} />
    </section>
  );
};

export default Hero;