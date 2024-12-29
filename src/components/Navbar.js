import React from "react";

function Navbar() {
  return (
    <nav className="bg-cream py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-4xl font-serif text-navy tracking-wide">
          Portfolio
        </h1>
        <ul className="flex space-x-8 text-lg font-sans text-navy">
          <li className="hover:text-orange">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-orange">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-orange">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
