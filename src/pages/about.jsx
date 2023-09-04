import React from "react";
import Strings from "../utils/strings";
import Header from "../components/header";

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-1 to-purple-2 min-w-screen">


      <section id="section1" className="flex">
        <div className='flex-col flex'>
          <Header />
          <div className="flex flex-row px-10">
            <div className="w-2/3 border-r-2 border-grey">
              <h2 className="font-roboto text-white text-4xl">{Strings.whyHelloThere}</h2>
              <p className="font-roboto text-white pt-[10px] w-3/4 whitespace-pre-wrap">
                {Strings.aboutPara}
              </p>
            </div>
            <div className="bg-white p-[10px] rounded-md drop-shadow-md ml-10">
              <img src={require('../assets/me.jpg')} className="h-96" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About;