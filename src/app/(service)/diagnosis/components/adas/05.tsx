'use client';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import {
  Checkbox,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { ComponentWithModal } from '../WordSlider';
import SectionCard from '../SectionCard';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ContentButton } from '../ContentButton';

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
          <Typography variant='h5'>
            {data.cognitiveId}. {data.cognitiveName}
          </Typography>

          <Typography variant='h6'>
            {data.cognitiveId}.1 {data.items[0].name}
          </Typography>

          {data.items[0].description.map((desc, idx) => (
            <Typography
              key={idx}
              color='text.secondary'
            >
              {desc}
            </Typography>
          ))}
          {data.items[0].instructions.map((instruction, idx) => (
            <Stack
              spacing={0.5}
              key={idx}
            >
              <Typography fontWeight='bold'>{instruction.situation}</Typography>
              <Typography
                sx={{
                  pl: 1,
                  borderLeft: '2px solid',
                  borderColor: 'grey.300',
                  fontStyle: 'italic',
                }}
              >
                {instruction.script}
              </Typography>
            </Stack>
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
          <Typography variant='h6'>
            {data.cognitiveId}.2 {data.items[0].name}
          </Typography>

          {data.items[1].description.map((desc, idx) => (
            <Typography
              key={idx}
              color='text.secondary'
            >
              {desc}
            </Typography>
          ))}
          {data.items[1].instructions.map((instruction, idx) => (
            <Stack
              spacing={0.5}
              key={idx}
            >
              <Typography fontWeight='bold'>{instruction.situation}</Typography>
              <Typography
                sx={{
                  pl: 1,
                  borderLeft: '2px solid',
                  borderColor: 'grey.300',
                  fontStyle: 'italic',
                }}
              >
                {instruction.script}
              </Typography>
            </Stack>
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
      <ComponentWithModal
        handleClose={() => {
          handleClose();
        }}
        open={contentModalOpen}
      >
        <Stack alignItems='center'>
          <Stack
            direction='row'
            alignItems='center'
            width='800px'
            height='550px'
          >
            <IconButton
              className='custom_prev'
              size='large'
              sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', boxShadow: 1 }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <Swiper
              pagination={{
                el: '.custom_pagination',
                type: 'fraction',
              }}
              loop={true}
              effect={'cards'}
              modules={[Navigation, EffectCards, Pagination]}
              navigation={{
                nextEl: '.custom_next',
                prevEl: '.custom_prev',
              }}
              className='thing-slide'
            >
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
            </Swiper>

            <IconButton
              className='custom_next'
              size='large'
              sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', boxShadow: 1 }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
          <div
            className='custom_pagination'
            style={{ textAlign: 'center', fontSize: '0.875rem', marginBottom: '4px', zIndex: 101, color: 'white' }}
          />
        </Stack>
      </ComponentWithModal>
    </>
  );
}
