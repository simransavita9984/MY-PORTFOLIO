import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "simransavita11@gmail.com",
      href: "mailto:simransavita11@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9984865776",
      href: "tel:+919984865776"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kanpur Nagar, Uttar Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/simransavita9984", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/simran-savita/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/sim72344", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="card-glass p-8">
                <h3 className="text-2xl font-semibold mb-6 text-glow">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-hero w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div className="card-glass p-6">
                  <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="card-glass p-6">
                  <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
                {/* <div className="card-glass p-6 text-center">
                  <h4 className="text-xl font-semibold mb-3">Ready to start?</h4>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss how we can bring your vision to life
                  </p>
                  <button className="btn-hero-outline w-full">
                    Schedule a Call
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;