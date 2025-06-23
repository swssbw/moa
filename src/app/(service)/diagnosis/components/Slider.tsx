import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Swiper } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { IconButton, Stack } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PropsWithChildren } from 'react';

export default function Slider({ children }: PropsWithChildren) {
  return (
    <>
      <Stack alignItems='center'>
        <Stack
          direction='row'
          alignItems='center'
          width='800px'
          height='550px'
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
            effect={'cards'}
            modules={[Navigation, EffectCards, Pagination]}
            navigation={{
              nextEl: '.custom_next',
              prevEl: '.custom_prev',
            }}
            className='word-slide'
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
          style={{ textAlign: 'center', fontSize: '0.875rem', marginBottom: '4px', zIndex: 101, color: 'white' }}
        />
      </Stack>
    </>
  );
}
