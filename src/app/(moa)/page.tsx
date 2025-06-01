import Image from 'next/image';
import Logo from '@/components/logo.svg';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Stack
      sx={{ height: '100%' }}
      alignItems={'center'}
      justifyContent={'center'}
      gap={1}
    >
      <Box>
        <Image
          src={Logo}
          alt='Moa 로고'
          width={120}
          height={120}
        />
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
      <Link href='/home'>
        <Button
          variant='contained'
          sx={{ width: 240 }}
        >
          로그인
        </Button>
      </Link>
    </Stack>
  );
}
