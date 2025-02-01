import React from 'react';
import Marquee from 'react-fast-marquee';
import { tech } from '../../data';
import Image from 'next/image';

function TechStack() {
  return (
    <div className="bg-white text-black font-primary  py-10 center flex-col gap-1">
      <span className="text-center text-3xl sm:text-4xl md:text-5xl font-bold py-10 text-[#2F1C6A]">
        My Tech Stack
      </span>
      <Marquee
        style={{ width: '98vw' }}
        speed={100}
        pauseOnHover
        gradient={'white'}
        className="overflow-clip cursor-pointer"
      >
        {tech.map((item, index) => (
          <div className="center gap-2" key={index}>
            <Image alt="image" width={50} height={50} src={item.img} className="block w-10" />
            <span className="text-2xl sm:text-3xl md:text-4xl mr-10 capitalize">{item.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default TechStack;
