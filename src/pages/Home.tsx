import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { dataSkills, languages, frameworksLabraries, tools } from '../constant/dataSkills'
import { Slider } from '../Components/Slider'
import SliderItem from '../Components/SliderItem'
import BackgroundAnimation from '../Components/Annimations/BackgroundAnimation'
import meImg from '../assets/images/me.png'

const Home: React.FC = () => {
const location = useLocation();

  useEffect(() => {
  if (location.hash === '#about') {
    const section = document.querySelector('#about');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}, [location]);

  return (
    <div className='min-h-screen'>
      <div className="mt-20 md:mt-32">
        <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-bold ">
          Hi 👋 !
          <br /> 
          I am Gloire Bulambo,
          <br />
          a software engineer.
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-text-light_extension dark:text-text-dark_extension">
          I am passionate about creating efficient and scalable software solutions that solve real-world problems. 
          <br />
          Feel free to explore my work and get in touch if you have any questions or opportunities for collaboration!
        </p>
      </div>
      <div className="relative flex justify-center items-center mt-12 border dark:border-lines-dark border-lines-light
        dark:bg-background-dark_extension bg-background-light_extension rounded-3xl shadow-md">
        <img className='z-10 w-full h-full md:max-w-lg lg:h-full object-contain' src={meImg} alt="me" />
        <div className='absolute w-full md:w-3/5 lg:w-2/5 top-0 right-auto left-auto'>
          <BackgroundAnimation/>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-8" id="about">About Me</h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              A little bit about me
            </h2>
            <p className="text-sm md:text-md text-text-light_extension dark:text-text-dark_extension">
              I am a software engineer with a passion for building innovative solutions.
              <br />
              I have experience in various programming languages and frameworks, and I love tackling complex challenges.
              In my free time, I enjoy contributing to open-source projects and exploring new technologies.
            </p>
            <div className="w-full max-w-xl mx-auto space-y-4 mt-8">
              {dataSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xl font-medium text-text-light_extension dark:text-text-dark_extension">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-primary-default">
                      {skill.rate}%
                    </span>
                  </div>
                  <div className="w-full bg-text-light_extension dark:bg-text-dark_extension rounded-full h-2">
                    <div
                      className="bg-primary-default h-2 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col space-y-4">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-xl font-medium mb-2">Languages</h2>
                <div className="w-full max-w-5xl mx-auto">
                <Slider
                  items={languages}
                  renderItem={(item) => <SliderItem name={item.name} icon={item.icon} />}
                />
              </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-xl font-medium mb-2">Frameworks & Libraries</h2>
                <div className="w-full max-w-5xl mx-auto">
                <Slider
                  items={frameworksLabraries}
                  renderItem={(item) => <SliderItem name={item.name} icon={item.icon} />}
                />
              </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-xl font-medium mb-2">Tools</h2>
                <div className="w-full max-w-5xl mx-auto">
                <Slider
                  items={tools}
                  renderItem={(item) => <SliderItem name={item.name} icon={item.icon} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home