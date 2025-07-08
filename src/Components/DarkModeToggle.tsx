import React, { useEffect, useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() =>
    localStorage.getItem('theme') === 'dark'
  );

    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-[40px] h-[40px] rounded-full border dark:border-lines-dark border-lines-light flex items-center justify-center text-2xl
        transition-all duration-300"
    >
      {darkMode ? <MdOutlineWbSunny /> : <IoMoonOutline />}
    </button>
  )
}

export default DarkModeToggle