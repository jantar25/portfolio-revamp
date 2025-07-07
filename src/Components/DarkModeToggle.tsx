import React, { useEffect, useState } from 'react'

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
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}

export default DarkModeToggle