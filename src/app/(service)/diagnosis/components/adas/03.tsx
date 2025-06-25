'use client';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';

import { data as examine1 } from '@/data/examine1';
import { Checkbox, Divider, FormControlLabel, Stack, Typography } from '@mui/material';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Unresolved from '../Unresolved';
import { useParams } from 'next/navigation';
import SectionCard from '../SectionCard';
import { ContentButton } from '../ContentButton';
import FullScreenModal from '../FullScreenModal';
import SectionTitle from '../SectionTitle';
import { Description, Instruction } from '../Instruction';
import SwiperContainer from '../SwiperContainer';

export default function ADAS03() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);

  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const canvasRefs = useRef<(ReactSketchCanvasRef | null)[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const handleScroingButtonCLick = async () => {
    const dataUrls: string[] = [];

    for (let i = 0; i < 4; i++) {
      const ref = canvasRefs.current[i];
      if (ref) {
        try {
          const data = await ref.exportImage('png');
          dataUrls.push(data);
        } catch (err) {
          console.log(err);
          dataUrls.push(''); // 비어있으면 빈 값
        }
      }
    }

    setImages(dataUrls);
  };

  const [contentModalOpen, setContentModalOpen] = useState(false);

  const handleClickOpen = () => {
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

          <ContentButton
            title='도형 그리기 열기'
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

          {images.map((img, idx) => (
            <Stack
              direction='row'
              key={idx}
            >
              <Stack>
                <Typography fontWeight='bold'>{data.items[0].content[idx].name}</Typography>
                <FormControlLabel
                  control={<Checkbox />}
                  label='정답'
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label='오답(최소1개 이상의 면/부분을 그림)'
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label='모든 면/부분이 식별 불가능'
                />
              </Stack>

              <Stack
                alignItems='center'
                sx={{ border: '1px solid #ddd' }}
              >
                <Typography
                  sx={{
                    width: '100%',
                    backgroundColor: 'grey.200',
                  }}
                  fontWeight='bold'
                  align='center'
                >
                  보기
                </Typography>

                <Image
                  src={data.items[0].content[idx].hint}
                  width={150}
                  height={150}
                  alt={data.items[0].content[idx].name}
                />
              </Stack>

              <Stack
                alignItems='center'
                sx={{ border: '1px solid #eee' }}
              >
                <Typography
                  sx={{
                    width: '100%',
                    backgroundColor: 'grey.200',
                  }}
                  fontWeight='bold'
                  align='center'
                >
                  제출한 답안
                </Typography>

                <Image
                  width={150}
                  height={150}
                  src={img}
                  alt={`slide-${idx + 1}`}
                />
              </Stack>
            </Stack>
          ))}
        </SectionCard>

        <Divider variant='middle' />

        <Unresolved data={data} />
      </Stack>

      <FullScreenModal
        handleClose={() => {
          handleScroingButtonCLick();
          handleClose();
        }}
        open={contentModalOpen}
      >
        <SwiperContainer>
          <Swiper
            simulateTouch={false}
            followFinger={false}
            grabCursor={false}
            allowTouchMove={false} // 터치 스와이프 비활성화
            keyboard={{ enabled: false }} // 키보드 화살표 비활성화
            mousewheel={false} // 마우스 휠 비활성화
            loop={true}
            modules={[Navigation, EffectCards, Pagination]}
            navigation={{
              nextEl: '.custom_next',
              prevEl: '.custom_prev',
            }}
            pagination={{
              el: '.custom_pagination',
              type: 'fraction',
            }}
          >
            {data.items[0].content.map((item, index: number) => (
              <SwiperSlide
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Stack
                  direction='row'
                  alignItems='center'
                  justifyContent='space-evenly'
                  p={4}
                  bgcolor='white'
                  width='100%'
                >
                  <Image
                    width={400}
                    height={400}
                    src={item.hint}
                    alt={item.name}
                  />
                  <div style={{ width: '400px', height: '400px' }}>
                    <ReactSketchCanvas
                      ref={(el: ReactSketchCanvasRef | null) => {
                        canvasRefs.current[index] = el;
                      }}
                      canvasColor='#fff'
                      strokeColor='#000'
                      strokeWidth={5}
                    />
                  </div>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </FullScreenModal>
    </>
  );
}
