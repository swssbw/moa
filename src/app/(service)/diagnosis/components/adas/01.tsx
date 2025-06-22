import WordSlider from '../WordSlider';
import Description from '../Description';
import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Box, Stack, Typography, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ADAS01() {
  const data = examine1[0];

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
          <Description data={data} />
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            height='100%'
            alignItems='center'
            justifyContent='center'
          >
            <WordSlider content={data.content} />
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ p: 5 }}>
            <Typography
              variant='h5'
              fontWeight='bold'
              gutterBottom
            >
              채점
            </Typography>

            <Stack direction='row'>
              <Stack
                spacing={1}
                width='50%'
              >
                {data.content.map((word, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox name={word.name} />}
                    label={<Typography component='span'>{word.name}</Typography>}
                  />
                ))}
              </Stack>

              <Stack width='50%'>
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Typography component='span'>회상한 단어 없음</Typography>}
                />

                <TextField
                  placeholder='대상자 답변이나 목록에 없는 단어를 기록할 수 있습니다.'
                  multiline
                  rows={3}
                  fullWidth
                />
              </Stack>
            </Stack>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Unresolved data={data} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
