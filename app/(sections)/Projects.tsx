import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { work } from '../../data';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  return (
    <div
      id="work"
      className="w-full font-primary flex flex-col items-center justify-center gap-1 px-5 sm:px-8 md:px-11 lg:px-14 bg-white text-black"
    >
      <span className="w-full text-left text-4xl font-bold py-10 text-[#2F1C6A]">
        Featured Works
      </span>
      {work.map((item, index) => (
        <div className="center flex-col lg:flex-row h-fit" key={index}>
          <div className="h-full w-full lg:w-1/2 p-5 flex items-center justify-center">
            <div className="mockup-browser border bg-base-300 w-full h-full">
              <div className="mockup-browser-toolbar text-white">
                <div className="input">{item.demo ? item.demo : item.github}</div>
              </div>
              <div className="flex justify-center bg-base-200">
                <Image
                  width={50}
                  height={50}
                  src={item.img}
                  className="block w-full h-full aspect-auto object-contain"
                  alt={item.title}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-center px-5 py-3 gap-4">
            <h2 className="text-3xl font-semibold text-[#2F1C6A]">{item.title}</h2>
            <p className="text-left">{item.description}</p>
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <h2 className="w-full text-left font-semibold">PROJECT INFO</h2>
              <hr className="w-full" />
              <div className="flex items-center w-full justify-between px-2">
                <div>Tech</div>
                <ul className="flex items-center justify-end w-full flex-wrap gap-2">
                  {item.tech_stack.map((techItem, index) => {
                    return (
                      <li
                        key={index}
                        className="w-fit px-2 border-2 border-black rounded-lg text-[#2E2E48]"
                      >
                        {techItem}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <hr className="w-full" />
              <div className="flex items-center w-full justify-between px-2">
                <div>Year</div>
                <div>{item.year}</div>
              </div>
              <hr className="w-full" />
            </div>
            <div className="w-full center flex-wrap gap-3">
              <Link
                href={item.demo}
                target="/"
                className="text-[#2F1C6A] font-primary text-sm sm:text-base md:text-lg lg:text-xl btn btn-link"
              >
                LIVE DEMO🡭
              </Link>
              <Link
                href={item.github}
                target="/"
                className="text-[#2F1C6A] font-primary text-sm sm:text-base md:text-lg lg:text-xl btn btn-link center gap-2"
              >
                SEE ON GITHUB <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="center flex-col lg:flex-row h-fit">
        <div className="h-full w-full lg:w-1/2 p-5 flex items-center justify-center">
          <Image alt="image" width={50} height={50}
            src={project}
            className="rounded-lg homeButton block w-full h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-center px-5 py-3 gap-4">
          <h2 className="text-3xl font-semibold text-[#2F1C6A]">Project 1</h2>
          <p className="text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            commodi id hic iure, illo sunt laborum nesciunt placeat totam
            pariatur eligendi aliquid eveniet, necessitatibus facilis assumenda
            facere aliquam saepe deserunt.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <h2 className="w-full text-left font-semibold">PROJECT INFO</h2>
            <hr className="w-full" />
            <div className="flex items-center w-full justify-between px-2">
              <div>Tech</div>
              <ul className="flex items-center justify-end w-full flex-wrap gap-2">
                <li className="w-fit px-2 border-2 border-black rounded-lg text-[#2E2E48]">
                  HTML
                </li>
                <li className="w-fit px-2 border-2 border-black rounded-lg text-[#2E2E48]">
                  HTML
                </li>
                <li className="w-fit px-2 border-2 border-black rounded-lg text-[#2E2E48]">
                  HTML
                </li>
                <li className="w-fit px-2 border-2 border-black rounded-lg text-[#2E2E48]">
                  HTML
                </li>
              </ul>
            </div>
            <hr className="w-full" />
            <div className="flex items-center w-full justify-between px-2">
              <div>Year</div>
              <div>2023</div>
            </div>
            <hr className="w-full" />
          </div>
          <div className="w-full center flex-wrap gap-3">
            <div className="text-[#2F1C6A] font-primary text-sm sm:text-base md:text-lg lg:text-xl btn btn-link">
              LIVE DEMO🡭
            </div>
            <div className="text-[#2F1C6A] font-primary text-sm sm:text-base md:text-lg lg:text-xl btn btn-link center gap-2">
              SEE ON GITHUB <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
