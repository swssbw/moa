'use client';

import { data as cist1 } from '@/data/cist1';
import { Stack, Typography } from '@mui/material';

import { useParams } from 'next/navigation';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';

export default function CIST02() {
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

        {data.items.map((item, i) => (
          <Stack
            gap={1}
            key={i}
          >
            <Typography>{item.question}</Typography>
            <Stack
              direction='row'
              gap={2}
            >
              {item.subQuestion?.map((sq, i) => (
                <Typography
                  key={i}
                  fontWeight='bold'
                >
                  {sq}
                </Typography>
              ))}
            </Stack>
          </Stack>
        ))}

        <Typography color='textSecondary'>점수 없음 (단, 순서 상관없이 대상자가 말한 단어에 ○표)</Typography>
      </SectionCard>
    </Stack>
  );
}
