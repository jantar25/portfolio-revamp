import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
const location = useLocation();

  useEffect(() => {
  if (location.hash === '#about') {
    const section = document.querySelector('#about');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}, [location]);

  return (
    <div className='min-h-screen'>Home</div>
  )
}

export default Home