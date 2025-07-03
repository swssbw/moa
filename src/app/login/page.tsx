'use client';
import { useState } from 'react';

import { Box, Stack, TextField, Button, Typography } from '@mui/material';

import Logocopy from '@/components/logo';
import { useGlobalStore } from '@/hooks/globalStore';

export default function Home() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const setManagerInfo = useGlobalStore((state) => state.setManagerInfo);

  const handleLoginClick = () => {
    setManagerInfo({ name: id, id });
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100dvh'
      position='relative'
      sx={{ backgroundColor: '#fdfbf6', overflow: 'hidden' }}
    >
      <div className='wave-container'>
        <div className='wave wave1' />
        <div className='wave wave2' />
        <div className='wave wave3' />
      </div>

      {/* <div className='custom-wave-bg' /> */}
      {/* ✅ 로그인 카드 */}
      <Stack
        p={5}
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.47)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderRadius: '20px',
          zIndex: 4,
        }}
      >
        <Stack
          gap={2}
          alignItems='center'
          sx={{ width: '280px', zIndex: 1 }}
        >
          <Stack alignItems='center'>
            <Logocopy />
            <Typography
              variant='h1'
              sx={{
                fontFamily: 'HakgyoansimDunggeunmiso',
                color: '#707070',
                fontSize: '3rem',
              }}
            >
              Moa
            </Typography>
          </Stack>
          <TextField
            type='text'
            label='아이디'
            variant='outlined'
            fullWidth
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            type='password'
            label='비밀번호'
            variant='outlined'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            href='/service'
            variant='contained'
            fullWidth
            size='medium'
            onClick={handleLoginClick}
          >
            로그인
          </Button>
        </Stack>
      </Stack>

      {/* ✅ 파도 스타일 */}
      <style jsx>{`
        .custom-wave-bg {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 500px;
          /* background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1440 590' xmlns='http://www.w3.org/2000/svg'><path d='M 0,600 L 0,112 C 123.61722488038276,96.9377990430622 247.23444976076553,81.87559808612441 329,81 C 410.76555023923447,80.12440191387559 450.67942583732054,93.43540669856459 548,107 C 645.3205741626795,120.56459330143541 800.0478468899523,134.38277511961724 902,131 C 1003.9521531100477,127.61722488038278 1053.1291866028707,107.03349282296652 1134,101 C 1214.8708133971293,94.96650717703348 1327.4354066985647,103.48325358851673 1440,112 L 1440,600 L 0,600 Z' fill='%23beeae7' fill-opacity='0.4' /><path d='M 0,600 L 0,262 C 109.88516746411483,278.9569377990431 219.77033492822966,295.9138755980861 310,276 C 400.22966507177034,256.0861244019139 470.8038277511962,199.30143540669852 565,209 C 659.1961722488038,218.69856459330148 777.0143540669856,294.88038277511964 888,304 C 998.9856459330144,313.11961722488036 1103.1387559808613,255.17703349282294 1194,237 C 1284.8612440191387,218.82296650717706 1362.4306220095693,240.41148325358853 1440,262 L 1440,600 L 0,600 Z' fill='%23beeae7' fill-opacity='0.53' /><path d='M 0,600 L 0,412 C 91.95215311004785,402.60287081339715 183.9043062200957,393.2057416267943 288,399 C 392.0956937799043,404.7942583732057 508.33492822966514,425.7799043062201 617,429 C 725.6650717703349,432.2200956937799 826.755980861244,417.67464114832535 910,404 C 993.244019138756,390.32535885167465 1058.641148325359,377.52153110047846 1144,379 C 1229.358851674641,380.47846889952154 1334.6794258373207,396.2392344497608 1440,412 L 1440,600 L 0,600 Z' fill='%23beeae7' fill-opacity='1' /></svg>"); */
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1440 590' xmlns='http://www.w3.org/2000/svg'><path d='M 0,600 L 0,150 C 118.09569377990434,136.58373205741628 236.19138755980867,123.16746411483254 330,115 C 423.8086124401913,106.83253588516746 493.33014354066984,103.91387559808612 591,120 C 688.6698564593302,136.08612440191388 814.488038277512,171.17703349282294 898,193 C 981.511961722488,214.82296650717706 1022.7177033492821,223.37799043062202 1106,214 C 1189.2822966507179,204.62200956937798 1314.641148325359,177.31100478468898 1440,150 L 1440,600 L 0,600 Z' fill='%23beeae7' fill-opacity='0.53' /><path d='M 0,600 L 0,350 C 93.93301435406698,336.82296650717706 187.86602870813397,323.64593301435406 296,302 C 404.13397129186603,280.35406698564594 526.468899521531,250.23923444976083 618,278 C 709.531100478469,305.76076555023917 770.2583732057418,391.39712918660285 855,390 C 939.7416267942582,388.60287081339715 1048.4976076555024,300.17224880382776 1150,279 C 1251.5023923444976,257.82775119617224 1345.751196172249,303.9138755980861 1440,350 L 1440,600 L 0,600 Z' fill='%23beeae7' fill-opacity='1' /></svg>");
          background-size: cover;
          background-size: cover;
          background-position: bottom;
          background-repeat: no-repeat;
          z-index: 0;
        }

        .wave-container {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 40vh;
          z-index: 0;
        }

        .wave {
          position: absolute;
          bottom: 0;
          width: 200%;
          height: 100%;
          background-repeat: repeat-x;
          background-position: 0 bottom;
          background-size: cover;
        }

        .wave1 {
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 100' xmlns='http://www.w3.org/2000/svg'><path fill='%23BEEAE7' d='M0,30 Q300,80 600,30 T1200,30 V100 H0 Z'/></svg>");
          animation: waveMove 10s linear infinite;
          z-index: 3;
          opacity: 0.6;
        }

        .wave2 {
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 100' xmlns='http://www.w3.org/2000/svg'><path fill='%23D3F1EF' d='M0,40 Q300,20 600,40 T1200,40 V100 H0 Z'/></svg>");
          animation: waveMove 16s linear infinite reverse;
          bottom: 20px;
          opacity: 0.4;
          z-index: 2;
        }

        .wave3 {
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 100' xmlns='http://www.w3.org/2000/svg'><path fill='%23F0FAF9' d='M0,20 Q300,50 600,20 T1200,20 V100 H0 Z'/></svg>");
          animation: waveMove 22s linear infinite;
          bottom: 40px;
          opacity: 0.3;
          z-index: 1;
        }

        @keyframes waveMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
}
