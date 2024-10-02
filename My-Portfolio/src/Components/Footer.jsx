import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/tahaghous16",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tahaghous2002/",
  },

  {
    label: "Instagram",
    href: "https://www.instagram.com/tahaghous__2002/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100021850350636",
  },
];

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-10 mt-7">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <nav className="flex flex-wrap justify-center mb-4">
            {sitemap.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-zinc-500 transition-colors hover:text-zinc-200 mx-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex justify-center mb-4">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-100 transition duration-300 mx-2"
              >
                {item.label === "GitHub" && <FaGithub size={20} />}
                {item.label === "LinkedIn" && <FaLinkedin size={20} />}
                {item.label === "Instagram" && <FaInstagram size={20} />}
                {item.label === "Facebook" && <FaFacebook size={20} />}
              </a>
            ))}
          </div>
          <p className="text-zinc-200 text-sm text-center">
            &copy; 2024 Taha Ghous. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
