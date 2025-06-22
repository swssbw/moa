import Description from '../Description';
import { data as examine1 } from '@/data/examine1';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import { FormControl, FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';

export default function ADAS11() {
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

          <Stack px={5}>
            <FormControl>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue={0}
                name='radio-buttons-group'
              >
                {data[0].content.map((item, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={idx}
                    control={<Radio />}
                    label={
                      <Stack
                        direction='row'
                        gap={2}
                      >
                        <Typography fontWeight={'bold'}>{item.name}</Typography>
                        <Typography>{item.hint}</Typography>
                      </Stack>
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
