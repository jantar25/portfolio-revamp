import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './Components/NotificationProvider';

import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
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
      <div className="px-4 md:px-8 max-w-screen-1/2xl mx-auto">
        <NotificationProvider position="top-right">
          <Router>
            <ScrollToTop />
            <Header isScrolled={scroll} />
            <main className="mt-20 md:mb-32">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </NotificationProvider>
      </div>
    </div>
  )
}

export default App
