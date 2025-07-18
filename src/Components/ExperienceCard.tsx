import React from 'react'

import type { Experience } from '../constant/dataExperiences'

const ExperienceCard:React.FC<Experience> = (experience) => {
  const { title, company, duration, description, technologies, mode, location, type } = experience;
  return (
    <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <div className="">
            <h3 className="text-2xl md:text-5xl font-semibold mb-2">{title}</h3>
            <p className="text-lg md:text-3xl text-primary-default font-medium mb-1">
                {company}
            </p>
          </div>
          <p className="text-xl lg:text-2xl 2xl:text-3xl">{duration}</p>
        </div>
        <p className="text-sm md:text-xl font-bold mb-2">
            {type} | {mode} | {location}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-sm lg:text-lg dark:bg-background-dark_extension bg-background-light_extension rounded-xl shadow-md font-medium px-2 lg:px-4 py-2">
              {tech}
            </span>
          ))}
        </div>
        <ul className="pl-6 mb-4 list-disc marker:text-primary-default marker:text-xl text-gray-700 dark:text-gray-300">
          {description.map((desc, index) => (
            <li
              key={index}
              className="text-sm md:text-lg"
            >
              {desc}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default ExperienceCard