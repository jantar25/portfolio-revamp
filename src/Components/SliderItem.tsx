import React from 'react'

interface Item { name: string; icon: string }

const SliderItem: React.FC<Item> = ({ name, icon }) => {
  return (
    <div className="w-full h-20 border-lines-light dark:bg-background-dark_extension bg-background-light_extension rounded-3xl shadow-md
    flex flex-col items-center justify-center bg-white rounded-lg p-4">
      <img src={icon} alt={name} className="w-8 h-8 mb-2" />
      <p className="text-sm text-center font-medium">{name}</p>
    </div>
  )
}

export default SliderItem