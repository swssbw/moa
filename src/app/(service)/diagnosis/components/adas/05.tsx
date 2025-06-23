'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Checkbox, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import WordSlider from '../WordSlider';
import SectionCard from '../SectionCard';

export default function ADAS05() {
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

        <Typography variant='h6'>
          {data.cognitiveId}.1 {data.items[0].name}
        </Typography>

        {data.items[0].description.map((desc, idx) => (
          <Typography
            key={idx}
            color='text.secondary'
          >
            {desc}
          </Typography>
        ))}
        {data.items[0].instructions.map((instruction, idx) => (
          <Stack
            spacing={0.5}
            key={idx}
          >
            <Typography fontWeight='bold'>{instruction.situation}</Typography>
            <Typography
              sx={{
                pl: 1,
                borderLeft: '2px solid',
                borderColor: 'grey.300',
                fontStyle: 'italic',
              }}
            >
              {instruction.script}
            </Typography>
          </Stack>
        ))}
      </SectionCard>

      <Stack
        height='100%'
        alignItems='center'
        justifyContent='center'
      >
        <WordSlider content={data.items[0].content} />
      </Stack>

      {/* 5-1 채점 */}
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
            sx={{ p: 1, borderBottom: '1px solid #ddd' }}
          >
            <Grid size={3}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                사물
              </Typography>
            </Grid>
            <Grid size={5}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                답변
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
              <Grid size={3}>
                <Typography fontWeight='bold'>{item.name}</Typography>
              </Grid>
              <Grid size={5}>
                <TextField
                  size='small'
                  fullWidth
                  // value={item.answer || ''}
                  // onChange={(e) => handleAnswerChange(idx, e.target.value)}
                />
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

      <SectionCard>
        <Typography variant='h6'>
          {data.cognitiveId}.2 {data.items[0].name}
        </Typography>

        {data.items[1].description.map((desc, idx) => (
          <Typography
            key={idx}
            color='text.secondary'
          >
            {desc}
          </Typography>
        ))}
        {data.items[1].instructions.map((instruction, idx) => (
          <Stack
            spacing={0.5}
            key={idx}
          >
            <Typography fontWeight='bold'>{instruction.situation}</Typography>
            <Typography
              sx={{
                pl: 1,
                borderLeft: '2px solid',
                borderColor: 'grey.300',
                fontStyle: 'italic',
              }}
            >
              {instruction.script}
            </Typography>
          </Stack>
        ))}
      </SectionCard>

      {/* 5-2 채점 */}
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
            sx={{ p: 1, borderBottom: '1px solid #ddd' }}
          >
            <Grid size={3}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                손가락
              </Typography>
            </Grid>
            <Grid size={5}>
              <Typography
                align='center'
                fontWeight='bold'
              >
                답변
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
          {data.items[1].content.map((item, idx) => (
            <Grid
              container
              spacing={2}
              key={idx}
              alignItems='center'
              sx={{ p: 1, borderBottom: '1px solid #ddd', pb: 1 }}
            >
              <Grid size={3}>
                <Typography fontWeight='bold'>{item.name}</Typography>
              </Grid>
              <Grid size={5}>
                <TextField
                  size='small'
                  fullWidth
                  // value={item.answer || ''}
                  // onChange={(e) => handleAnswerChange(idx, e.target.value)}
                />
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
