import { experience } from '@/data';
import React from 'react';

function Experience() {
  return (
    <div
      id="exp"
      className="w-full py-10 font-primary flex flex-col items-center justify-center gap-1 px-5 sm:px-8 md:px-11 lg:px-14 bg-white text-black"
    >
      <span className="w-full text-left text-4xl font-bold py-10 text-[#2F1C6A]">
        MY EXPERIENCE
      </span>
      <div className="flex items-center flex-col md:flex-row w-full h-full justify-center">
        <div className=" hidden md:flex h-full w-1/2 p-5 center"></div>
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-start px-5 py-3 gap-5">
          {experience.map((item, index) => (
            <div
              className="w-full h-fit flex flex-col items-start pb-5 justify-center gap-2"
              key={index}
            >
              <div className="flex items-center w-full justify-between">
                <div className="text-2xl  text-[#2F1C6A] font-semibold text-left">
                  {item.position}
                </div>
                <div className="text-lg  text-[#404041] text-right">{item.date}</div>
              </div>
              <div className="text-xl font-semibold">{item.company}</div>
              <p className="text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
