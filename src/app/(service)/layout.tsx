'use client';

import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { Box, Button, Stack, IconButton, Menu, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  const { setBaseFontSize } = useDiagnosisStore();
  const router = useRouter();
  const params = useParams<{ index: string }>();
  const pathname = usePathname(); // ['', 'diagnosis', 'adas', '14']

  const TEST_TYPE = pathname.split('/')[2];

  console.log('pathname', pathname.split('/'));
  const currentIndex = parseInt(params.index);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoHome = () => {
    router.push('/service');
    handleClose();
  };

  const handleSetLargeFont = () => {
    setBaseFontSize(20);
    handleClose();
  };

  const handleSetNormalFont = () => {
    setBaseFontSize(16);
    handleClose();
  };

  const handleClickPrev = () => {
    router.push(`/diagnosis/${TEST_TYPE}/${currentIndex - 1}`);
  };

  const handleClickNext = () => {
    if (TEST_TYPE === 'adas' && currentIndex === 14) {
      router.push(`/diagnosis/cist/1`);
    } else if (TEST_TYPE === 'cist' && currentIndex === 9) {
      window.alert('검사종료!');
    } else {
      router.push(`/diagnosis/${TEST_TYPE}/${currentIndex + 1}`);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100dvh', width: '100dvw', flexDirection: 'column' }}>
      <Box sx={{ flex: 1, overflowY: 'auto', background: '#f9f8f8' }}>{children}</Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          padding: '16px 24px 24px 24px',
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          spacing={1}
        >
          <IconButton
            id='settings-button'
            aria-controls={open ? 'settings-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <SettingsIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
          </IconButton>
          <Menu
            id='settings-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleGoHome}>홈으로 가기</MenuItem>
            <MenuItem onClick={handleSetLargeFont}>큰 글씨 보기</MenuItem>
            <MenuItem onClick={handleSetNormalFont}>보통 글씨 보기</MenuItem>
          </Menu>

          <Button
            variant='text'
            color='secondary'
            onClick={handleClickPrev}
            disabled={currentIndex === 1}
          >
            이전 문항
          </Button>
        </Stack>

        <Button
          variant='contained'
          color='secondary'
          onClick={handleClickNext}
        >
          다음 문항
        </Button>
      </Box>
    </Box>
  );
}
