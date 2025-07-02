'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ReactSketchCanvas } from 'react-sketch-canvas';

import { Stack, Typography, Grid, RadioGroup, FormControl, FormControlLabel, Radio } from '@mui/material';

import { data as cist1 } from '@/data/cist1';


import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';


export default function CIST04() {
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
            <Typography
              align='center'
              fontWeight='bold'
            >
              {data.items[0].question}
            </Typography>
          </Grid>

          <Grid
            container
            alignItems='center'
            spacing={2}
            sx={{ borderBottom: '1px solid #ddd', backgroundColor: 'grey.50' }}
          >
            <Grid size={6}>
              <Stack>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  점수
                </Typography>
              </Stack>
            </Grid>
            <Grid size={6}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue={0}
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="0"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="1"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="2"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            alignItems='center'
            sx={{ borderBottom: '1px solid #ddd' }}
          >
            {data.items[0].src && data.items[0].src.length > 0 && (
              <>
                <Grid size={6}>
                  <Image
                    src={data.items[0].src[0]}
                    alt={data.items[0].src[0]}
                    width={400}
                    height={400}
                  />
                </Grid>
                <Grid size={6}>
                  <ReactSketchCanvas
                    width='400px'
                    height='400px'
                    backgroundImage={data.items[0].src[1]}
                    // ref={canvasRefs[idx]}
                    canvasColor='#fff'
                    strokeColor='#000'
                    strokeWidth={5}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Stack>
      </SectionCard>
    </Stack>
  );
}
