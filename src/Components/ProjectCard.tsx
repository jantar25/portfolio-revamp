import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { TbCancel } from "react-icons/tb";

import type { Project } from '../constant/dataWork'

const ProjectCard: React.FC<Project> = (project) => {
    const { img, title, cat, description, technologies, linkWeb, linkGithub, repoType } = project;
  return (
    <div className='lg:h-[50vh] border dark:border-lines-dark border-lines-light dark:bg-background-dark_extension bg-background-light_extension
    rounded-3xl shadow-md p-3 md:p-6 flex flex-col-reverse lg:flex-row items-start justify-between gap-6'>
      <div className="flex-1 flex flex-col justify-between h-full">
        <div className="">
          <h3 className="text-2xl md:text-5xl font-semibold mb-2">{title}</h3>
          <p className="text-lg md:text-2xl text-primary-default font-medium mb-1">
            {cat}
          </p>
          <p className="text-sm md:text-xl mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
                <span key={index} className="text-xs md:text-sm border dark:border-lines-dark border-lines-light dark:bg-background-dark_extension bg-background-light_extension rounded-xl shadow-md font-medium px-2 lg:px-4 py-2">
                {tech}
                </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          {linkWeb && (
            <a href={linkWeb} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm md:text-xl font-medium hover:text-primary-default">
                View Website
                <MdArrowOutward />
            </a>
          )}
          <div className="w-2 h-2 bg-primary-default rounded-full"></div>
          {repoType === 'public' ? (
            <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm md:text-xl font-medium hover:text-primary-default">
                Source Code
                <MdArrowOutward />
            </a>
            ) : (
            <p className="flex items-center gap-1 text-sm md:text-xl font-medium">
                Private Repository
                <TbCancel />
            </p>
            )
          }
        </div>
      </div>
      <div className="flex-1 h-full rounded-2xl">
        <img src={img} alt={title} className="w-full h-full object-fit border dark:border-lines-dark border-lines-light dark:bg-background-dark_extension rounded-2xl" />
      </div>
    </div>
  )
}

export default ProjectCard