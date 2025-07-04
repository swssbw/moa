'use client';

import { useParams } from 'next/navigation';

import { Checkbox, Divider, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';

import { data as examine1 } from '@/data/examine1';
import { useADASStore } from '@/hooks/adasStore';

import { Instruction } from '../Instruction';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';
import Unresolved from '../Unresolved';

export default function ADAS04() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);
  const { answer4, setAnswer4 } = useADASStore();

  if (!data) return;

  const handleWordCheck = (word: string, checked: boolean) => {
    const updated = new Set(answer4);
    if (checked) {
      updated.add(word);
    } else {
      updated.delete(word);
    }

    setAnswer4([...updated]);
  };

  return (
    <Stack
      p={5}
      gap={3}
    >
      <SectionCard>
        <SectionTitle data={data} />

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

        <Grid container>
          {data.items[0].content.map((word, index) => (
            <Grid
              size={6}
              key={index}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name={word.name}
                    checked={answer4.includes(word.name)}
                    onChange={(_, checked) => handleWordCheck(word.name, checked)}
                  />
                }
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

      <Unresolved data={data} />
    </Stack>
  );
}
