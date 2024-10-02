import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

let Navbar = ({ navOpen }) => {
  let lastActiveLink = useRef();
  let activeBox = useRef();

  let initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";

    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";

    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";

    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  let activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";

    activeBox.current.style.left = event.target.offsetLeft + "px";

    activeBox.current.style.width = event.target.offsetWidth + "px";

    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  let navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Education",
      link: "#education",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <>
      <nav className={"navbar " + (navOpen ? "active " : "")}>
        {navItems.map(({ label, link, className, ref }, key) => (
          <a
            href={link}
            className={className}
            key={key}
            ref={ref}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ))}

        <div className="active-box" ref={activeBox}></div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
export default Navbar;
