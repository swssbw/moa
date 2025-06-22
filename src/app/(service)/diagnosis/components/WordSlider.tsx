import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function WordSlider({ content }: { content: { name: string; hint: string }[] }) {
  return (
    <Stack
      direction='row'
      alignItems='center'
      width='80%'
    >
      <IconButton
        className='custom_prev'
        sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', boxShadow: 1 }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Box sx={{ flex: 1 }}>
        <div
          className='custom_pagination'
          style={{ textAlign: 'center', fontSize: '0.875rem', marginBottom: '4px' }}
        />
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
          {content.map((item, index: number) => (
            <SwiperSlide key={index}>
              <Typography
                variant='h1'
                sx={{ fontSize: '3rem', fontWeight: 'bold' }}
              >
                {item.name}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <IconButton
        className='custom_next'
        sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', boxShadow: 1 }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Stack>
  );
}
