import React from "react";
import Strings from "../utils/strings";
import Header from "../components/header";
import AboutConfig from "../config/aboutConfig";
import Contact from "../components/contact";

const About = () => {

  const renderGridItem = (item, index) => {

    let borderRL = (index == 1 || index == 4) ? "md:border-r md:border-l" : "";
    let borderB = index < 3 ? "" : "md:border-b-0";

    return (
      <div
        key={index}
        className={"text-center md:w-1/3 mx-10 md:mx-0 p-4 border-gray-300 border-b " + borderRL + " " + borderB}
      >
        <p className="font-roboto font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-1 to-purple-2">{item.key}</p>
        <p>{item.value}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <section id="section1" className="w-full md:h-screen bg-gradient-to-r from-purple-1 to-purple-2 min-w-screen">
        <div className='md:min-h-screen flex-col flex flex-1'>
          <Header />
          <div className="flex flex-col md:flex-row px-10 md:items-center md:justify-center flex-1 transition ease-in-out delay-1500 py-10">
            <div className="md:w-2/3 border-r-0 md:border-r-2 border-grey">
              <h2 className="font-roboto text-white text-4xl">{Strings.whyHelloThere}</h2>
              <p className="font-roboto text-white pt-[10px] md:w-3/4 whitespace-pre-wrap">
                {Strings.aboutPara}
              </p>
            </div>
            <div className="self-center bg-white p-[2.5px] md:p-[10px] rounded-full w-32 md:w-auto md:rounded-md drop-shadow-md ml-0 md:ml-10">
              <img src={require('../assets/me.jpg')} className="h-32 w-32 md:w-auto rounded-full md:rounded md:h-96" />
            </div>
          </div>
        </div>
      </section>
      <section id="section2" className="w-full h-3/4 min-w-screen">
        <div className="flex flex-wrap flex-col md:flex-row md:px-10 py-[50px]">
          {AboutConfig.map((item, index) => renderGridItem(item, index))}
        </div>
      </section>
      <section id="section3" className="">
        <Contact/>
      </section>
    </div>
  )
}

export default About;