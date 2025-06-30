'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Stack, Typography, Grid, Divider, RadioGroup, FormControlLabel, Radio } from '@mui/material';

import { useParams } from 'next/navigation';
import SectionCard from '../SectionCard';
import SectionTitle from '../SectionTitle';
import { Description, Instruction } from '../Instruction';
import { useADASStore } from '@/hooks/adasStore';

export default function ADAS02() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  const { answer2, setAnswer2 } = useADASStore();

  if (!data) return;

  return (
    <Stack
      p={5}
      gap={3}
    >
      <SectionCard>
        <SectionTitle data={data} />

        <Stack gap={10}>
          {data.items.map((item, idx1) => (
            <div key={idx1}>
              <Stack
                key={idx1}
                gap={2}
              >
                {item.instructions.map((item) => (
                  <Instruction
                    item={item}
                    key={item.situation}
                  />
                ))}

                {item.description.map((item) => (
                  <Description
                    item={item}
                    key={item}
                  />
                ))}

                <Stack>
                  <Grid
                    container
                    spacing={2}
                    sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: 'grey.200' }}
                  >
                    <Grid size={8}>
                      <Typography
                        align='center'
                        fontWeight='bold'
                      >
                        명령 지침
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

                  {item.content.map((con, idx2) => (
                    <Grid
                      container
                      spacing={2}
                      key={idx2}
                      alignItems='center'
                      sx={{ p: 1, borderBottom: '1px solid #ddd', pb: 1 }}
                    >
                      <Grid size={8}>
                        <Typography fontWeight='bold'>{con.name}</Typography>
                      </Grid>

                      <Grid size={4}>
                        <RadioGroup
                          row
                          value={answer2[`${idx1}-${idx2}`] ?? ''}
                          onChange={(e) => {
                            const newAnswer = { ...answer2, [idx1 + '-' + idx2]: e.target.value };
                            setAnswer2(newAnswer);
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
              </Stack>
            </div>
          ))}
        </Stack>
      </SectionCard>
      <Divider variant='middle' />
      <Unresolved data={data} />
    </Stack>
  );
}
