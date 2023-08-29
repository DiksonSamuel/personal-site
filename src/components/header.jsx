import React, { useEffect, useState } from "react";
import Strings from "../utils/strings";

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className="sticky-header bg-gradient-to-r from-purple-1 from-opacity-70 to-purple-2 via-opacity-70" >
      <nav >
        <ul >
          <li ><a className="text-white font-roboto" href="#section1" >{Strings.home}</a></li>
          <li><a className="text-white" href="#section2">{Strings.work}</a></li>
          <li><a className="text-white" href="#section3">{Strings.contact}</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header