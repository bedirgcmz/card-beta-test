import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface FooterProps {
  navLinks: { name: string; href: string }[];
  socialLinks: { name: string; href: string }[];
}

const Footer: React.FC<FooterProps> = ({ navLinks, socialLinks }) => {
  return (
    <footer className="flex flex-col gap-6 justify-center w-screen py-4 bg-[#669bbc] mt-auto">
      <div className="flex justify-evenly items-center">
        <ul className="flex justify-around items-center gap-5">
          {navLinks.map((link, index) => (
            <li className="hover:text-[#8ecae6]" key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <ul className="flex justify-around items-center gap-5">
          {socialLinks.map((link, index) => (
            <li data-testid="social-icon" className="hover:text-[#8ecae6] " key={index}>
              <a href={link.href}>
                {link.name == "Instagram" && <FaInstagram />}
                {link.name == "Github" && <FaGithub />}
                {link.name == "Twitter" && <FaXTwitter />}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center">Copyright Edwin Andermyr</p>
    </footer>
  );
};

export default Footer;
