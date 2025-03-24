import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 ">
      <div className="text-white-500 gap-2 flex  ">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex  gap-3 ">
        <div className="social-icon  ">
          <a
            href="https://github.com/FaiziAhmedCar"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-3/5 h-3/5 hover:w-4/5 hover:h-4/5 transition-all"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/faizi-ahmed-b2680b28b/"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/linkedin.png"
              alt="linkedin"
              className="w-3/5 h-3/5 hover:w-4/5 hover:h-4/5 transition-all"
            />
          </a>
        </div>
      </div>
      <p className="text-white-500">© 2025 Faizi Ahmed. All rights reserved.</p>
    </section>
  );
};

export default Footer;
