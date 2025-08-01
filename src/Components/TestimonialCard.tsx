import React from 'react'
import type { Testimonial } from '../constant/dataTestimonials'
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard: React.FC<Testimonial> = (testimonial) => {
  const { name, position, company, text } = testimonial;
  return (
    <div className='md:min-h-[65vh] border dark:border-lines-dark border-lines-light dark:bg-background-dark_extension bg-background-light_extension rounded-3xl shadow-md p-3 md:p-6 flex flex-col items-start justify-between gap-6'>
      <div className="flex-1 flex flex-col justify-between h-full gap-4">
        <div className="">
          <FaQuoteLeft className="inline mb-1 text-2xl md:text-3xl text-primary-default" />
          <p className="text-sm lg:text-lg text-justify">{text}</p>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold text-2xl">{name}</h3>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">{position}</p>
            <div className="w-2 h-2 bg-primary-default rounded-full"></div>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard