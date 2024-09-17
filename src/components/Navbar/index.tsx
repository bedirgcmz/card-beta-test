import React from "react";

const Navbar = () => {
  return (
    <nav className="p-6">
      <ul className="flex justify-center items-center gap-3 text-2xl">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
