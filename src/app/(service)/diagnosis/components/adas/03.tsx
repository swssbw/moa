'use client';

import { data as examine1 } from '@/data/examine1';
import { Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Unresolved from '../Unresolved';
import { useParams } from 'next/navigation';

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
  if (!data) return;

  return (
    <>
      <Stack
        p={5}
        gap={2}
      >
        <Typography variant='h5'>
          {data.cognitiveId}. {data.cognitiveName}
        </Typography>

        <Typography color='text.secondary'>{data.description}</Typography>

        {data.items[0].instructions.map((item) => (
          <Stack
            key={item.situation}
            spacing={0.5}
          >
            <Typography fontWeight='bold'>{item.situation}</Typography>
            <Typography
              sx={{
                pl: 1,
                borderLeft: '2px solid',
                borderColor: 'grey.300',
                fontStyle: 'italic',
              }}
            >
              {item.script}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Stack p={5}>
        {data.items[0].content.map((item, idx) => (
          <Stack
            key={idx}
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
              // onPointerDown={disableSwiper}
              // onPointerUp={enableSwiper}
              // onPointerLeave={enableSwiper}
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
        ))}
      </Stack>

      <Stack
        p={5}
        gap={2}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
        >
          <Typography
            variant='h6'
            gutterBottom
          >
            답안 입력
          </Typography>
          <Button
            variant='outlined'
            onClick={handleScroingButtonCLick}
          >
            제출한 그림 가져오기
          </Button>
        </Stack>

        {images.map((img, idx) => (
          <Stack
            gap={2}
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
              sx={{ border: '1px solid #eee' }}
              gap={1}
            >
              <Typography>보기</Typography>

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
              gap={1}
            >
              <Typography>제출한 답안</Typography>

              <Image
                width={150}
                height={150}
                src={img}
                alt={`slide-${idx + 1}`}
              />
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Unresolved data={data} />
    </>
  );
}
