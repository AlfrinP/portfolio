import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { work } from '../../data';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <div
      id="work"
      className="w-full font-primary flex flex-col items-center justify-center px-5 sm:px-8 md:px-11 lg:px-14 py-16 bg-white text-black"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-[#2F1C6A]">
          Featured Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {work.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  width={600}
                  height={400}
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={item.title}
                />
                
                {/* Hover Overlay with Buttons */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-full p-4 hover:scale-110 transition-transform duration-200"
                    aria-label="View GitHub repository"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-gray-900" />
                  </Link>
                  <Link
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-full p-4 hover:scale-110 transition-transform duration-200"
                    aria-label="View live demo"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-6 h-6 text-gray-900" />
                  </Link>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#2F1C6A] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.shortDescription}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tech_stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
