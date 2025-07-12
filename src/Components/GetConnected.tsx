import React from 'react'
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";

const GetConnected: React.FC = () => {
  return (
      <div className="flex flex-col items-center justify-center bg-primary-default rounded-3xl shadow-md p-6 lg:p-16 my-12 lg:my-24">
        <h2 className="w-full md:w-1/2 text-center text-2xl md:text-4xl font-bold mb-8 text-text-light dark:text-text-light">
          Think I’d be a good fit for your team or project?
        </h2>
        <Link to="/contact" className="w-full md:w-1/2 py-4 flex items-center justify-center rounded-full text-2xl md:text-4xl font-bold bg-text-light text-text-dark_extension dark:text-text-dark_extension">
          Let's Connect
          <MdArrowOutward className="inline-block ml-1" />
        </Link>
      </div>
  )
}

export default GetConnected