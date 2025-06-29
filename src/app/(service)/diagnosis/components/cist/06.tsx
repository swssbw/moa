'use client';

import { data as cist1 } from '@/data/cist1';
import { Stack, Checkbox, Typography, Grid } from '@mui/material';

import { useParams } from 'next/navigation';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';

export default function CIST06() {
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
            <Grid size={10}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                기억회상 (각 2점)
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
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.100' }}
          >
            <Typography
              align='center'
              fontWeight='bold'
            >
              {data.items[0].question}
            </Typography>
          </Grid>

          {data.items[0].subQuestion &&
            data.items[0].subQuestion.map((sq, idx) => (
              <Grid
                key={idx}
                container
                spacing={2}
                alignItems='center'
                sx={{ borderBottom: '1px solid #ddd' }}
              >
                <Grid size={10}>
                  <Typography
                    fontWeight='bold'
                    textAlign='center'
                  >
                    {sq}
                  </Typography>
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
        </Stack>

        <Stack>
          <Grid
            container
            spacing={2}
            sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.200' }}
          >
            <Grid size={10}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                재인 (기억회상 과제에서 회상하지 못한 항목만 시행. 각 1점)
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
          </Grid>

          {data.items.map((item, idx) => {
            if (idx === 0) return null;

            return (
              <Grid
                key={idx}
                container
                spacing={2}
                alignItems='center'
                sx={{ borderBottom: '1px solid #ddd', p: 1 }}
              >
                <Grid size={10}>
                  <Typography textAlign='center'>{item.question}</Typography>
                  <Typography
                    fontWeight='bold'
                    textAlign='center'
                  >
                    {item.subQuestion?.join(' / ')}
                  </Typography>
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
            );
          })}
        </Stack>
      </SectionCard>
    </Stack>
  );
}
