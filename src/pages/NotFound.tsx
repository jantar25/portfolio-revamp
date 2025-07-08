import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[50vh] xl:h-[70vh]'>
      <h1 className='text-3xl md:text-5xl xl:text-8xl text-center'>404 - Page Not Found</h1>
      <p className='text-text-light_extension dark:text-text-dark_extension text-md md:text-xl xl:text-3xl my-8'>Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound