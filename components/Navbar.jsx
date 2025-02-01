'use client';
import React, { useState } from 'react';
import close from '../public/images/close.svg';
import burger from '../public/images/burger-menu.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { links } from '@/data';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <header className="navbar font-primary bg-white text-black z-50 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            {click ? (
              <>
                <div tabIndex="0" className="btn btn-ghost lg:hidden" onClick={handleClick}>
                  <Image
                    alt="image"
                    width={50}
                    height={50}
                    src={close}
                    className="w-8 object-contain"
                  />
                </div>
                <ul className="menu menu-sm text-primary bg-white border-2 border-primary dropdown-content mt-3 z-[1] md:p-2 shadow rounded-box md:w-52">
                  <li>
                    <Link
                      href="#hero"
                      onClick={handleClick}
                      className="link link-hover btn btn-ghost hover:bg-transparent font-semibold text-lg"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#work"
                      onClick={handleClick}
                      className="link link-hover btn btn-ghost hover:bg-transparent font-semibold text-lg"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#exp"
                      onClick={handleClick}
                      className="link link-hover btn btn-ghost hover:bg-transparent font-semibold text-lg"
                    >
                      Experience
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <div tabIndex="0" className="btn btn-ghost lg:hidden" onClick={handleClick}>
                <Image
                  alt="image"
                  width={50}
                  height={50}
                  src={burger}
                  className="w-8 object-contain"
                />
              </div>
            )}
          </div>
          <Link href="#hero" className="btn btn-ghost text-xl capitalize hidden lg:center">
            Alfrin Poulose
          </Link>
        </div>
        <div className="navbar-end w-full">
          <div className="center gap-5 hidden lg:block">
            <Link
              href="#hero"
              className="link link-hover btn btn-ghost hover:bg-transparent font-semibold text-lg"
            >
              About
            </Link>
            <Link
              href="#work"
              className="link link-hover btn btn-ghost hover:bg-transparent font-semibold text-lg"
            >
              Work
            </Link>
            <Link
              href="#exp"
              className="link link-hover btn btn-ghost hover:bg-transparent font-semibold text-lg"
            >
              Experience
            </Link>
          </div>
          <Link
            href={links.linkedin}
            target="/"
            className="btn btn-ghost text-xl text-primary capitalize underline hover:bg-primary hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </Link>
          <Link
            href={links.github}
            target="/"
            className="btn btn-ghost text-xl text-primary capitalize underline hover:bg-primary hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </Link>
          <Link
            href={links.resume}
            target="/"
            className="btn btn-ghost text-xl text-primary capitalize underline hover:bg-primary hover:text-white"
          >
            Resume
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
