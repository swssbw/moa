import 'swiper/css';
import 'swiper/css/effect-cards';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import { data } from '@/data/examine1';

export default function WordSlider() {
  const { currentIndex } = useDiagnosisStore();
  const content = data[currentIndex].content as { name: string; hint: string }[];

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Swiper
        navigation={true}
        effect={'cards'}
        modules={[EffectCards, Navigation]}
      >
        {content.map((item, index: number) => (
          <SwiperSlide key={index}>
            <h1 className='text-5xl font-bold'>{item.name}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
