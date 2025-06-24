'use client';

import React from 'react';
import { Box, Stack } from '@mui/material';

const SquareRadioGroup = () => {
  const [selected, setSelected] = React.useState<'y' | 'n'>('y');

  const options: { value: 'y' | 'n'; label: string }[] = [
    { value: 'y', label: '본 적 있어요' },
    { value: 'n', label: '본 적 없어요' },
  ];

  return (
    <Stack
      direction='row'
      spacing={2}
    >
      {options.map((option) => (
        <Box
          role='radio'
          tabIndex={0}
          key={option.value}
          onClick={() => setSelected(option.value)}
          sx={{
            width: '150px',
            height: '80px',
            border: selected === option.value ? '2px solid #1976d2' : '2px solid #ccc',
            backgroundColor: selected === option.value ? '#e3f2fd' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 'bold',
            ouchAction: 'manipulation',
            // transition: 'all 0.2s',
          }}
        >
          {option.label}
        </Box>
      ))}
    </Stack>
  );
};

export default SquareRadioGroup;
