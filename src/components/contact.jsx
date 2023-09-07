import React from "react";
import Strings from "../utils/strings";
import { CallOutlined, EmailOutlined, Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Redirects from "../config/redirects";

const Contact = () => {
  return (
    <div className="w-full flex justify-center md:justify-between items-center h-64 bg-gradient-to-r from-purple-1 to-purple-2 min-w-screen relative">
      <img alt="dotted" className="hidden md:block h-[220px] w-[220px] ml-20" src={require('../assets/dotted.png')} />
      <div className="mr-0 md:mr-20">
        <h2 className="text-white font-roboto text-[40px] font-bold">{Strings.name}</h2>
        <div className="text-white flex-row flex text-base items-center font-roboto mt-[0px]">
          <EmailOutlined />
          <p className="ml-2.5">{Strings.emailId}</p>
        </div>
        <div className="text-white flex-row flex text-base items-center font-roboto">
          <CallOutlined />
          <p className="ml-2.5">{Strings.number}</p>
        </div>
        <div className="text-white text-sm my-[10px]">
          <a href={Redirects.linkedin} target="_blank" className="pr-[24px]">
            <LinkedIn />
          </a>
          <a href={Redirects.twitter} target="_blank" className="pr-[24px]">
            <Twitter />
          </a>
          <a href={Redirects.github} target="_blank" className="pr-[24px]">
            <GitHub />
          </a>
          <a href={Redirects.instagram} target="_blank" className="pr-[24px]">
            <Instagram />
          </a>
          <a href={Redirects.facebook} target="_blank" className="pr-[24px]">
            <Facebook />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Contact;