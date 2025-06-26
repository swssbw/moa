'use client';
import Logocopy from '@/components/logo';
import Link from 'next/link';
import { useState } from 'react';
import { useGlobalStore } from '@/hooks/globalStore';
import { Box, Stack, TextField, Button, Typography } from '@mui/material';

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
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
    >
      <Stack
        spacing={2}
        alignItems='center'
        sx={{ width: '320px' }}
      >
        <Stack alignItems='center'>
          <Logocopy />
          <Typography
            variant='h1'
            sx={{ fontFamily: 'HakgyoansimDunggeunmiso', color: '#707070', fontSize: '3rem' }}
          >
            Moa
          </Typography>
        </Stack>
        <TextField
          type='text'
          label='아이디'
          variant='outlined'
          fullWidth
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          type='password'
          label='비밀번호'
          variant='outlined'
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          component={Link}
          href='/service'
          variant='contained'
          fullWidth
          size='large'
          onClick={handleLoginClick}
        >
          로그인
        </Button>
      </Stack>
    </Box>
  );
}
