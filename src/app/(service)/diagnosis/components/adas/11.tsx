'use client';
import { useParams } from 'next/navigation';

import { FormControl, FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';

import { data as examine1 } from '@/data/examine1';

import SectionTitle from '../SectionTitle';

export default function ADAS11() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  if (!data) return;

  return (
    <>
      <Stack
        p={5}
        gap={2}
      >
        <SectionTitle data={data} />

        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue={0}
            name='radio-buttons-group'
          >
            {data.items[0].content.map((item, idx) => (
              <FormControlLabel
                key={idx}
                value={idx}
                control={<Radio />}
                label={
                  <Stack
                    direction='row'
                    gap={2}
                  >
                    <Typography fontWeight="bold">{item.name}</Typography>
                    <Typography>{item.hint}</Typography>
                  </Stack>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Stack>
    </>
  );
}
