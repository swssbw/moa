import Description from '../Description';
import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ADAS03() {
  const { currentIndex } = useDiagnosisStore();
  const data = examine1.filter((item) => item.cognitiveId === currentIndex);
  console.log(data);

  const swiperRef = useRef<SwiperRef | null>(null);
  const canvasRefs = useRef<(ReactSketchCanvasRef | null)[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const disableSwiper = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.allowTouchMove = false;
    }
  };

  const enableSwiper = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.allowTouchMove = true;
    }
  };

  const handleSlideChange = async () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    if (swiper.activeIndex === 4) {
      // 5번째 슬라이드에 진입했을 때만 이미지 수집
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
    }
  };

  if (!data) return;

  return (
    <>
      <Swiper
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        className='page-slider'
      >
        <SwiperSlide>
          <Description data={data[0]} />
        </SwiperSlide>

        {data[0].content.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Stack
              direction='row'
              p={5}
              gap={5}
              alignItems='center'
              justifyContent='center'
              sx={{ height: '90%' }}
            >
              <Image
                width={400}
                height={400}
                src={item.hint}
                alt={item.name}
              />
              <div
                style={{ width: '400px', height: '400px' }}
                onPointerDown={disableSwiper}
                onPointerUp={enableSwiper}
                onPointerLeave={enableSwiper}
              >
                <ReactSketchCanvas
                  // ref={(el) => (canvasRefs.current[i] = el)}
                  ref={(el: ReactSketchCanvasRef | null) => {
                    canvasRefs.current[idx] = el;
                  }}
                  canvasColor='#fff'
                  strokeColor='#000'
                  strokeWidth={5}
                />
              </div>
            </Stack>
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <Stack p={5}>
            <Typography
              variant='h5'
              fontWeight='bold'
              gutterBottom
            >
              채점
            </Typography>
            {images.length === 0 ? (
              <Typography>그림이 없습니다.</Typography>
            ) : (
              <Grid
                container
                spacing={2}
              >
                {images.map((img, idx) => (
                  <Grid
                    key={idx}
                    size={6}
                  >
                    <Stack
                      direction='row'
                      key={idx}
                    >
                      <Stack>
                        <Typography variant='h6'>{data[0].content[idx].name}</Typography>
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

                      <Stack alignItems='center'>
                        <Typography>보기</Typography>

                        <Image
                          src={data[0].content[idx].hint}
                          width={150}
                          height={150}
                          alt={data[0].content[idx].name}
                        />
                      </Stack>

                      <Stack alignItems='center'>
                        <Typography>제출한 답안</Typography>

                        <Image
                          width={150}
                          height={150}
                          src={img}
                          alt={`slide-${idx + 1}`}
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            )}
          </Stack>
        </SwiperSlide>

        {/* <SwiperSlide>
          <Box sx={{ p: 5 }}>
            <Typography
              variant='h5'
              fontWeight='bold'
              gutterBottom
            >
              채점
            </Typography>

            <Stack direction='row'>
              <Stack
                spacing={1}
                width='50%'
              >
                {data.content.map((word, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox name={word.name} />}
                    label={<Typography component='span'>{word.name}</Typography>}
                  />
                ))}
              </Stack>

              <Stack width='50%'>
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
            </Stack>
          </Box>
        </SwiperSlide> */}
        <SwiperSlide>
          <Unresolved data={data[0]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
