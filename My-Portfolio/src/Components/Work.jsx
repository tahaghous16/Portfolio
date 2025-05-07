import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "./buyzaar.png",
    title: "Buyzaar (React Ecommerece Website)",
    projectLink: "https://buyzaar-react-redux.vercel.app/",
  },
  {
    imgSrc: "./shopnest.png",
    title: "ShopNest (React Website)",

    projectLink: "https://react-ecommerce-website-puce.vercel.app/",
  },
  {
    imgSrc: "./solution.png",
    title: "Innovative Solution App",
    projectLink:
      "https://66cb50edbd7394361ce20be7--unique-gnome-ca28eb.netlify.app/",
  },
  {
    imgSrc: "./mernauth.png",
    title: "MERN-AUTH",

    projectLink: "https://github.com/tahaghous16/MERN-AUTH",
  },
];

let Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My Project Highlights</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
