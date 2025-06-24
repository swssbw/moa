'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Checkbox, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import SectionCard from '../SectionCard';

export default function ADAS07() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);
  console.log(data);
  if (!data) return;

  return (
    <Stack
      p={5}
      gap={3}
    >
      <SectionCard>
        <Typography variant='h5'>
          {data.cognitiveId}. {data.cognitiveName}
        </Typography>

        <Stack>
          {data.items[0].description.map((desc, idx) => (
            <Typography
              key={idx}
              color='text.secondary'
            >
              {desc}
            </Typography>
          ))}
        </Stack>
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
            <Grid size={2}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                항목
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                질문 및 답변
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
              <Grid size={2}>
                <Typography fontWeight='bold'>{item.name}</Typography>
              </Grid>
              <Grid size={6}>
                <Stack>
                  <Typography variant='body2'>{item.hint}</Typography>
                  <TextField
                    size='small'
                    fullWidth
                    // value={item.answer || ''}
                    // onChange={(e) => handleAnswerChange(idx, e.target.value)}
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
