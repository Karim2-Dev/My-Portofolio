import React from "react";
const skills = [
  {
    name: "JavaScript",
    src: "/src/assets/Images/skills/javaScirpt.png",
  },
  {
    name: "React.js",
    src: "/src/assets/Images/skills/react.png",
  },
  {
    name: "Next.js",
    src: "/src/assets/Images/skills/Next.js.png",
  },
  {
    name: "TypeScript",
    src: "/src/assets/Images/skills/TypeScript.png",
  },
  {
    name: "Tailwind css",
    src: "/src/assets/Images/skills/tailwind.png",
  },
  {
    name: "BootStrap css",
    src: "/src/assets/Images/skills/bootstrap.png",
  },
  {
    name: "Material UI",
    src: "/src/assets/Images/skills/materialui.png",
  },
  {
    name: "Redux",
    src: "/src/assets/Images/skills/Redux.png",
  },
  {
    name: "Git/GitHub",
    src: "/src/assets/Images/skills/github.png",
  },
];
function SkillsSeciton() {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl  md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              className="bg-card flex items-center p-6 rounded-lg shadow-xs card-hover"
              key={key}
            >
              <div className="text-left flex gap-3 items-center">
                <div className="img-skill max-w-10">
                  <img className="w-auto" src={skill.src} alt={skill.name} />
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSeciton;
