import { Card, CardContent, Grid, MenuItem, Select, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import SpeedIcon from '@mui/icons-material/Speed';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

const menuItems = [
  {
    title: '진단하기',
    // description: '고객 정보와 콘텐츠를 효율적으로 관리하세요',
    href: '/home/service/test',
    icon: SpeedIcon,
    size: 6,
  },
  {
    title: '재활하기',
    // description: '방문 일정을 체계적으로 관리하세요',
    href: '/home/service/rehab',
    icon: DirectionsWalkIcon,
    size: 6,
  },
];

export default function Home() {
  return (
    <Stack
      sx={{ height: '100%' }}
      justifyContent={'center'}
      alignItems={'center'}
      gap={4}
    >
      <Stack gap={1}>
        <Typography
          variant='h5'
          textAlign={'center'}
          sx={{
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: 700,
          }}
        >
          대상자를 선택해주세요.
        </Typography>

        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          // value={age}
          label='이름'
          // onChange={handleChange}
        >
          <MenuItem value={10}>김길동</MenuItem>
          <MenuItem value={20}>이길동</MenuItem>
          <MenuItem value={30}>박길동</MenuItem>
        </Select>
      </Stack>

      <Grid
        container
        width={560}
        spacing={2}
      >
        {menuItems.map((item) => (
          <Grid
            key={item.href}
            size={item.size}
          >
            <Link href={item.href}>
              <Card
                elevation={0}
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '16px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
              >
                <CardContent sx={{ p: '24px', height: 240 }}>
                  <Stack
                    gap={1}
                    height={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <item.icon
                      sx={{
                        fontSize: 40,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    />
                    <Typography
                      variant='h5'
                      sx={{
                        color: 'secondary.main',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
