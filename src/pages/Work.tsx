import React from 'react'

import { ProjectData } from '../constant/dataWork'
import ProjectCard from '../Components/ProjectCard'
import GetConnected from '../Components/GetConnected'

const Work: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mt-20 md:mt-32 mb-12">
        <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-bold">
          My Work
        </h1>
        <p className="w-full lg:w-1/2 text-lg md:text-2xl mt-4 text-text-light_extension dark:text-text-dark_extension">
          Here are some of the projects I have worked on. Feel free to explore and reach out if you have any questions or feedback!
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {ProjectData.map((project) => 
          <ProjectCard key={project.id} {...project} />
        )}
      </div>
      <GetConnected />
    </div>
  )
}

export default Work