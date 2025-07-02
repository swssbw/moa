'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

import { Stack, Checkbox, Typography, Grid } from '@mui/material';

import { data as cist1 } from '@/data/cist1';

import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';


export default function CIST05() {
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

          {data.items.map((item, idx) => (
            <React.Fragment key={idx}>
              <Grid
                container
                gap={1}
                sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.100' }}
              >
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  {item.question}
                </Typography>
                <Typography>{item.desc}</Typography>
              </Grid>

              <Grid
                container
                spacing={2}
                alignItems='center'
                sx={{ borderBottom: '1px solid #ddd' }}
              >
                <Grid
                  size={8}
                  sx={{ position: 'relative', height: '150px' }}
                >
                  {item.src && item.src.length > 0 && (
                    <Image
                      src={item.src[0]}
                      alt={item.src[0]}
                      fill
                      objectFit='contain'
                    />
                  )}
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
            </React.Fragment>
          ))}
        </Stack>
      </SectionCard>
    </Stack>
  );
}
