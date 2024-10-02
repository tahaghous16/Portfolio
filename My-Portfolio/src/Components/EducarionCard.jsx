import PropTypes from "prop-types";
let EducationCard = ({ institute, imgSrc, education, year }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl shadow-md  hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors">
      <div className="flex flex-col items-center gap-4">
        <figure className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={imgSrc}
            alt={institute}
            className="object-contain w-full h-full"
          />
        </figure>
        <div className="">
          <p className="text-zinc-400 text-lg text-center ">{education}</p>
          <p className="text-zinc-300 text-sm text-center mt-3">{year}</p>
          <p className="text-zinc-200 text-sm text-center">{institute}</p>
        </div>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  institute: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default EducationCard;
