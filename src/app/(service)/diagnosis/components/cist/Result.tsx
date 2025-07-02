'use client';

import { Stack, Typography } from '@mui/material';

import SectionCard from '../SectionCard';

export default function Result() {
  return (
    <>
      <Stack
        p={5}
        gap={3}
      >
        <SectionCard>
          <Typography variant='h5'>CIST 결과 요약표</Typography>
        </SectionCard>
      </Stack>
    </>
  );
}
