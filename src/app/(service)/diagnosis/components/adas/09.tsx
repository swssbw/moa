'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Checkbox, Divider, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';
import { Description } from '../Instruction';

export default function ADAS09() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  if (!data) return;

  return (
    <>
      <Stack
        p={5}
        gap={3}
      >
        <SectionCard>
          <SectionTitle data={data} />

          <Description item={data.items[0].description.join(`\\n`)} />

          <Stack>
            <Grid
              container
              spacing={2}
              sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.200' }}
            >
              <Grid size={6}></Grid>
              <Grid size={6}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  검사지침 기억하기 점수
                </Typography>
              </Grid>
            </Grid>

            {data.items[0].content.map((item, index) => (
              <Grid
                key={index}
                container
                spacing={2}
                alignItems='center'
                sx={{ p: 1, borderBottom: '1px solid #ddd', pb: 1 }}
              >
                <Grid size={6}>
                  <Typography align='center'>{item.name}</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography align='center'>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<Typography component='span'>{item.score} 점</Typography>}
                    />
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </SectionCard>

        <Divider variant='middle' />
        <Unresolved data={data} />
      </Stack>
    </>
  );
}
