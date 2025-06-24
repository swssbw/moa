'use client';

import { SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Checkbox, Divider, Grid, Stack, TextField, Typography, Switch, FormControlLabel } from '@mui/material';
import FullScreenModal from '../FullScreenModal';
import SectionCard from '../SectionCard';
import { useState } from 'react';
import { ContentButton } from '../ContentButton';
import SectionTitle, { SectionSubTitle } from '../SectionTitle';
import { Description, Instruction } from '../Instruction';
import { CardSwiperContainer } from '../SwiperContainer';

export default function ADAS05() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);
  console.log(data);

  const [contentModalOpen, setContentModalOpen] = useState(false);

  const handleClickOpen = () => {
    setContentModalOpen(true);
  };

  const handleClose = () => {
    setContentModalOpen(false);
  };

  const [hintMap, setHintMap] = useState<Record<number, boolean>>({});

  const toggleHint = (index: number) => {
    setHintMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
          <SectionSubTitle title={`${data.cognitiveId}.1 ${data.items[0].name}`} />

          {data.items[0].description.map((item) => (
            <Description
              item={item}
              key={item}
            />
          ))}

          {data.items[0].instructions.map((item) => (
            <Instruction
              item={item}
              key={item.situation}
            />
          ))}

          <ContentButton
            title='물건 카드 열기'
            handleClickOpen={handleClickOpen}
          />
        </SectionCard>

        {/* 5-1 채점 */}
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
              sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.200' }}
            >
              <Grid size={3}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  사물
                </Typography>
              </Grid>
              <Grid size={5}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  답변
                </Typography>
              </Grid>
              <Grid size={2}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  정답
                </Typography>
              </Grid>
              <Grid size={2}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  오답
                </Typography>
              </Grid>
            </Grid>

            {/* 데이터 행 */}
            {data.items[0].content.map((item, idx) => (
              <Grid
                container
                spacing={2}
                key={idx}
                alignItems='center'
                sx={{ p: 1, borderBottom: '1px solid #ddd', pb: 1 }}
              >
                <Grid size={3}>
                  <Typography fontWeight='bold'>{item.name}</Typography>
                </Grid>
                <Grid size={5}>
                  <TextField
                    size='small'
                    fullWidth
                    // value={item.answer || ''}
                    // onChange={(e) => handleAnswerChange(idx, e.target.value)}
                  />
                </Grid>
                <Grid size={2}>
                  <Stack alignItems='center'>
                    <Checkbox
                    // checked={item.isCorrect || false}
                    // onChange={(e) => handleCheck(idx, 'isCorrect', e.target.checked)}
                    />
                  </Stack>
                </Grid>
                <Grid size={2}>
                  <Stack alignItems='center'>
                    <Checkbox
                    // checked={item.isCorrect || false}
                    // onChange={(e) => handleCheck(idx, 'isCorrect', e.target.checked)}
                    />
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </SectionCard>

        <Divider variant='middle' />

        <SectionCard>
          <SectionSubTitle title={`${data.cognitiveId}.1 ${data.items[1].name}`} />

          {data.items[1].description.map((item) => (
            <Description
              item={item}
              key={item}
            />
          ))}
          {data.items[1].instructions.map((item) => (
            <Instruction
              item={item}
              key={item.situation}
            />
          ))}
        </SectionCard>

        {/* 5-2 채점 */}
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
              sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.200' }}
            >
              <Grid size={3}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  손가락
                </Typography>
              </Grid>
              <Grid size={5}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  답변
                </Typography>
              </Grid>
              <Grid size={2}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  정답
                </Typography>
              </Grid>
              <Grid size={2}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  오답
                </Typography>
              </Grid>
            </Grid>

            {/* 데이터 행 */}
            {data.items[1].content.map((item, idx) => (
              <Grid
                container
                spacing={2}
                key={idx}
                alignItems='center'
                sx={{ p: 1, borderBottom: '1px solid #ddd', pb: 1 }}
              >
                <Grid size={3}>
                  <Typography fontWeight='bold'>{item.name}</Typography>
                </Grid>
                <Grid size={5}>
                  <TextField
                    size='small'
                    fullWidth
                    // value={item.answer || ''}
                    // onChange={(e) => handleAnswerChange(idx, e.target.value)}
                  />
                </Grid>
                <Grid size={2}>
                  <Stack alignItems='center'>
                    <Checkbox
                    // checked={item.isCorrect || false}
                    // onChange={(e) => handleCheck(idx, 'isCorrect', e.target.checked)}
                    />
                  </Stack>
                </Grid>
                <Grid size={2}>
                  <Stack alignItems='center'>
                    <Checkbox
                    // checked={item.isCorrect || false}
                    // onChange={(e) => handleCheck(idx, 'isCorrect', e.target.checked)}
                    />
                  </Stack>
                </Grid>
              </Grid>
            ))}
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
              <Stack
                alignItems='center'
                sx={{ p: 3 }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      checked={!!hintMap[index]}
                      onChange={() => toggleHint(index)}
                    />
                  }
                  label='힌트 보기'
                />
                <Image
                  src={item.src as string}
                  alt={item.hint}
                  width={200}
                  height={250}
                />
                <Typography sx={{ height: '30px', color: 'text.secondary' }}>
                  {!!hintMap[index] && item.hint}
                </Typography>
                <TextField placeholder='답변 입력' />
              </Stack>
            </SwiperSlide>
          ))}
        </CardSwiperContainer>
      </FullScreenModal>
    </>
  );
}
