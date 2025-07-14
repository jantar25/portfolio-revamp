import React from 'react'

import GetConnected from '../Components/GetConnected'

const Blog: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mt-20 md:mt-32 mb-12">
        <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-bold">
          My Blog
        </h1>
        <p className="w-full lg:w-1/2 text-lg md:text-2xl mt-4 text-text-light_extension dark:text-text-dark_extension">
          Welcome to my blog! Here, I share my thoughts on software development, technology trends, and personal experiences.
          Feel free to explore and engage with the content!
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-lg md:text-2xl text-text-light_extension dark:text-text-dark_extension">
          This section is under construction. Stay tuned for updates!
        </p>
      </div>
      <GetConnected />
    </div>
  )
}

export default Blog