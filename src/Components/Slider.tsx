import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa6";

import 'swiper/css';

type SliderProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export function Slider<T>({ items, renderItem }: SliderProps<T>) {
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const swiperRef = useRef<SwiperClass>(
    null as unknown as SwiperClass
  );

  const goNext = () => swiperRef.current.slideNext()
  const goPrev = () => swiperRef.current.slidePrev();

  function getPageIndexFromActiveIndex(activeIndex: number, groupSize: number, itemsLength: number): number {
  const pageStartIndices = [];

  for (let i = 0; i < itemsLength; i += groupSize) {
    pageStartIndices.push(i);
  }

    for (let i = 0; i < pageStartIndices.length; i++) {
      const start = pageStartIndices[i];
      const end = pageStartIndices[i + 1] ?? itemsLength;

      if (activeIndex >= start && activeIndex < end) {
        return i + 1;
      }
    }

    return pageStartIndices.length;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          const group = swiper.params.slidesPerGroup || 1;
          const page = getPageIndexFromActiveIndex(swiper.activeIndex, group, items.length);
          setTotalPages(Math.ceil(items.length / group));
          setCurrentPage(page);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          const group = swiper.params.slidesPerGroup || 1;
          const page = getPageIndexFromActiveIndex(swiper.activeIndex, group, items.length);
          setCurrentPage(page);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          10: { slidesPerView: 1, slidesPerGroup: 1 },
          370: { slidesPerView: 2, slidesPerGroup: 2 },
          640: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        spaceBetween={10}
        className="!overflow-visible"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-2 flex items-center justify-center md:justify-between">
        <div className="hidden md:flex items-center justify-start gap-4">
          <button
            onClick={goPrev}
            disabled={isBeginning}
            className={`z-10 h-[30px] w-[30px] flex items-center justify-center border-2 rounded-full ${isBeginning ? 'dark:border-lines-dark border-lines-light' : 'dark:border-background-light border-background-dark'}`}
          >
            <FaChevronLeft className={`w-4 h-4 ${isBeginning ? 'text-text-light_extension dark:text-text-dark_extension' : ''}`} />
          </button>
          <button
            onClick={goNext}
            disabled={isEnd}
            className={`z-10 h-[30px] w-[30px] flex items-center justify-center border-2 rounded-full ${isEnd ? 'dark:border-lines-dark border-lines-light' : 'dark:border-background-light border-background-dark'}`}
          >
            <FaChevronRight className={`w-4 h-4 ${isEnd ? 'text-text-light_extension dark:text-text-dark_extension' : ''}`} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`h-[10px] w-[10px] rounded-full border dark:border-background-light border-background-dark transition-all duration-300 ${
                index + 1 === currentPage
                  ? 'bg-primary-default'
                  : 'dark:bg-background-dark_extension bg-background-light_extension'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
