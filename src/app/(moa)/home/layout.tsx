'use client';
import { Box, Paper, Typography, ListItemText, Stack } from '@mui/material';
import Logo from '@/components/logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { text: '인지 재활 서비스', path: '/service' },
  { text: '고객 관리', path: '/customer' },
  { text: '재활 자료 관리', path: '/contents' },
  { text: '방문 일정 조회', path: '/schedule' },
];

export default function SideBarLayout({
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
          boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
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

          <Stack component='ul'>
            {menuItems.map((item) => {
              const isActive = pathname.startsWith('/home' + item.path);
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
                      padding: '10px 20px',
                      backgroundColor: isActive ? 'primary.light' : 'transparent',
                      color: isActive ? 'primary.main' : 'inherit',
                      '&:hover': {
                        backgroundColor: isActive ? 'primary.light' : 'rgba(0, 0, 0, 0.04)',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      sx={{
                        '& .MuiTypography-root': {
                          fontSize: '16px',
                          fontWeight: isActive ? 600 : 400,
                        },
                      }}
                    />
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
