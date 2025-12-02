import { Briefcase, Code, User } from "lucide-react";
import React from "react";

function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Front-end Developer
            </h3>

            <p className="text-muted-foreground">
              I specialize in turning designs into fully responsive and
              interactive web applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I enjoy creating elegant solutions to complex problems and
              continuously learning new tools and techniques to stay up-to-date
              in the ever-evolving world of web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duraiton-300"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* Skills */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6  w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating Responsive websites and application with modern
                    framework
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6  w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">UI/UX</h4>
                  <p className="text-muted-foreground">
                    UI/UX Implementation Turning Figma designs into fully
                    interactive, responsive, and real-world front-end projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6  w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">Web Optimization</h4>
                  <p className="text-muted-foreground">
                    Improving website performance, responsiveness, and
                    accessibility for a polished final product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
