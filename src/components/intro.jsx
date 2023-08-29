import React from "react";
import Strings from "../utils/strings";
import Typewriter from 'typewriter-effect';


const Intro = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-1 to-purple-2 min-w-screen">
      <div className="whitespace-pre-wrap text-white text-4xl font-roboto min-w-screen font-bold justify-center items-center flex-col mt-40 mx-[10px] md:mx-[40px] flex-wrap ">
        <Typewriter

          onInit={(typewriter) => {
            typewriter
              .typeString(Strings.introLine1)
              .start();
          }}
        />
        {/* <h1 className="text-white text-4xl font-roboto min-w-screen font-bold">
          {Strings.introLine1}<br></br>
          {Strings.introLine2}
        </h1> */}
        <div className="paragragh-xl text-[25px] py-5 font-roboto text-white">
          {Strings.introPara1}
        </div>
        <div className="paragragh-xl text-[25px] py-5 font-roboto text-white">
          {Strings.introPara2}
        </div>
      </div>
    </div>
  )
}

export default Intro;

