import React, { useEffect, useState } from "react";
import Strings from "../utils/strings";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`flex flex-row px-[18px] md:px-[25px] items-center justify-between sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-normal-white/2 backdrop-blur-lg' : 'bg-normal-white/2'}`}>
      <a href="/" >
        <img src={require('../assets/logo.PNG')} className="h-12 w-12" alt="logo" />
      </a>
      <nav className="font-bold font-roboto">
        <ul className="flex items-center justify-content">
          <li><a className="text-white font-roboto mr-[20px] hover:text-gray-border" href="/resume">{Strings.resume}</a></li>
          <li><a className="text-white font-roboto mr-[20px] hover:text-gray-border" href="/#skills">{Strings.skills}</a></li>
          <li><a className="text-white font-roboto mr-[20px] hover:text-gray-border" href="/#projects">{Strings.projects}</a></li>
          <li><a className="text-white font-roboto mr-[20px] hover:text-gray-border" href="/about">{Strings.about}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
