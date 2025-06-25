'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Divider, Stack, Typography } from '@mui/material';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';
import { Description, Instruction } from '../Instruction';
import { ContentButton } from '../ContentButton';
import { useState } from 'react';
import FullScreenModal from '../FullScreenModal';

export default function ADAS10() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const [practiceModalOpen, setPracticeModalOpen] = useState(false);

  const handleClickOpen = () => {
    setPracticeModalOpen(true);
  };

  const handleClose = () => {
    setPracticeModalOpen(false);
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
            title='숫자 지우기 - 연습하기'
            handleClickOpen={handleClickOpen}
          />
        </SectionCard>

        <Divider variant='middle' />

        <Unresolved data={data} />
      </Stack>

      <FullScreenModal
        handleClose={() => {
          handleClose();
        }}
        open={practiceModalOpen}
      ></FullScreenModal>
    </>
  );
}
