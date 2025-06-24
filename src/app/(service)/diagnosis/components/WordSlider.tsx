import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { Button, Dialog, IconButton, Slide, Stack, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { forwardRef, PropsWithChildren } from 'react';
import { TransitionProps } from '@mui/material/transitions';

export default function WordSlider({ content }: { content: { name: string; hint: string }[] }) {
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

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction='up'
      ref={ref}
      {...props}
    />
  );
});

export function ComponentWithModal({
  children,
  handleClose,
  open,
}: PropsWithChildren & {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      slots={{
        transition: Transition,
      }}
      slotProps={{
        paper: {
          sx: {
            background: 'rgba(0, 0, 0, 0.8)',
          },
        },
      }}
    >
      <Stack
        p={5}
        height='100%'
        alignItems='center'
        justifyContent='center'
        sx={{ position: 'relative' }}
      >
        <Button
          sx={{ position: 'absolute', top: '40px', right: '40px' }}
          color='secondary'
          onClick={handleClose}
        >
          완료
        </Button>
        {children}
      </Stack>
    </Dialog>
  );
}
