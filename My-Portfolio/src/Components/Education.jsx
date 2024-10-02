import EducationCard from "./EducarionCard";

const educations = [
  {
    institute: "Matriculation in Computer Science",
    imgSrc: "./School.jpeg",
    education: "Muhammad Ali Jauhaur Academy",
    year: "2017-2019",
  },
  {
    institute: "Intermediate in Pre-Engineering",
    imgSrc: "./College.jpeg",
    education: "Government Degree College Stadium Road , SRE MAJEED",
    year: "2019-2021",
  },
  {
    institute: "Bachlor's in Computer science (BSCS)",
    imgSrc: "./University.png",
    education: "Iqra Univerity",
    year: "2023-2027",
  },
];
let Education = () => {
  return (
    <section className="py-0 pt-20" id="education">
      <div className="container mx-auto px-4">
        <h2 className="headline-2 mb-8">Education Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {educations.map(({ institute, imgSrc, education, year }, key) => (
            <EducationCard
              key={key}
              institute={institute}
              imgSrc={imgSrc}
              education={education}
              year={year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
