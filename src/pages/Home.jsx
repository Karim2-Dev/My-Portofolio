import React from "react";
import ThemeToggole from "../components/ThemeToggole";
import StarBackground from "../components/StarBackground";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSeciton from "../components/SkillsSeciton";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggole />

      {/* BackGround Effects */}
      <StarBackground />
      {/* NavBar */}
      <NavBar />
      {/* Maint Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSeciton />
        <ProjectsSection />
        <ContactSection />
        <Footer/>
      </main>

      {/* Footer */}
    </div>
  );
}

export default Home;
