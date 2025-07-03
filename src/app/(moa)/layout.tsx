// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// import { Box, Typography, Stack } from '@mui/material';

// import Logo from '@/components/logo';

// const menuItems = [
//   { text: '인지 재활 서비스', path: '/service' },
//   { text: '고객 관리', path: '/customer' },
//   { text: '재활 자료 관리', path: '/contents' },
//   { text: '방문 일정 조회', path: '/schedule' },
// ];

// export default function MoaLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();

//   return (
//     <Stack
//       direction='row'
//       sx={{
//         width: '100%',
//         height: '100%',
//         overflow: 'hidden',
//       }}
//     >
//       {/* 사이드바 */}
//       <Stack
//         sx={{
//           width: 240,
//           height: '100%',
//           backgroundColor: '#fdfbf6',
//           borderRight: '1px solid #ddd',
//           padding: '20px 0',
//           flexShrink: 0,
//         }}
//       >
//         <Stack gap={2}>
//           <Stack alignItems='center'>
//             <Logo />
//             <Typography
//               variant='h4'
//               sx={{ fontFamily: 'HakgyoansimDunggeunmiso', color: '#707070' }}
//             >
//               모아
//             </Typography>
//           </Stack>

//           <Stack
//             component='ul'
//             sx={{ padding: '12px', gap: 1 }}
//           >
//             {menuItems.map((item) => {
//               const isActive = pathname.startsWith(item.path);

//               return (
//                 <Link
//                   href={item.path}
//                   key={item.path}
//                   style={{
//                     textDecoration: 'none',
//                     color: 'inherit',
//                   }}
//                 >
//                   <Stack
//                     component='li'
//                     sx={{
//                       borderRadius: '16px',
//                       padding: '12px 20px',
//                       backgroundColor: isActive ? '#E9F5F4' : 'transparent',
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         fontWeight: 600,
//                       }}
//                     >
//                       {item.text}
//                     </Typography>
//                   </Stack>
//                 </Link>
//               );
//             })}
//           </Stack>
//         </Stack>
//       </Stack>

//       {/* 콘텐트 영역 */}
//       <Box
//         sx={{
//           flex: 1,
//           height: '100%',
//           overflow: 'auto',
//           padding: '40px',
//         }}
//       >
//         {children}
//       </Box>
//     </Stack>
//   );
// }

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Box, Typography, Stack } from '@mui/material';

const menuItems = [
  { text: '인지 재활 서비스', path: '/service' },
  { text: '고객 관리', path: '/customer' },
  { text: '재활 자료 관리', path: '/contents' },
  { text: '방문 일정 조회', path: '/schedule' },
];

export default function MoaLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Stack
      direction='column'
      sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}
    >
      {/* ✅ 상단 네비게이션 바 */}
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        sx={{
          height: '60px',
          padding: '0 24px',
          backgroundColor: '#fdfbf6',
          borderBottom: '1px solid #ddd',
          flexShrink: 0,
        }}
      >
        {/* 텍스트 로고만 */}
        <Typography
          variant='h5'
          sx={{
            fontFamily: 'HakgyoansimDunggeunmiso',
            color: '#707070',
            position: 'absolute',
            left: '24px',
          }}
        >
          모아
        </Typography>

        {/* 메뉴 목록 */}
        <Stack
          direction='row'
          gap={2}
        >
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link
                href={item.path}
                key={item.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Box
                  sx={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? '#E9F5F4' : 'transparent',
                    transition: 'background 0.2s',
                  }}
                >
                  <Typography fontWeight={600}>{item.text}</Typography>
                </Box>
              </Link>
            );
          })}
        </Stack>
      </Stack>

      {/* ✅ 콘텐츠 영역 */}
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          overflow: 'auto',
          padding: '40px',
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}
