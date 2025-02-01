import React from 'react';
import { links } from '@/data';
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-white h-[80px] flex items-center justify-center gap-3">
      <Link
        target="/"
        href={links.linkedin}
        className="text-[#2F1C6A] font-primary text-sm sm:text-base md:text-lg lg:text-xl btn btn-link"
      >
        LINKEDIN🡭
      </Link>
      <Link
        target="/"
        href={links.github}
        className="text-[#2F1C6A] font-primary text-sm sm:text-base md:text-lg lg:text-xl btn btn-link"
      >
        GITHUB🡭
      </Link>
      <Link
        target="/"
        href={links.hackerrank}
        className="text-[#2F1C6A] font-primary text-sm sm:text-base md:text-lg lg:text-xl btn btn-link"
      >
        HACKERRANK🡭
      </Link>
    </div>
  );
}

export default Footer;
