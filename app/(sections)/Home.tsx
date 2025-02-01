import React from 'react';
import profile from '../../public/images/me.png';
import { links } from '../../data';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div
      id="hero"
      className="w-full min-h-fit pt-28 font-primary flex flex-col justify-center items-center gap-3 px-5 sm:px-8 md:px-11 lg:px-14 bg-white text-black"
    >
      <div className="flex flex-col gap-3 items-center text-center">
        <div className="text-xl sm:text-2xl md:text-4xl font-bold">
          Hello 👋🏻 <span className="p-1 bg-primary text-white">Alfrin</span> here, your dedicated{' '}
          <span className="text-primary">Full Stack Web & App developer</span>.
        </div>
        <div className=" text-sm sm:text-base md:text-xl font-medium">
          With a powerful laptop and a steaming cup of coffee, I turn challenges into solutions.
          Each line of code shapes the future, blending innovation with precision. Crafting
          tomorrow's possibilities, one problem at a time.
        </div>
        <Link
          className=" rounded-lg bg-primary text-lg lg:text-2xl  text-white mt-4 btn homeButton"
          href={links.freelance}
        >
          Hire Me!
        </Link>
        <Image src={profile} className="grayscale" alt="profile" />
      </div>
    </div>
  );
}

export default Home;
