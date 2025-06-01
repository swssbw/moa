import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import PeopleAltRounded from '@mui/icons-material/PeopleAltRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import PsychologyRounded from '@mui/icons-material/PsychologyRounded';
import Nl2br from '@/components/Nl2br';

const menuItems = [
  {
    title: '고객/콘텐츠 관리',
    // description: '고객 정보와 콘텐츠를 효율적으로 관리하세요',
    href: '/home/customer',
    icon: PeopleAltRounded,
    size: 6,
  },
  {
    title: '방문 관리',
    // description: '방문 일정을 체계적으로 관리하세요',
    href: '/home/schedule',
    icon: CalendarMonthRounded,
    size: 6,
  },
  {
    title: '인지재활 서비스 시작하기',
    // description: '체계적인 인지재활 서비스를 시작해보세요',
    href: '/service',
    icon: PsychologyRounded,
    size: 12,
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
          variant='h4'
          textAlign={'center'}
          sx={{
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: 700,
          }}
        >
          <Nl2br>안녕하세요! \n홍길동 매니저님</Nl2br>
        </Typography>

        <Typography
          variant='h6'
          textAlign={'center'}
          sx={{
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: 500,
          }}
        >
          오늘도 활기차게 시작해볼까요?
        </Typography>
      </Stack>

      <Grid
        container
        width={640}
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
                <CardContent sx={{ p: '24px' }}>
                  <Stack gap={1}>
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
