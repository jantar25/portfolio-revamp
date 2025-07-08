import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdArrowOutward, MdOutlineMenu, MdClose, MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

import useDarkMode from '../hooks/useDarkMode';
import logo from '../assets/images/logo.png'

interface HeaderProps {
  isScrolled: boolean
}

const socialLinks : {name:string, url:string} [] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bulambo-mwendelwa-gloire' },
  { name: 'GitHub', url: 'https://github.com/jantar25'},
  { name: 'Medium', url: 'https://bulambogloire.medium.com/'},
];

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const activationClass = 'border dark:border-lines-dark border-lines-light dark:bg-background-dark_extension bg-background-light_extension shadow-md';

  return (
    <header
      className={`sticky top-4 left-0 right-0 w-full p-2 z-50 ${isMenuOpen? 'rounded-3xl' : 'rounded-full'} border dark:border-lines-dark border-lines-light
        dark:bg-background-dark_extension bg-background-light_extension shadow-md ${
        isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-none'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="h-12 w-12">
            <img src={logo} alt="Logo" className="h-full w-full inline-block" />
          </Link>
          <h1 className="hidden md:block text-3xl font-medium">
            Gloire
            <span className="text-text-light_extension dark:text-text-dark_extension ml-2">Bulambo</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {!isMenuOpen && (
            <nav className="hidden sm:flex justify-between items-center border dark:border-lines-dark border-lines-light rounded-full p-1 shadow-md
            dark:bg-background-dark_extension bg-background-light_extension">
              <ul className="flex item-center gap-4 text-md font-medium text-text-light_extension dark:text-text-dark_extension">
                <NavLink to="/#about" className={({ isActive }) =>`px-6 py-3 rounded-full ${
                  isActive ? activationClass : ''}`}>
                  About
                </NavLink>
                <NavLink to="/work" className={({ isActive }) => `px-6 py-3 rounded-full ${
                    isActive ? activationClass : ''
                  }`
                }>Work</NavLink>
                <NavLink to="/blog" className={({ isActive }) => `px-6 py-3 rounded-full ${
                    isActive ? activationClass : ''
                  }`
                }>Blog</NavLink>
              </ul>
            </nav>
          )}
          <button
            className="xl:hidden rounded-full border dark:border-lines-dark border-lines-light
            dark:bg-background-dark_extension bg-background-light_extension shadow-md hover:bg-primary-default hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ?
              <MdOutlineMenu className="text-5xl p-2" /> :
              <MdClose className="text-5xl p-2" />
            }
          </button>
          <div className="hidden xl:flex items-center gap-8 mr-4">
            <button
              onClick={toggleDarkMode}
              className="w-[40px] h-[40px] rounded-full border dark:border-lines-dark border-lines-light flex items-center justify-center text-2xl
                transition-all duration-300"
            >
              {darkMode ? <MdOutlineWbSunny /> : <IoMoonOutline />}
            </button>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 text-xl font-medium hover:text-primary-default">
                <span className="">Download CV</span>
                <MdArrowOutward />
              </button>
              <Link to="contact" className="flex items-center gap-1 text-xl font-medium hover:text-primary-default">
                <span className="">Contact Me</span>
                <MdArrowOutward />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="xl:hidden mt-4 px-8 md:px-16">
          <div className="flex flex-wrap items-start gap-8">
            <div className="">
              <h2 className="text-sm mb-4">Menu</h2>
              <nav className="">
                <ul className="flex flex-col items-start justify-between text-xl md:text-2xl font-medium">
                  <NavLink to="/#about" className={({ isActive }) => `${isActive ? "text-primary-default" : ''}`}>About</NavLink>
                  <NavLink to="/work" className={({ isActive }) => `${isActive ? "text-primary-default" : ''}`}>Work</NavLink>
                  <NavLink to="/blog" className={({ isActive }) => `${isActive ? "text-primary-default" : ''}`}>Blog</NavLink>
                  <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-primary-default" : ''}`}>Contact Me</NavLink>
                </ul>
              </nav>
            </div>
            <div className="">
              <h2 className="text-sm mb-4">Socials</h2>
              <nav className="">
                <ul className="flex flex-col items-start text-xl md:text-2xl font-medium">
                  {socialLinks.map((link) => (
                    <li key={link.name} className="mb-2">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary-default"
                      >
                        {link.name}
                        <MdArrowOutward />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <hr className="border dark:border-lines-dark border-lines-light my-8" />
          <div className="inline-block mb-8">
            <div className="flex items-center justify-start gap-4 border dark:border-lines-dark border-lines-light rounded-full p-1 shadow-md
              dark:bg-background-dark_extension bg-background-light_extension">
              <button className="font-medium px-6 py-3 rounded-full dark:bg-background-light dark:text-text-light" onClick={toggleDarkMode}>
                Dark
              </button>
              <button className="font-medium px-6 py-3 rounded-full bg-background-dark text-text-dark dark:bg-background-transparent" onClick={toggleDarkMode}>
                Light
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header