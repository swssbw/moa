import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { PropsWithChildren } from 'react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, Stack } from '@mui/material';

export default function SwiperContainer({ children }: PropsWithChildren) {
  return (
    <Stack alignItems='center'>
      <Stack
        gap={5}
        width='100%'
        height='100%'
      >
        <Stack
          gap={5}
          direction='row'
          alignItems='center'
          maxWidth='1200px'
          width='100%'
          height='100%'
        >
          <IconButton
            className='custom_prev'
            size='large'
            sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', boxShadow: 1 }}
          >
            <ChevronLeftIcon />
          </IconButton>
          {children}
          <IconButton
            className='custom_next'
            size='large'
            sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', boxShadow: 1 }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
        <div
          className='custom_pagination'
          style={{ textAlign: 'center', fontSize: '0.875rem', marginBottom: '4px', zIndex: 101, color: 'white' }}
        />
      </Stack>
    </Stack>
  );
}

// Children으로 SwiperSlide, 컨테이너 가로 세로 길이만 전달
export function CardSwiperContainer({ children }: PropsWithChildren) {
  return (
    <Stack alignItems='center'>
      <Stack
        direction='row'
        alignItems='center'
        width="800px"
        height="550px"
      >
        <IconButton
          className='custom_prev'
          size='large'
          sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', boxShadow: 1 }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Swiper
          pagination={{
            el: '.custom_pagination',
            type: 'fraction',
          }}
          loop={true}
          effect="cards"
          modules={[Navigation, EffectCards, Pagination]}
          navigation={{
            nextEl: '.custom_next',
            prevEl: '.custom_prev',
          }}
          className='card-slide'
          touchStartPreventDefault={false}
          style={{ touchAction: 'manipulation' }}
          preventClicks={false}
          preventClicksPropagation={false}
        >
          {children}
        </Swiper>

        <IconButton
          className='custom_next'
          size='large'
          sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', boxShadow: 1 }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <div
        className='custom_pagination'
        style={{ textAlign: 'center', fontSize: '0.875rem', marginBottom: '4px', zIndex: 101 }}
      />
    </Stack>
  );
}
