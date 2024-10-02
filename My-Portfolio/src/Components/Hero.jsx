import { ButtonOutline, ButtonPrimary } from "./Button";
let Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="./Taha pic.jpg"
                alt="Hero Section"
                height={40}
                width={40}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className=" headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Responsive Frontend React Developer.
          </h2>

          <div
            className="flex items-center gap-3
          "
          >
            <ButtonPrimary
              label="Resume"
              icon="download"
              href="./Resume.pdf"
              download={true}
            />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg bg-gradient-to-t from-rose-200 via-25% via-rose-200/40 to-65% rounded-[50px] overflow-hidden">
            <img
              src="./HeroSectionPic.png"
              alt="Hero Section Pic"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
