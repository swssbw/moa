import { Card, CardContent, Stack, Typography } from '@mui/material';
import Link from 'next/link';
// import PeopleAltRounded from '@mui/icons-material/PeopleAltRounded';
// import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
// import PsychologyRounded from '@mui/icons-material/PsychologyRounded';
import Nl2br from '@/components/Nl2br';

// const menuItems = [
//   {
//     title: '고객/콘텐츠 관리',
//     href: '/home/customer',
//     icon: PeopleAltRounded,
//     size: 6,
//   },
//   {
//     title: '방문 관리',
//     href: '/home/schedule',
//     icon: CalendarMonthRounded,
//     size: 6,
//   },
//   {
//     title: '인지재활 서비스 시작하기',
//     href: '/service',
//     icon: PsychologyRounded,
//     size: 12,
//   },
// ];

export default function Home() {
  return (
    <Stack
      flex={1}
      minHeight={'100%'}
      // justifyContent={'center'}
      // alignItems={'center'}
      gap={4}
      width={'100%'}
    >
      <Stack gap={1}>
        <Typography
          variant='h4'
          // textAlign={'center'}
          sx={{
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: 700,
          }}
        >
          <Nl2br>안녕하세요! 홍길동 매니저님</Nl2br>
        </Typography>

        <Typography
          variant='h6'
          // textAlign={'center'}
          sx={{
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: 500,
          }}
        >
          오늘도 활기차게 시작해볼까요?
        </Typography>
      </Stack>

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

      {/* <Grid
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
      </Grid> */}
    </Stack>
  );
}
