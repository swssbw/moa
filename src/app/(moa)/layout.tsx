'use client';

import Logo from '@/components/logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Typography, Stack, Paper } from '@mui/material';

const menuItems = [
  { text: '인지 재활 서비스', path: '/service' },
  { text: '고객 관리', path: '/customer' },
  { text: '재활 자료 관리', path: '/contents' },
  { text: '방문 일정 조회', path: '/schedule' },
];

export default function MoaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <Stack
      direction='row'
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {/* 사이드바 */}
      <Paper
        elevation={3}
        sx={{
          width: 240,
          height: '100%',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #ddd',
          padding: '20px 0',
          flexShrink: 0,
        }}
      >
        <Stack gap={2}>
          <Stack alignItems={'center'}>
            <Logo />
            <Typography
              variant='h4'
              sx={{ fontFamily: 'HakgyoansimDunggeunmiso', color: '#707070' }}
            >
              Moa
            </Typography>
          </Stack>

          <Stack
            component='ul'
            sx={{ padding: '12px', gap: 1 }}
          >
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.path);

              return (
                <Link
                  href={item.path}
                  key={item.path}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <Stack
                    component='li'
                    sx={{
                      borderRadius: '16px',
                      padding: '12px 20px',
                      backgroundColor: isActive ? '#70b1ab5c' : 'transparent',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: isActive ? 700 : 400,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                </Link>
              );
            })}
          </Stack>
        </Stack>
      </Paper>

      {/* 콘텐트 영역 */}
      <Box
        sx={{
          background: '#fdfbf6',
          flex: 1,
          height: '100%',
          overflow: 'auto',
          padding: '40px',
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}
