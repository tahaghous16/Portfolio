import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "./html-1.svg",
    label: "HTML",
    desc: "Basic Structure",
  },
  {
    imgSrc: "./css-3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "./javascript-1.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "./react.svg",
    label: "ReactJS",
    desc: "Framework",
  },
  {
    imgSrc: "./c++.svg",
    label: "C++",
    desc: "Programming Language",
  },
  {
    imgSrc: "./bootstrap-5-1.svg",
    label: "Bootstrap",
    desc: "Framework",
  },
  {
    imgSrc: "./tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

let Skill = () => {
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the tools and technologies I use to create exceptional,
          high-performing websites & applications.
        </p>

        <div className="card-container flex flex-wrap justify-center gap-4">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} key={key} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
