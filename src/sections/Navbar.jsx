import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a
            href={href}
            className="nav-li_a hover:text-xl transition-all duration-1000 "
            onClick={() => {}}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-5 mx-auto c-space ">
          <a
            href="/"
            className="text-neutral-400 hover:text-white font-bold text-xl transition-colors "
          >
            <img
              src="/assets/FAIZI_LOGO.webp"
              alt="Image not found"
              className="w-10 h-10 sm:w-14 sm:h-14  md:w-20 md:h-20 md:hover:w-24 md:hover:h-24 rounded-lg
                transition-all"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none 
          sm:hidden flex"
            aria-label="toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : `assets/menu.svg`}
              alt="toggle"
              className="w-4 h-4 transition-all sm:w-5 sm:h-5 md:w-6 md:h-6 md:hover:w-7 md:hover:h-7"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}  `}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
