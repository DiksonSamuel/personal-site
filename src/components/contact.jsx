import React from "react";
import Strings from "../utils/strings";
import { CallOutlined, EmailOutlined } from "@mui/icons-material";

const Contact = () => {
  return(
    <div className="w-full h-64 bg-gradient-to-r from-purple-1 to-purple-2 min-w-screen relative">
      <img src={require('../assets/dotted.png')} />
      <div className="">
      <h2 className="text-white font-roboto text-4xl text-[25px] font-bold">{Strings.name}</h2>
      <div className="text-white flex-row flex text-xs items-center font-roboto mt-[5px]">
        <EmailOutlined fontSize="12" />
        <p className="ml-2.5">{Strings.emailId}</p>
      </div>
      <div className="text-white flex-row flex text-xs items-center font-roboto">
        <CallOutlined fontSize="12" />
        <p className="ml-2.5">{Strings.number}</p>
      </div>
      <div className="text-white text-sm my-[20px]">
        <a href="" target="_blank" className="pr-[24px]">{Strings.linkedin}</a>
        <a href="" target="_blank" className="pr-[24px]">{Strings.twitter}</a>
        <a href="" target="_blank" className="pr-[24px]">{Strings.github}</a>
      </div>
    </div>
    </div>
    
  )
}

export default Contact;