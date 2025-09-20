import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
           © 2025 Simran Savita. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
