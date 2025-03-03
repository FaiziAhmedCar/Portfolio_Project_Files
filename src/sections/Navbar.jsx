import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-5 mx-auto c-space ">
          <a
            href="/"
            className="text-neutral-400 hover:text-white font-bold text-xl transition-colors "
          >
            <img
              src="./src/assets/FAIZI_LOGO.webp"
              alt="Image not found"
              className="w-20 h-20 rounded-full"
            />
            Fao
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
