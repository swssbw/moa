import Description from '../Description';
import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Stack, Checkbox, Paper } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDiagnosisStore } from '@/hooks/diagnosisStore';

export default function ADAS02() {
  const { currentIndex } = useDiagnosisStore();
  const data = examine1.filter((item) => item.cognitiveId === currentIndex);

  if (!data) return;

  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        className='page-slider'
      >
        <SwiperSlide>
          <Description data={data[0]} />
          <Stack p={5}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label='command table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell>명령 지침</TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      정답
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      오답
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>{data[0].content[0].name}</TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{data[0].content[1].name}</TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Description data={data[1]} />
          <Stack p={5}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label='command table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell>명령 지침</TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      정답
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      오답
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>{data[1].content[0].name}</TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{data[1].content[1].name}</TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Description data={data[2]} />
          <Stack p={5}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label='command table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell>명령 지침</TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      정답
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      오답
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>{data[2].content[0].name}</TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{ width: 80 }}
                    >
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
