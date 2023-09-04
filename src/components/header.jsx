import React, { useEffect, useState } from "react";
import Strings from "../utils/strings";

const Header = () => {



  return (
    <header className="sticky-header bg-gradient-to-r from-purple-1 from-opacity-70 to-purple-2 via-opacity-70 flex flex-row px-5 items-center justify-between" >
      <img src={require('../assets/logo.PNG')} className="h-12 w-12" />
      <nav >
        <ul className="flex items-center justify-content">
          <li><a className="text-white font-roboto mr-[20px]" href="#section2">{Strings.work}</a></li>
          <li><a className="text-white font-roboto mr-[20px]" href="#section3">{Strings.contact}</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header