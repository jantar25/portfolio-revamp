import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdArrowOutward, MdOutlineMenu } from "react-icons/md";

import DarkModeToggle from './DarkModeToggle'
import logo from '../assets/images/logo.png'

interface HeaderProps {
  isScrolled: boolean
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const activationClass = 'border dark:border-lines-dark border-lines-light dark:bg-background-dark_extension bg-background-light_extension shadow-md';

  return (
    <header
      className={`sticky top-4 left-0 right-0 w-full p-2 z-50 rounded-full border dark:border-lines-dark border-lines-light
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
          <button className="xl:hidden p-2 rounded-full border dark:border-lines-dark border-lines-light
            dark:bg-background-dark_extension bg-background-light_extension shadow-md hover:bg-primary-default hover:text-white">
            <MdOutlineMenu className="text-4xl" />
          </button>
          <div className="hidden xl:flex items-center gap-8 mr-4">
            <DarkModeToggle />
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 text-xl font-medium hover:text-primary-default">
                <span className="">Download CV</span>
                <MdArrowOutward />
              </button>
              <button className="flex items-center gap-1 text-xl font-medium hover:text-primary-default">
                <span className="">Contact Me</span>
                <MdArrowOutward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header