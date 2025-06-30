'use client';

import { Button, Grid, Stack, Typography } from '@mui/material';
import SectionCard from '../SectionCard';
import { useADASStore } from '@/hooks/adasStore';
import { data } from '@/data/examine1';

export default function ADAS01() {
  const { totalScore, calculateTotalScore } = useADASStore();

  return (
    <>
      <Stack
        p={5}
        gap={3}
      >
        <SectionCard>
          <Stack
            direction='row'
            justifyContent='space-between'
          >
            <Typography variant='h5'>ADAS-cog13 검사 결과</Typography>
            <Button
              onClick={calculateTotalScore}
              color='secondary'
            >
              채점하기
            </Button>
          </Stack>

          <Stack>
            <Grid
              container
              spacing={2}
              sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.200' }}
            >
              <Grid size={1}></Grid>
              <Grid size={8}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  검사 항목
                </Typography>
              </Grid>
              <Grid size={3}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  점수
                </Typography>
              </Grid>
            </Grid>
            {data.map((item, idx) => (
              <Grid
                container
                spacing={2}
                key={idx}
                alignItems='center'
                sx={{ p: 1, borderBottom: '1px solid #ddd', pb: 1 }}
              >
                <Grid size={1}>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                  >
                    {item.cognitiveId}
                  </Typography>
                </Grid>
                <Grid size={8}>
                  <Typography fontWeight='bold'>{item.cognitiveName}</Typography>
                </Grid>
                <Grid size={3}>
                  <Typography textAlign='center'>{totalScore[idx]}</Typography>
                </Grid>
              </Grid>
            ))}

            <Grid
              container
              spacing={2}
              sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.100' }}
            >
              <Grid size={1}></Grid>
              <Grid size={8}>
                <Typography
                  align='right'
                  fontWeight='bold'
                >
                  총점
                </Typography>
              </Grid>
              <Grid size={3}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  {totalScore.reduce((sum, val) => sum + val, 0)}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </SectionCard>
      </Stack>
    </>
  );
}
