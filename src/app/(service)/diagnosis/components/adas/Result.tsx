'use client';

import { Stack, Typography } from '@mui/material';
import SectionCard from '../SectionCard';

export default function ADAS01() {
  return (
    <>
      <Stack
        p={5}
        gap={3}
      >
        <SectionCard>
          <Typography variant='h5'>ADAS-cog13 검사 결과</Typography>
        </SectionCard>
      </Stack>
    </>
  );
}
