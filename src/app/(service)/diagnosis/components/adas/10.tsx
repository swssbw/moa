'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Stack, Typography } from '@mui/material';

export default function ADAS10() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  if (!data) return;

  return (
    <>
      <Stack
        p={5}
        gap={2}
      >
        <Typography variant='h5'>
          {data.cognitiveId}. {data.cognitiveName}
        </Typography>

        <Typography color='text.secondary'>{data.description}</Typography>

        {data.items[0].instructions.map((item) => (
          <Stack
            key={item.situation}
            spacing={0.5}
          >
            <Typography fontWeight='bold'>{item.situation}</Typography>
            <Typography
              sx={{
                pl: 1,
                borderLeft: '2px solid',
                borderColor: 'grey.300',
                fontStyle: 'italic',
              }}
            >
              {item.script}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Unresolved data={data} />
    </>
  );
}
