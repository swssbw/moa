'use client';
import { Card, CardContent, Dialog, Stack, Typography, Button, Select, MenuItem } from '@mui/material';
import Link from 'next/link';
import Nl2br from '@/components/Nl2br';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGlobalStore } from '@/hooks/globalStore';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState('');
  const router = useRouter();

  const setTargetName = useGlobalStore((state) => state.setTargetName);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTargetSubmitClick = () => {
    setOpen(false);
    setTargetName(target);
    router.push('/service');
  };

  useEffect(() => {
    setTarget('');
  }, [open]);

  return (
    <Stack
      flex={1}
      minHeight={'100%'}
      gap={4}
      width={'100%'}
    >
      <Stack gap={1}>
        <Typography
          variant='h4'
          sx={{
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: 700,
          }}
        >
          <Nl2br>안녕하세요! 홍길동 매니저님</Nl2br>
        </Typography>

        <Typography
          variant='h6'
          sx={{
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: 500,
          }}
        >
          오늘도 활기차게 시작해볼까요?
        </Typography>
      </Stack>

      <Button
        variant='contained'
        onClick={handleClickOpen}
      >
        대상자 선택하기
      </Button>

      <Stack
        direction='row'
        height='120px'
        gap={2}
      >
        <Link
          href={'/service'}
          style={{ width: '50%' }}
        >
          <Card
            elevation={0}
            sx={{
              height: '120px',
              border: '1px solid #eee',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            <CardContent sx={{ p: '24px' }}>
              <Stack gap={1}>
                <Typography
                  variant='h5'
                  sx={{
                    color: 'secondary.main',
                  }}
                >
                  검사하기
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Link>

        <Link
          href={'/service'}
          style={{ width: '50%' }}
        >
          <Card
            elevation={0}
            sx={{
              height: '120px',
              border: '1px solid #eee',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            <CardContent sx={{ p: '24px' }}>
              <Stack gap={1}>
                <Typography
                  variant='h5'
                  sx={{
                    color: 'secondary.main',
                  }}
                >
                  검사하기
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Link>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='target-dialog-title'
        aria-describedby='target-dialog-description'
      >
        <Stack
          p={3}
          gap={3}
        >
          <Typography
            variant='h5'
            textAlign={'center'}
            sx={{
              fontFamily: 'IBM Plex Sans KR',
              fontWeight: 700,
            }}
          >
            서비스 대상자를 선택해주세요.
          </Typography>
          <Select
            sx={{ width: '100%' }}
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={'김길동'}>김길동</MenuItem>
            <MenuItem value={'이길동'}>이길동</MenuItem>
            <MenuItem value={'박길동'}>박길동</MenuItem>
          </Select>

          <Stack
            gap={1}
            direction='row'
          >
            <Button
              sx={{ width: '50%' }}
              onClick={handleClose}
              size='large'
              color='secondary'
              variant='outlined'
            >
              취소
            </Button>
            <Button
              sx={{ width: '50%' }}
              onClick={handleTargetSubmitClick}
              size='large'
              autoFocus
            >
              확인
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </Stack>
  );
}
