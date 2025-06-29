'use client';

import { data as cist1 } from '@/data/cist1';
import { Stack, Checkbox, Typography, Grid } from '@mui/material';

import { useParams } from 'next/navigation';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';

export default function CIST01() {
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
            <Grid size={8}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                질문
              </Typography>
            </Grid>
            <Grid size={2}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                정답
              </Typography>
            </Grid>
            <Grid size={2}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                오답
              </Typography>
            </Grid>
          </Grid>

          {data.items[0].subQuestion?.map((q, i) => (
            <Grid
              container
              spacing={2}
              key={i}
              alignItems='center'
              sx={{ borderBottom: '1px solid #ddd' }}
            >
              <Grid size={8}>
                <Typography fontWeight='bold'>{q}</Typography>
              </Grid>
              <Grid size={2}>
                <Stack alignItems='center'>
                  <Checkbox
                  // checked={item.isCorrect || false}
                  // onChange={(e) => handleCheck(idx, 'isCorrect', e.target.checked)}
                  />
                </Stack>
              </Grid>
              <Grid size={2}>
                <Stack alignItems='center'>
                  <Checkbox
                  // checked={item.isCorrect || false}
                  // onChange={(e) => handleCheck(idx, 'isCorrect', e.target.checked)}
                  />
                </Stack>
              </Grid>
            </Grid>
          ))}

          <Grid
            container
            spacing={2}
            alignItems='center'
            sx={{ borderBottom: '1px solid #ddd' }}
          >
            <Grid size={8}>
              <Typography fontWeight='bold'>{data.items[1].question}</Typography>
            </Grid>
            <Grid size={2}>
              <Stack alignItems='center'>
                <Checkbox
                // checked={item.isCorrect || false}
                // onChange={(e) => handleCheck(idx, 'isCorrect', e.target.checked)}
                />
              </Stack>
            </Grid>
            <Grid size={2}>
              <Stack alignItems='center'>
                <Checkbox
                // checked={item.isCorrect || false}
                // onChange={(e) => handleCheck(idx, 'isCorrect', e.target.checked)}
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </SectionCard>
    </Stack>
  );
}
