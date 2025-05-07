import PropTypes from "prop-types";

let ProjectCard = ({ imgSrc, title, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors w-full max-w-[90vw] sm:max-w-none " +
        classes
      }
    >
      <figure className="w-full h-auto aspect-square rounded-lg mb-3 sm:mb-4 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>

      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
            {title}
          </h3>
        </div>
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg grid place-items-center bg-zinc-400 text-zinc-900 shrink-0 hover:bg-zinc-500 active:bg-zinc-600 transition">
          <span
            className="material-symbols-rounded text-lg sm:text-xl"
            aria-hidden="true"
          >
            arrow_outward
          </span>
        </div>
      </div>
      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
      ></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
