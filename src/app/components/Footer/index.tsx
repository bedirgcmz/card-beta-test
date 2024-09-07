import React from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

type MyFooterProps = {
  navLinks: { name: string; href: string }[];
  socialLinks: { name: string; href: string }[];
};

const MyFooter: React.FC<MyFooterProps> = ({ navLinks, socialLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" flex flex-col justify-center items-center bg-gray-800 text-white p-4">
      <p className="italic">Copyright Edwin Andermyr {currentYear}</p>

      <nav className="mt-4">
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-4 flex space-x-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.name}
            className="text-white hover:text-gray-400"
          >
            {link.name === "Instagram" && <FaInstagram />}
            {link.name === "Github" && <FaGithub />}
            {link.name === "Twitter" && <FaTwitter />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyFooter;
