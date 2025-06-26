'use client';

import { data as examine1 } from '@/data/examine1';
import { Checkbox, Divider, FormControlLabel, Stack, Typography } from '@mui/material';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { useState, RefObject, createRef } from 'react';
import Image from 'next/image';
import Unresolved from '../Unresolved';
import { useParams } from 'next/navigation';
import SectionCard from '../SectionCard';
import { ContentButton } from '../ContentButton';
import FullScreenModal from '../FullScreenModal';
import SectionTitle from '../SectionTitle';
import { Description, Instruction } from '../Instruction';

export default function ADAS03() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);

  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const [canvasRefs] = useState<RefObject<ReactSketchCanvasRef | null>[]>(() =>
    Array.from({ length: data?.items[0].content.length ?? 0 }, () => createRef<ReactSketchCanvasRef>())
  );
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleScroingButtonCLick = async () => {
    const dataUrls: string[] = [];
    const contentLength = data?.items[0].content.length ?? 0;
    for (let i = 0; i < contentLength; i++) {
      const ref = canvasRefs[i]?.current;
      if (ref) {
        try {
          const data = await ref.exportImage('png');
          dataUrls.push(data);
        } catch (err) {
          console.log(err);
          dataUrls.push(''); // 비어있으면 빈 값
        }
      } else {
        dataUrls.push('');
      }
    }
    setImages(dataUrls);
    handleClose();
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
                  src={data.items[0].content[idx].hint as string}
                  alt={data.items[0].content[idx].name as string}
                  width={150}
                  height={150}
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
        handleClose={handleScroingButtonCLick}
        open={contentModalOpen}
      >
        <Stack>
          <Stack
            direction='row'
            gap={2}
            justifyContent='center'
            mb={3}
          >
            {data.items[0].content.map((_, i) => (
              <Stack
                key={i}
                onClick={() => setSelectedIndex(i)}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: 20,
                  backgroundColor: selectedIndex === i ? '#486a9e' : '#fff',
                  color: selectedIndex === i ? '#fff' : 'secondary.main',
                  border: selectedIndex === i ? '1px solid #486a9e' : '1px solid #ddd',
                  boxShadow: selectedIndex === i ? '0 0 8px #486a9e' : 'none',
                }}
              >
                {i + 1}
              </Stack>
            ))}
          </Stack>
          <Stack
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
                src={data.items[0].content[selectedIndex].hint as string}
                alt={data.items[0].content[selectedIndex].name as string}
              />
              <div style={{ width: '400px', height: '400px', position: 'relative' }}>
                {data.items[0].content.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      opacity: selectedIndex === idx ? 1 : 0,
                      pointerEvents: selectedIndex === idx ? 'auto' : 'none',
                      width: '400px',
                      height: '400px',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  >
                    <ReactSketchCanvas
                      ref={canvasRefs[idx]}
                      canvasColor='#fff'
                      strokeColor='#000'
                      strokeWidth={5}
                    />
                  </div>
                ))}
              </div>
            </Stack>
          </Stack>
        </Stack>
      </FullScreenModal>
    </>
  );
}
