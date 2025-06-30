'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Divider, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';
import { Description } from '../Instruction';
import { useState } from 'react';

type AnswerEntry = {
  value: string; // ex) '사과'
  result: Result; // 정답 여부
};

type Result = 'correct' | 'wrong' | '';

export default function ADAS07() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const [answers, setAnswers] = useState<Record<string, AnswerEntry>>({});

  const handleAnswerChange = (key: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: {
        value,
        result: '',
      },
    }));
  };

  const handleResultChange = (key: string, result: 'correct' | 'wrong' | '') => {
    setAnswers((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        result,
      },
    }));
  };

  if (!data) return;

  return (
    <Stack
      p={5}
      gap={3}
    >
      <SectionCard>
        <SectionTitle data={data} />
        <Description item={data.items[0].description.join(`\\n`)} />
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
                    value={answers[`0-${idx}`]?.value ?? ''}
                    onChange={(e) => handleAnswerChange(`0-${idx}`, e.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid size={4}>
                <RadioGroup
                  row
                  value={answers[`0-${idx}`]?.result ?? ''}
                  onChange={(e) => {
                    handleResultChange(`0-${idx}`, e.target.value as Result);
                  }}
                  sx={{ gap: '16px' }}
                >
                  <Grid size={6}>
                    <FormControlLabel
                      value='correct'
                      control={<Radio />}
                      label=''
                      sx={{
                        justifyContent: 'center',
                        width: '100%',
                        margin: 0,
                      }}
                    />
                  </Grid>
                  <Grid size={6}>
                    <FormControlLabel
                      value='wrong'
                      control={<Radio />}
                      label=''
                      sx={{ justifyContent: 'center', width: '100%', margin: 0 }}
                    />
                  </Grid>
                </RadioGroup>
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
