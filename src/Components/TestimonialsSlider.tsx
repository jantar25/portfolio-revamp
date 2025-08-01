import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

type SliderProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export function TestimonialsSlider<T>({ items, renderItem }: SliderProps<T>) {
  const swiperRef = useRef<SwiperClass>(null as unknown as SwiperClass);

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]} // Enable autoplay module
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
        }}
        spaceBetween={10}
        loop={true}
        className="!overflow-visible"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
