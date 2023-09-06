import React, { useEffect, useState } from "react";
import Strings from "../utils/strings";

const Header = () => {

  return (
    <header className="flex flex-row px-5 items-center justify-between" >
      <a href="/personal-site" >
        <img src={require('../assets/logo.PNG')} className="h-12 w-12" />
      </a>
      <nav className="font-bold font-roboto" >
        <ul className="flex items-center justify-content">
          <li><a className="text-white font-roboto mr-[20px] hover:text-gray-border" href="/personal-site/#section2">{Strings.work}</a></li>
          <li><a className="text-white font-roboto mr-[20px] hover:text-gray-border" href="/personal-site/about">{Strings.about}</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header