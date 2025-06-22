import Description from '../Description';
import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useDiagnosisStore } from '@/hooks/diagnosisStore';

export default function ADAS04() {
  const { currentIndex } = useDiagnosisStore();
  const data = examine1.filter((item) => item.cognitiveId === currentIndex);

  if (!data) return;

  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        className='page-slider'
      >
        <SwiperSlide>
          <Description data={data[0]} />
        </SwiperSlide>

        <SwiperSlide>
          <Unresolved data={data[0]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
