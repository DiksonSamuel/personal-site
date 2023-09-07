import React from "react";
import Strings from "../utils/strings";
import Typewriter from 'typewriter-effect';
import Lottie from "lottie-react";
import IntroAnime from '../lottie/introAnime.lottie';
import IntroAnime2 from '../lottie/animation_lm9bqz2f.json';

const Intro = () => {
  return (
    <div  className="flex flex-1 self-center items-center">
      <div className="whitespace-pre-wrap text-white text-4xl font-roboto min-w-screen font-bold justify-center items-center flex-col mx-[25px] md:mx-[40px] flex-wrap md:w-1/2">
        <Typewriter

          onInit={(typewriter) => {
            typewriter
              .typeString(Strings.introLine1)
              .start();
          }}
        />
        <div className="paragragh-xl text-[25px] py-5 font-roboto text-white">
          {Strings.introPara1}
        </div>
        <div className="paragragh-xl text-[25px] py-5 font-roboto text-white">
          {Strings.introPara2}
        </div>
      </div>
      <div className="hidden md:block">
        <Lottie  animationData={IntroAnime2} />;
      </div>
     
    </div>
  )
}

export default Intro;

