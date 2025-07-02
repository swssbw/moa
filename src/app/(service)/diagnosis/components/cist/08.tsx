'use client';

import { useParams } from 'next/navigation';

import { Stack, Typography, Grid, TextField } from '@mui/material';

import { data as cist1 } from '@/data/cist1';


import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';

export default function CIST08() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = cist1.find((item) => item.cognitiveId === currentIndex);

  if (!data) return;

  return (
    <Stack
      p={5}
      gap={3}
    >
      <SectionCard>
        <SectionTitle data={data} />

        <Stack>
          <Grid
            container
            spacing={2}
            sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.200' }}
          >
            <Grid size={9}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                질문
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                답변 기록
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            alignItems='center'
            sx={{ borderBottom: '1px solid #ddd', p: 1 }}
          >
            <Grid size={9}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                {data.items[0].question}
              </Typography>
            </Grid>
            <Grid size={3}>
              <Stack alignItems='center'>
                <TextField placeholder='정답 갯수를 입력해주세요.' />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </SectionCard>
    </Stack>
  );
}
