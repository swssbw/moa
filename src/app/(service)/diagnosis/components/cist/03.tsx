'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { Stack, Checkbox, Typography, Grid } from '@mui/material';

import { data as cist1 } from '@/data/cist1';


import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';


export default function CIST03() {
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

        <Stack gap={2}>
          {data.items.map((item, idx) => (
            <Stack key={idx}>
              {/* 메인 질문 헤더 */}
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
                    {item.question}
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

              <Grid
                container
                spacing={2}
                sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.50' }}
              >
                <Typography variant='body2'>{item.desc}</Typography>
              </Grid>

              {/* subQuestion이 있는 경우 매핑 */}
              {item.subQuestion?.map((subQ, subIdx) => (
                <Grid
                  container
                  spacing={2}
                  key={`${idx}-${subIdx}`}
                  alignItems='center'
                  sx={{ borderBottom: '1px solid #ddd' }}
                >
                  <Grid size={8}>
                    <Typography fontWeight='bold'>{subQ}</Typography>
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
            </Stack>
          ))}
        </Stack>
      </SectionCard>
    </Stack>
  );
}
