import React from 'react'

import DarkModeToggle from './DarkModeToggle'
import logo from '../assets/images/logo.png'

interface HeaderProps {
  isScrolled: boolean
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <div
      className={`sticky top-4 left-0 right-0 w-full p-2 z-50 rounded-full border dark:border-lines-dark border-lines-light
        dark:bg-background-dark_extension bg-background-light_extension shadow-md ${
        isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-none'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-16 w-16 inline-block" />
          <h1 className="hidden md:block text-4xl font-medium">
            Gloire
            <span className="text-text-light_extension dark:text-text-dark_extension ml-2">Bulambo</span>
          </h1>
        </div>
        <div className="flex items-center space-x-16">
          <div className="">Navigation</div>
          <div className="flex items-center space-x-2">
            <DarkModeToggle />
            <button className="">
              Download CV
            </button>
            <button className="">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header