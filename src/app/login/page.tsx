'use client';
import Logocopy from '@/components/logo';

import { Box, Button, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import Link from 'next/link';
import theme from '@/components/MoaTheme';

export default function Home() {
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
        />
        <TextField
          label='비밀번호'
          sx={{ width: 240 }}
        />
        <Link href='/service'>
          <Button
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
