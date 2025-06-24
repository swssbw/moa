'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Button, Divider, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import SectionTitle from '../SectionTitle';
import { useState } from 'react';
import { Description, Instruction } from '../Instruction';
import SectionCard from '../SectionCard';
import { ContentButton } from '../ContentButton';
import FullScreenModal from '../FullScreenModal';
import { CardSwiperContainer } from '../SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import SquareRadioGroup from '../SquaredRadio';

export default function ADAS08() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const [contentModalOpen, setContentModalOpen] = useState(false);
  const [targetWords, setTargetWords] = useState<string[]>([]);

  const handleClickOpen = (type: string) => {
    if (type === 'answer') {
      const answerWords = data?.items[0].content.filter((item) => item.isAnswer).map((item) => item.name) || [];
      setTargetWords(answerWords);
    }

    if (type === 'test') {
      const testWords = data?.items[0].content.map((item) => item.name) || [];
      setTargetWords(testWords);
    }

    setContentModalOpen(true);
  };

  const handleClose = () => {
    setContentModalOpen(false);
  };

  if (!data) return;

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
              title='단어 카드 열기'
              handleClickOpen={() => handleClickOpen('answer')}
            />
            <ContentButton
              color='success'
              title='재인 검사 하기'
              handleClickOpen={() => handleClickOpen('test')}
            />
          </Stack>
        </SectionCard>

        <Divider variant='middle' />

        <Unresolved data={data} />
      </Stack>

      <FullScreenModal
        handleClose={() => {
          handleClose();
        }}
        open={contentModalOpen}
      >
        <CardSwiperContainer>
          {targetWords.map((word, index: number) => (
            <SwiperSlide key={index}>
              <Stack
                sx={{
                  height: '80%',
                  width: '100%',
                  p: 5,
                }}
                justifyContent='center'
                alignItems='center'
              >
                <Stack
                  height='100%'
                  justifyContent='center'
                >
                  <Typography
                    variant='h1'
                    sx={{ fontSize: '3rem', fontWeight: 'bold' }}
                  >
                    {word}
                  </Typography>
                </Stack>

                <Button onClick={() => alert('1234')}>1234</Button>
                <SquareRadioGroup></SquareRadioGroup>
              </Stack>
            </SwiperSlide>
          ))}
        </CardSwiperContainer>
      </FullScreenModal>
    </>
  );
}
