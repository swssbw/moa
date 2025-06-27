'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Button, Divider, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';
import { Description, Instruction } from '../Instruction';
import { ContentButton } from '../ContentButton';
import { useEffect, useRef, useState } from 'react';
import FullScreenModal from '../FullScreenModal';
import RefreshIcon from '@mui/icons-material/Refresh';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function ADAS10() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const [practiceModalOpen, setPracticeModalOpen] = useState(false);
  const [practiceClickedIndexes, setPracticeClickedIndexes] = useState<Set<number>>(new Set());
  const [testClickedIndexs, setTestClickedIndexes] = useState<Set<number>>(new Set());

  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const totalTime = 30;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // 타이머 작동
  useEffect(() => {
    if (!started || timeLeft <= 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, timeLeft]);

  useEffect(() => {
    if (!practiceModalOpen) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  }, [practiceModalOpen]);

  // 시간 종료되면 자동 제출
  useEffect(() => {
    if (timeLeft === 0 && started) {
      alert('⏰ 시간 종료! 게임이 자동으로 제출됩니다.');
    }
  }, [timeLeft, started]);

  if (!data) return;

  const handleStart = () => {
    setPracticeClickedIndexes(new Set());
    setTimeLeft(5);
    setStarted(true);
  };

  const practiceTargetList = data.items[0].content[0].name.split(' ');
  const practiceNumberList = data.items[0].content[1].name.split(' ');

  const handleClick = (type: string, index: number) => {
    if (practiceClickedIndexes.has(index)) return;

    const newSet = new Set(practiceClickedIndexes);
    newSet.add(index);
    setPracticeClickedIndexes(newSet);
  };

  const getResults = () => {
    // 클릭한 인덱스로부터 숫자 추출
    const selectedNumbers = [...practiceClickedIndexes].map((i) => practiceNumberList[i]);

    const correct = selectedNumbers.filter((n) => practiceTargetList.includes(n)).length;
    const wrong = selectedNumbers.length - correct;

    alert(`맞춘 개수: ${correct}, 틀린 개수: ${wrong}`);
  };

  const handleResetClick = () => {
    setPracticeClickedIndexes(new Set());
    setStarted(false);
    setTimeLeft(30);
  };

  const handleClickOpen = () => {
    setPracticeModalOpen(true);
  };

  const handleClose = () => {
    setPracticeModalOpen(false);
    getResults();
  };

  return (
    <>
      <Stack
        p={5}
        gap={3}
      >
        <SectionCard>
          <SectionTitle data={data} />

          <Description item={data.items[0].description.join(`\\n`)} />

          {data.items[0].instructions.map((item) => (
            <Instruction
              item={item}
              key={item.situation}
            />
          ))}

          <ContentButton
            title='숫자 지우기 - 연습하기'
            handleClickOpen={handleClickOpen}
          />
        </SectionCard>

        <Divider variant='middle' />

        <Unresolved data={data} />
      </Stack>

      <FullScreenModal
        handleClose={handleClose}
        open={practiceModalOpen}
      >
        <Stack
          gap={5}
          alignItems='center'
        >
          <Stack>
            {!started ? (
              <Button
                startIcon={<PlayArrowIcon />}
                variant='contained'
                onClick={handleStart}
              >
                시작하기
              </Button>
            ) : (
              <>
                <Button
                  startIcon={<RefreshIcon />}
                  color='secondary'
                  variant='outlined'
                  onClick={handleResetClick}
                >
                  다시하기
                </Button>
              </>
            )}
          </Stack>
          <Typography variant='h4'>
            {practiceTargetList?.[0]} 및 {practiceTargetList?.[1]}을 지워보세요.
          </Typography>

          <Stack>
            <LinearProgress
              variant='determinate'
              value={(timeLeft / totalTime) * 100}
              sx={{
                height: 10,
                borderRadius: 5,
                mb: 2,
                backgroundColor: '#f0f0f0',
                '& .MuiLinearProgress-bar': {
                  transition: 'width 1s linear',
                },
              }}
              color={timeLeft < 10 ? 'error' : 'secondary'}
            />
            <Grid
              columns={10}
              container
              sx={{
                background: '#FFF',
                '--Grid-borderWidth': '1px',
                borderTop: 'var(--Grid-borderWidth) solid',
                borderLeft: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
                '& > div': {
                  borderRight: 'var(--Grid-borderWidth) solid',
                  borderBottom: 'var(--Grid-borderWidth) solid',
                  borderColor: 'divider',
                },
              }}
            >
              {practiceNumberList?.map((num, index) => (
                <Grid
                  size={1}
                  key={index}
                  onClick={() => handleClick('practice', index)}
                >
                  <Stack
                    alignItems='center'
                    justifyContent='center'
                    sx={{
                      fontFamily: 'Maplestory',
                      fontSize: '56px',
                      cursor: 'pointer',
                      color: practiceClickedIndexes.has(index) ? '#eee' : 'black',
                    }}
                  >
                    {num}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </FullScreenModal>
    </>
  );
}
