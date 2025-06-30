'use client';

import Image from 'next/image';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { useParams } from 'next/navigation';
import {
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  Switch,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import FullScreenModal from '../FullScreenModal';
import SectionCard from '../SectionCard';
import { useState } from 'react';
import { ContentButton } from '../ContentButton';
import SectionTitle, { SectionSubTitle } from '../SectionTitle';
import { Description, Instruction } from '../Instruction';
import EmblaCarousel from '../carousel';
import { useADASStore } from '@/hooks/adasStore';

// type Result = 'correct' | 'wrong' | '';

export default function ADAS05() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const [contentModalOpen, setContentModalOpen] = useState(false);
  const { answer5, setAnswer5 } = useADASStore();

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

  const handleAnswerChange = (key: string, value: string) => {
    const newAnswer = {
      ...answer5,
      [key]: {
        value,
        result: '',
      },
    };
    setAnswer5(newAnswer);
  };

  const handleResultChange = (key: string, result: string) => {
    const newAnswer = {
      ...answer5,
      [key]: {
        ...answer5[key],
        result,
      },
    };
    setAnswer5(newAnswer);
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
                    disabled
                    defaultValue={answer5[`0-${idx}`]?.value || ''}
                  />
                </Grid>
                <Grid size={4}>
                  <RadioGroup
                    row
                    value={answer5[`0-${idx}`]?.result ?? ''}
                    onChange={(e) => {
                      handleResultChange(`0-${idx}`, e.target.value);
                    }}
                    sx={{ gap: '16px' }}
                  >
                    <Grid size={6}>
                      <FormControlLabel
                        value='correct'
                        control={<Radio />}
                        label=''
                        sx={{
                          justifyContent: 'center',
                          width: '100%',
                          margin: 0,
                        }}
                      />
                    </Grid>
                    <Grid size={6}>
                      <FormControlLabel
                        value='wrong'
                        control={<Radio />}
                        label=''
                        sx={{ justifyContent: 'center', width: '100%', margin: 0 }}
                      />
                    </Grid>
                  </RadioGroup>
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
                    value={answer5[`1-${idx}`]?.value ?? ''}
                    onChange={(e) => handleAnswerChange(`1-${idx}`, e.target.value)}
                  />
                </Grid>
                <Grid size={4}>
                  <RadioGroup
                    row
                    value={answer5[`1-${idx}`]?.result ?? ''}
                    onChange={(e) => {
                      handleResultChange(`1-${idx}`, e.target.value);
                    }}
                    sx={{ gap: '16px' }}
                  >
                    <Grid size={6}>
                      <FormControlLabel
                        value='correct'
                        control={<Radio />}
                        label=''
                        sx={{
                          justifyContent: 'center',
                          width: '100%',
                          margin: 0,
                        }}
                      />
                    </Grid>
                    <Grid size={6}>
                      <FormControlLabel
                        value='wrong'
                        control={<Radio />}
                        label=''
                        sx={{ justifyContent: 'center', width: '100%', margin: 0 }}
                      />
                    </Grid>
                  </RadioGroup>
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
        <EmblaCarousel
          options={{ loop: true }}
          slides={data.items[0].content.map((item, index: number) => (
            <Stack
              key={index}
              alignItems='center'
              sx={{
                p: 5,
                borderRadius: 5,
                background: '#fff',
                border: '1px solid #ddd',
                width: '400px',
              }}
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
                alt={item.hint as string}
                width={250}
                height={250}
              />
              <Typography sx={{ height: '30px', color: 'text.secondary' }}>{!!hintMap[index] && item.hint}</Typography>
              <TextField
                placeholder='답변 입력'
                value={answer5[`0-${index}`]?.value || ''}
                onChange={(e) => handleAnswerChange(`0-${index}`, e.target.value)}
              />
            </Stack>
          ))}
        />
      </FullScreenModal>
    </>
  );
}
