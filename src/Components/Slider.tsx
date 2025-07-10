import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import { FaChevronLeft, FaChevronRight  } from "react-icons/fa6";

type SliderProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemsPerPage?: number;
};

export function Slider<T>({ items, renderItem, itemsPerPage = 4 }: SliderProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const pageWidth = containerRef.current.offsetWidth;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -pageWidth : pageWidth,
      behavior: 'smooth',
    });
  };

  const itemWidth = `calc(${100 / itemsPerPage}% - ${(8 * (itemsPerPage - 1)) / itemsPerPage}px)`;

  return (
    <div className="relative w-full">
      <motion.div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar gap-4 scroll-smooth"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="shrink-0"
            style={{ minWidth: itemWidth }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </motion.div>
      <div className="flex items-center justify-start gap-4 mt-2">
        <button
          onClick={() => scroll('left')}
          className="z-10 h-[30px] w-[30px] flex items-center justify-center border-2 dark:border-background-light border-background-dark rounded-full"
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="z-10 h-[30px] w-[30px] flex items-center justify-center border-2 dark:border-background-light border-background-dark rounded-full"
        >
          <FaChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
