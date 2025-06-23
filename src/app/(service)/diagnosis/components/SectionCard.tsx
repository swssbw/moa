import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function SectionCard({ children }: PropsWithChildren) {
  return (
    <Stack
      gap={3}
      p={4}
      sx={{
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        backgroundColor: '#ffffff',
      }}
    >
      {children}
    </Stack>
  );
}
