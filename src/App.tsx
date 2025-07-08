import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Footer from './Components/Footer';

const App:React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="font-sans bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto">
        <Router>
          <Header isScrolled={scroll} />
          <div className="mt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App
