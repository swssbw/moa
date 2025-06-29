'use client';

import { data as examine1 } from '@/data/examine1';
import { Checkbox, Divider, Grid, Stack, Typography } from '@mui/material';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';
import Unresolved from '../Unresolved';
import { Description, Instruction } from '../Instruction';
import { useParams } from 'next/navigation';

export default function ADAS06() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);
  if (!data) return;

  return (
    <Stack
      p={5}
      gap={3}
    >
      <SectionCard>
        <SectionTitle data={data} />
        <Description item={data.items[0].description.join(`\\n`)} />
        {data.items[0].instructions.map((item) => (
          <Instruction
            item={item}
            key={item.situation}
          />
        ))}
      </SectionCard>

      <SectionCard>
        <Typography
          variant='h6'
          gutterBottom
        >
          답안 입력
        </Typography>

        <Stack>
          <Grid
            container
            spacing={2}
            sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.200' }}
          >
            <Grid size={4}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                부분 과제
              </Typography>
            </Grid>
            <Grid size={4}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                (필요시) 부분 과제 상기 시키기
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

          {/* 데이터 행 */}
          {data.items[0].content.map((item, idx) => (
            <Grid
              container
              spacing={2}
              key={idx}
              alignItems='center'
              sx={{ p: 1, borderBottom: '1px solid #ddd', pb: 1 }}
            >
              <Grid size={4}>
                <Typography fontWeight='bold'>{item.name}</Typography>
              </Grid>
              <Grid size={4}>
                <Stack>
                  <Typography variant='body2'>{item.hint}</Typography>
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
      </SectionCard>

      <Divider variant='middle' />

      <Unresolved data={data} />
    </Stack>
  );
}
