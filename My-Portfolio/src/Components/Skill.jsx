import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  { imgSrc: "./c++.svg", label: "C++", desc: "Programming Language" },
  { imgSrc: "./java.svg", label: "Java", desc: "Programming Language" },
  { imgSrc: "./html-1.svg", label: "HTML", desc: "Basic Structure" },
  { imgSrc: "./css-3.svg", label: "CSS", desc: "User Interface" },
  { imgSrc: "./javascript-1.svg", label: "JavaScript", desc: "Interaction" },
  { imgSrc: "./react.svg", label: "ReactJS", desc: "Framework" },
  { imgSrc: "./nodejs.svg", label: "NodeJS", desc: "Runtime Enviornmet" },
  { imgSrc: "./expressjs.svg", label: "ExpressJS", desc: "Framwork" },
  { imgSrc: "./mongodb.svg", label: "MongoDB", desc: "Database" },
  { imgSrc: "./bootstrap-5-1.svg", label: "Bootstrap", desc: "Framework" },
  { imgSrc: "./tailwindcss.svg", label: "TailwindCSS", desc: "User Interface" },
  
];

let Skill = () => {
  const scrollingItems = [...skillItem, ...skillItem]; // duplicate for loop effect

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the tools and technologies I use to create exceptional,
          high-performing websites & applications.
        </p>

        {/* Scrolling container */}
        <div className="relative overflow-hidden group">
          <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused] w-max">
            {scrollingItems.map(({ imgSrc, label, desc }, key) => (
              <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
