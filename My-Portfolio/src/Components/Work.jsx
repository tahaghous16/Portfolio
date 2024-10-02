import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "public/Currency converter.jpg",
    title: "Currency Converter App",
    projectLink:
      "https://66cb7a8e2f99f106bf90fdbb--frabjous-starlight-bd8b19.netlify.app/",
  },
  {
    imgSrc: "public/CarrioMotor.png",
    title: "Carrio Motor App",

    projectLink:
      "https://66cb8736882f3d6714c737de--courageous-profiterole-0d5169.netlify.app/",
  },
  {
    imgSrc: "public/Innovative Solution.png",
    title: "Innovative Solution App",
    projectLink:
      "https://66cb50edbd7394361ce20be7--unique-gnome-ca28eb.netlify.app/",
  },
  {
    imgSrc: "public/Tic-Tac-Toe.jpg",
    title: "Tic-Tac-Toe Game App",

    projectLink:
      "https://66cb4589bab9882607397ecd--zingy-palmier-e88407.netlify.app/",
  },
];

let Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My Project Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(210px,_1fr))]">
          {works.map(({ imgSrc, title, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
