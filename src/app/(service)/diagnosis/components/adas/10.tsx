'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Button, Divider, Grid, LinearProgress, Stack, TextField, Typography } from '@mui/material';
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

  const [contentModalOpen, setContentModalOpen] = useState(false);
  const [clickedIndexes, setClickedIndexes] = useState<Set<number>>(new Set());

  const initialGameData = {
    type: '',
    totalTime: 0,
    targetList: [],
    numberList: [],
    gridCols: 0,
  };

  const [gameData, setGameData] = useState<{
    type: string;
    totalTime: number;
    numberList: string[];
    targetList: string[];
    gridCols: number;
  }>(initialGameData);
  const [gameResult, setGameResult] = useState({
    correct: 0,
    wrong: 0,
  });
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 타이머 작동
  useEffect(() => {
    if (started && timeLeft === 0) {
      alert('⏰ 시간 종료!');
    }

    if (!started || timeLeft <= 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, timeLeft]);

  useEffect(() => {
    if (!contentModalOpen) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  }, [contentModalOpen]);

  if (!data) return;

  const practiceTargetList = data.items[0].content[0].name.split(' ');
  const practiceNumberList = data.items[0].content[1].name.split(' ');
  const testTargetList = data.items[1].content[0].name.split(' ');
  const testNumberList = data.items[1].content[1].name.split(' ');

  // 게임시작
  const handleStart = () => {
    setClickedIndexes(new Set());
    setTimeLeft(gameData.totalTime);
    setStarted(true);
  };

  // 숫자 셀 클릭
  const handleClick = (type: string, index: number) => {
    const newSet = new Set(clickedIndexes);
    if (clickedIndexes.has(index)) return;
    newSet.add(index);
    setClickedIndexes(newSet);
  };

  // 결과 계산
  const getResults = () => {
    if (gameData.type !== 'test') return;

    const selectedNumbers = [...clickedIndexes].map((i) => testNumberList[i]);
    const correct = selectedNumbers.filter((n) => testTargetList.includes(n)).length;
    const wrong = selectedNumbers.length - correct;

    setGameResult({
      correct,
      wrong,
    });
  };

  const handleClickOpen = (type: string) => {
    setDataByType(type);
    setContentModalOpen(true);
  };

  const setDataByType = (type: string) => {
    if (type === 'practice') {
      setGameData({
        type,
        totalTime: 30,
        targetList: practiceTargetList,
        numberList: practiceNumberList,
        gridCols: 5,
      });
    }

    if (type === 'test') {
      setGameData({
        type,
        totalTime: 45,
        targetList: testTargetList,
        numberList: testNumberList,
        gridCols: 12,
      });
    }
  };

  const handleResetClick = () => {
    setClickedIndexes(new Set());
    setGameData(initialGameData);
    setStarted(false);
    setTimeLeft(0);
  };

  const handleClose = () => {
    setContentModalOpen(false);
    handleResetClick();
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

          <Stack
            direction='row'
            gap={3}
          >
            <ContentButton
              title='숫자 지우기 - 연습하기'
              handleClickOpen={() => handleClickOpen('practice')}
            />
            <ContentButton
              color='success'
              title='숫자 지우기 - 검사하기'
              handleClickOpen={() => handleClickOpen('test')}
            />
          </Stack>
        </SectionCard>

        <Divider variant='middle' />
        <SectionCard>
          <Typography
            variant='h6'
            gutterBottom
          >
            답안 입력
          </Typography>
          <Stack>
            <Grid
              container
              spacing={2}
              sx={{ p: 1, borderBottom: '1px solid #ddd' }}
            >
              <Grid size={6}>
                <Typography
                  align='right'
                  fontWeight='bold'
                >
                  목표 숫자를 지운 수
                </Typography>
              </Grid>

              <Grid size={6}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  {gameResult.correct}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{ p: 1, borderBottom: '1px solid #ddd' }}
            >
              <Grid size={6}>
                <Typography
                  align='right'
                  fontWeight='bold'
                >
                  (목표 숫자가 아닌 숫자를 지운 수)틀린 숫자를 지운 수
                </Typography>
              </Grid>

              <Grid size={6}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  {gameResult.wrong}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{ p: 1, borderBottom: '1px solid #ddd' }}
            >
              <Grid size={6}>
                <Typography
                  align='right'
                  fontWeight='bold'
                >
                  검사를 다시 알려준 횟수
                </Typography>
              </Grid>
              <Grid size={6}>
                <Stack alignItems='center'>
                  <TextField
                    size='small'
                    sx={{ width: '120px' }}
                    slotProps={{
                      htmlInput: { style: { textAlign: 'center' } },
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </SectionCard>
        <Unresolved data={data} />
      </Stack>

      <FullScreenModal
        handleClose={handleClose}
        open={contentModalOpen}
      >
        <Stack
          gap={3}
          alignItems='center'
        >
          <Stack>
            {!started ? (
              <Button
                startIcon={<PlayArrowIcon />}
                variant='contained'
                color='secondary'
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
            {gameData.targetList[0]} 및 {gameData.targetList[1]}을 지워보세요.
          </Typography>

          <Stack>
            <LinearProgress
              variant='determinate'
              value={(timeLeft / gameData.totalTime) * 100}
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
              columns={gameData.gridCols}
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
              {gameData.numberList.map((num, index) => (
                <Grid
                  size={0.5}
                  key={index}
                  onClick={() => handleClick(gameData.type, index)}
                >
                  <Stack
                    alignItems='center'
                    justifyContent='center'
                    sx={{
                      fontFamily: 'Maplestory',
                      fontSize: '24px',
                      cursor: 'pointer',
                      color: clickedIndexes.has(index) ? '#eee' : 'black',
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
