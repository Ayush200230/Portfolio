import React from "react";

const SkillItem = ({ src, alt, title }) => (
  <div className="p-6 shadow-xl dark:shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="m-auto">
        <img src={src} width="110" height="1" alt={alt} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3>{title}</h3>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { src: "/assets/skills/html3d.png", alt: "HTML", title: "HTML" },
    { src: "/assets/skills/css3d.png", alt: "CSS", title: "CSS" },
    {
      src: "/assets/skills/tailwind3d.png",
      alt: "Tailwind",
      title: "Tailwind",
    },
    {
      src: "/assets/skills/javascript3d.png",
      alt: "JavaScript",
      title: "JavaScript",
    },
    {
      src: "/assets/skills/typescript.png",
      alt: "TypeScript",
      title: "TypeScript",
    },
    { src: "/assets/skills/react.png", alt: "ReactJs", title: "ReactJs" },
    { src: "/assets/skills/nextjs3d.png", alt: "NextJs", title: "NextJs" },
    { src: "/assets/skills/nodejs.png", alt: "NodeJs", title: "NodeJs" },
    // {
    //   src: "/assets/skills/nodejs.png",
    //   alt: "ExpressJs",
    //   title: "ExpressJs",
    // },
    { src: "/assets/skills/nestjs.png", alt: "NestJs", title: "NestJs" },
    { src: "/assets/skills/mongo-db.png", alt: "MongoDB", title: "MongoDB" },
    { src: "/assets/skills/SQL.png", alt: "SQL", title: "SQL" },
    // { src: "/assets/skills/SQL.png", alt: "ThreeJs", title: "ThreeJs" },
    // { src: "/assets/skills/github3d.png", alt: "Github", title: "Github" },
    { src: "/assets/skills/c.png", alt: "C", title: "C" },
    { src: "/assets/skills/c++3d.png", alt: "C++", title: "C++" },
    { src: "/assets/skills/python3d.png", alt: "Python", title: "Python" },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2 dark:text-gray-50">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
