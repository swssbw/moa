'use client';
import Logocopy from '@/components/logo';

import { Box, Button, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import Link from 'next/link';
import theme from '@/components/MoaTheme';
import { useGlobalStore } from '@/hooks/globalStore';
import { useState } from 'react';

export default function Home() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const setManagerInfo = useGlobalStore((state) => state.setManagerInfo);

  const handleLoginClick = () => {
    setManagerInfo({
      name: id,
      id,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{ height: '100%' }}
        alignItems={'center'}
        justifyContent={'center'}
        gap={1}
      >
        <Box>
          <Logocopy />
          <Typography
            variant='h2'
            sx={{ fontFamily: 'HakgyoansimDunggeunmiso', color: '#707070' }}
          >
            Moa
          </Typography>
        </Box>

        <TextField
          label='아이디'
          sx={{ width: 240 }}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          label='비밀번호'
          sx={{ width: 240 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link href='/service'>
          <Button
            onClick={handleLoginClick}
            variant='contained'
            sx={{ width: 240 }}
          >
            로그인
          </Button>
        </Link>
      </Stack>
    </ThemeProvider>
  );
}
