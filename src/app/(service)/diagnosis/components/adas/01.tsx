'use client';

import FullScreenModal from '../FullScreenModal';
import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Stack, Typography, Checkbox, FormControlLabel, TextField, Grid, Divider } from '@mui/material';
import { useParams } from 'next/navigation';
import SectionCard from '../SectionCard';
import { ContentButton } from '../ContentButton';
import { useState } from 'react';
import { Instruction } from '../Instruction';
import SectionTitle from '../SectionTitle';
import { CardSwiperContainer } from '../SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { useADASStore } from '@/hooks/adasStore';

export default function ADAS01() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const [contentModalOpen, setContentModalOpen] = useState(false);

  const { answer1, setAnswer1 } = useADASStore();

  const handleClickOpen = () => {
    setContentModalOpen(true);
  };

  const handleClose = () => {
    setContentModalOpen(false);
  };

  const handleWordCheck = (word: string, checked: boolean) => {
    const updated = new Set(answer1);
    if (checked) {
      updated.add(word);
    } else {
      updated.delete(word);
    }
    setAnswer1([...updated]);
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

          {data.items[0].instructions.map((item) => (
            <Instruction
              item={item}
              key={item.situation}
            />
          ))}

          <ContentButton
            title='단어 카드 열기'
            handleClickOpen={handleClickOpen}
          />
        </SectionCard>

        <SectionCard>
          <Typography
            variant='h6'
            gutterBottom
          >
            답안 입력
          </Typography>

          <Grid container>
            {data.items[0].content.map((word, index) => (
              <Grid
                size={6}
                key={index}
              >
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      name={word.name}
                      checked={answer1.includes(word.name)}
                      onChange={(_, checked) => handleWordCheck(word.name, checked)}
                    />
                  }
                  label={<Typography component='span'>{word.name}</Typography>}
                />
              </Grid>
            ))}
          </Grid>

          <Stack mt={2}>
            <FormControlLabel
              control={<Checkbox />}
              label={<Typography component='span'>회상한 단어 없음</Typography>}
            />

            <TextField
              placeholder='대상자 답변이나 목록에 없는 단어를 기록할 수 있습니다.'
              multiline
              rows={3}
              fullWidth
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
          {data.items[0].content.map((item, index: number) => (
            <SwiperSlide key={index}>
              <Typography
                variant='h1'
                sx={{ fontSize: '3rem', fontWeight: 'bold' }}
              >
                {item.name}
              </Typography>
            </SwiperSlide>
          ))}
        </CardSwiperContainer>
      </FullScreenModal>
    </>
  );
}
