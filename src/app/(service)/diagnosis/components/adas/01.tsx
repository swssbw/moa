'use client';

import { WordSliderWithModal } from '../WordSlider';
import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Stack, Typography, Checkbox, FormControlLabel, TextField, Grid, Divider } from '@mui/material';
import { useParams } from 'next/navigation';
import SectionCard from '../SectionCard';

export default function ADAS01() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  if (!data) return;

  return (
    <>
      <Stack
        p={5}
        gap={5}
      >
        <SectionCard>
          <Typography variant='h5'>
            {data.cognitiveId}. {data.cognitiveName}
          </Typography>

          {data.items[0].instructions.map((item) => (
            <Stack
              key={item.situation}
              gap={2}
            >
              <Typography fontWeight='bold'>{item.situation}</Typography>
              <Typography
                sx={{
                  pl: 2,
                  borderLeft: '4px solid',
                  borderColor: 'grey.300',
                  fontStyle: 'italic',
                }}
              >
                {item.script}
              </Typography>
            </Stack>
          ))}

          <WordSliderWithModal content={data.items[0].content} />
        </SectionCard>

        <Divider variant='middle' />

        <SectionCard>
          <Typography
            variant='h6'
            gutterBottom
          >
            답안 입력
          </Typography>

          <Grid container>
            {data.items[0].content.map((word, index) => (
              <Grid
                size={6}
                key={index}
              >
                <FormControlLabel
                  key={index}
                  control={<Checkbox name={word.name} />}
                  label={<Typography component='span'>{word.name}</Typography>}
                />
              </Grid>
            ))}
          </Grid>

          <Stack mt={2}>
            <FormControlLabel
              control={<Checkbox />}
              label={<Typography component='span'>회상한 단어 없음</Typography>}
            />

            <TextField
              placeholder='대상자 답변이나 목록에 없는 단어를 기록할 수 있습니다.'
              multiline
              rows={3}
              fullWidth
            />
          </Stack>
        </SectionCard>

        <Divider variant='middle' />

        <SectionCard>
          <Unresolved data={data} />
        </SectionCard>
      </Stack>
    </>
  );
}
