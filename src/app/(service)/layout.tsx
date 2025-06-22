'use client';

import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import { data as examine1 } from '@/data/examine1';
import { useRouter } from 'next/navigation';
import { Box, Button, Stack, IconButton, Menu, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  const { goToNext, goToPrevious, currentIndex, setBaseFontSize } = useDiagnosisStore();
  const router = useRouter();
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

  return (
    <Box sx={{ display: 'flex', height: '100dvh', width: '100dvw', flexDirection: 'column' }}>
      <Box sx={{ flex: 1, overflowY: 'auto', background: '#fdfbf6' }}>{children}</Box>

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
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            sx={{ width: '80px' }}
          >
            이전 문항
          </Button>
        </Stack>

        {currentIndex < examine1.length - 1 ? (
          <Button
            variant='contained'
            onClick={goToNext}
          >
            다음 문항
          </Button>
        ) : (
          <Button
            variant='contained'
            onClick={() => {
              alert('검사완료');
            }}
          >
            완료
          </Button>
        )}
      </Box>
    </Box>
  );
}
