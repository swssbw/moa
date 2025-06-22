import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WordSlider({ content }: { content: { name: string; hint: string }[] }) {
  return (
    <div className='flex h-full w-full items-center justify-center px-10'>
      <button className='custom_prev bg-white rounded-full p-2 border border-input shadow-sm'>
        <ChevronLeft className='size-5' />
      </button>

      <div className='flex-1'>
        <div className='custom_pagination text-center text-sm mb-1'></div>
        <Swiper
          pagination={{
            el: '.custom_pagination',
            type: 'fraction',
          }}
          loop={true}
          effect={'cards'}
          modules={[Navigation, EffectCards, Pagination]}
          navigation={{
            nextEl: '.custom_next',
            prevEl: '.custom_prev',
          }}
        >
          {content.map((item, index: number) => (
            <SwiperSlide key={index}>
              <h1 className='text-5xl font-bold'>{item.name}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className='custom_next  bg-white rounded-full p-2 border border-input shadow-sm'>
        <ChevronRight className='size-5' />
      </button>
    </div>
  );
}
