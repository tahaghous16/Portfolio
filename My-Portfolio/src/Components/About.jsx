let About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="headline-2 mb-8 mt-4 text-center md:text-left">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-zinc-800/50 p-7 rounded-2xl">
          {/* Right Side - Image (visually right on desktop) */}
          <div className="w-full md:w-1/2">
            <img
              src="/hero.jpg" // make sure this path is correct (from public folder)
              alt="Taha Ghous"
              className="rounded-xl w-full object-cover"
            />
          </div>

          {/* Left Side - About Text */}
          <div className="w-full md:w-2/3">
            <p className="text-zinc-400 mb-4 md:text-base max-w-[70ch]">
              Hi, I'm <strong>Taha Ghous</strong>, a Computer Science student
              and a passionate front-end developer on the path to becoming a
              full-stack web developer. My core expertise lies in{" "}
              <strong>JavaScript</strong>, <strong>React.js</strong>, and modern
              UI frameworks like <strong>Tailwind CSS</strong> and{" "}
              <strong>Bootstrap</strong>, where I focus on building clean,
              responsive, and user-centric interfaces.
              <br />
              <br />
              Recently, I've stepped into full-stack development by learning the{" "}
              <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js)
              and diving deeper into <strong>Next.js</strong> for building
              server-rendered and scalable web applications. I'm building
              real-world projects that combine both front-end and back-end,
              allowing me to understand the complete development lifecycle.
              <br />
              <br />
              I'm committed to growing my skills in web technologies and gaining
              deeper experience in creating scalable, secure, and full-featured
              web applications. Outside of coding, I enjoy{" "}
              <strong>cricket</strong>, <strong>video games</strong>, and
              exploring new tools and trends in tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
