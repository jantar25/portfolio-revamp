import React from 'react'
import { MdArrowOutward } from "react-icons/md";

import { socialLinks } from '../constant/dataLinks';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex flex-col items-center md:items-start">
        <p className="text-xl md:text-4xl mb-4 text-text-light_extension dark:text-text-dark_extension">Connect with me</p>
        <div className="w-full flex flex-col 2xl:flex-row items-center justify-between md:items-start 2xl:items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-medium mb-2">
              <a href="mailto:glodybulambo@gmail.com" className="">
                glodybulambo@gmail.com
              </a>
            </p>
            <p className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-medium mb-2">
              <a href="tel:+250786120934" className="">
                +250 786 120 934
              </a>
            </p>
          </div>
          <a
            href="https://docs.google.com/document/d/1mXQ-S5y_iguZ4-uz6JzCLx9_tMcyCNIxlMS1ZAA1SEg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-2xl md:text-3xl font-medium text-primary-default"
          >
            <span className="">Download CV</span>
            <MdArrowOutward />
          </a>
        </div>
      </div>
      <hr className="border dark:border-lines-dark border-lines-light my-8 lg:my-16" />
      <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center pb-8 gap-4">
        <div className="flex items-center justify-center gap-4 rounded-full p-1">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl md:text-3xl font-medium text-text-light_extension dark:text-text-dark_extension hover:text-primary-default"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className="text-sm text-text-light_extension dark:text-text-dark_extension">
          © {new Date().getFullYear()} Gloire Bulambo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer