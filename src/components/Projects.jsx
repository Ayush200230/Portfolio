import React from "react";
import Image from "next/image";
import project1 from "../../public/aaruush.png";
import project2 from "../../public/tsummit.png";
import project3 from "../../public/fintechrelay.png";
import project4 from "../../public/welfarewave.png";
import project5 from "../../public/denzzi.png";
import project6 from "../../public/htb.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 mt-16 lg:mt-32">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Aaruush ' 23"
            backgroundImg={project1}
            projectUrl="/project1"
          />
          <ProjectItem
            title="T-summit 7.0"
            backgroundImg={project2}
            projectUrl="/project2"
          />
          <ProjectItem
            title="Fintech Relay"
            backgroundImg={project3}
            projectUrl="/project3"
          />
          <ProjectItem
            title="Welfare Wave"
            backgroundImg={project4}
            projectUrl="/project4"
          />
          <ProjectItem
          title="Denzzi"
          backgroundImg={project5}
          projectUrl="/project5"
          />
          <ProjectItem
          title="HTB Task"
          backgroundImg={project6}
          projectUrl="/project6"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
