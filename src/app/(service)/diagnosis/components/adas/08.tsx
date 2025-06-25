'use client';

import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import { Checkbox, Divider, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import SectionTitle from '../SectionTitle';
import { useState } from 'react';
import { Description, Instruction } from '../Instruction';
import SectionCard from '../SectionCard';
import { ContentButton } from '../ContentButton';
import FullScreenModal from '../FullScreenModal';
import EmblaCarousel from '../carousel';

export default function ADAS08() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const [contentModalOpen, setContentModalOpen] = useState('');
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

    setContentModalOpen(type);
  };

  const handleClose = () => {
    setContentModalOpen('');
  };

  const [selected, setSelected] = useState<'y' | 'n' | ''>('');

  const testReplyOptions: { value: 'y' | 'n'; label: string }[] = [
    { value: 'y', label: '본 적 있어요' },
    { value: 'n', label: '본 적 없어요' },
  ];

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
              <Grid size={6}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  단어
                </Typography>
              </Grid>
              <Grid size={2}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  예
                </Typography>
              </Grid>
              <Grid size={2}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  아니오
                </Typography>
              </Grid>
              <Grid size={2}>
                <Typography
                  align='center'
                  fontWeight='bold'
                >
                  재지시
                </Typography>
              </Grid>
            </Grid>

            {/* 데이터 행 */}
            {data.items[0].content.map((item, idx) => (
              <Grid
                container
                key={idx}
                alignItems='center'
                sx={{ borderBottom: '1px solid #ddd' }}
              >
                <Grid size={6}>
                  <Typography
                    fontWeight={item.isAnswer ? '700' : '400'}
                    align='center'
                  >
                    {item.name}
                  </Typography>
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
      </Stack>

      <FullScreenModal
        handleClose={() => {
          handleClose();
        }}
        open={!!contentModalOpen}
      >
        <EmblaCarousel
          options={{ loop: true }}
          slides={targetWords.map((word, index: number) => (
            <Stack
              key={index}
              alignItems='center'
              sx={{
                p: 5,
                borderRadius: '24px',
                gap: 5,
                background: '#fff',
                border: '1px solid #ddd',
                height: '500px',
                width: '400px',
              }}
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

              {contentModalOpen === 'test' && (
                <Stack
                  alignItems='center'
                  gap={2}
                >
                  <FormControlLabel
                    control={<Checkbox color='success' />}
                    label='재지시'
                  />
                  <Stack
                    direction='row'
                    gap={2}
                  >
                    {testReplyOptions.map((option) => (
                      <Stack
                        key={option.value}
                        onClick={() => setSelected(option.value)}
                        sx={{
                          width: '150px',
                          height: '75px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          borderRadius: '16px',
                          border: selected === option.value ? '1px solid #68AD7E' : '1px solid #ddd',
                          color: selected === option.value ? '#fff' : '#333',
                          backgroundColor: selected === option.value ? '#68AD7E' : '#fff',
                          boxShadow: selected === option.value ? '0 0 8px #68AD7E' : 'none',
                        }}
                      >
                        {option.label}
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              )}
            </Stack>
          ))}
        />
      </FullScreenModal>
    </>
  );
}
