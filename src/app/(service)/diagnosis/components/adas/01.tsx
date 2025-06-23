import WordSlider from '../WordSlider';
import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Stack, Typography, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useDiagnosisStore } from '@/hooks/diagnosisStore';

export default function ADAS01() {
  const { currentIndex } = useDiagnosisStore();
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  if (!data) return;

  return (
    <>
      {/* <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        className='page-slider'
      >
        <SwiperSlide>
          <Stack
            p={5}
            gap={2}
          >
            <Typography variant='h5'>
              {data.cognitiveId}. {data.cognitiveName}
            </Typography>

            <Typography color='text.secondary'>{data.description}</Typography>

            {data.items.instructions.map((item) => (
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
        </SwiperSlide>

        <SwiperSlide>
          <Stack
            height='100%'
            alignItems='center'
            justifyContent='center'
          >
            <WordSlider content={data.items?.content} />
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={{ p: 5 }}>
            <Typography
              variant='h6'
              fontWeight='bold'
              gutterBottom
            >
              답안 입력
            </Typography>

            <Stack direction='row'>
              <Stack
                spacing={1}
                width='50%'
              >
                {data.items?.content.map((word, index) => (
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
        </SwiperSlide>

        <SwiperSlide>
          <Unresolved data={data} />
        </SwiperSlide>
      </Swiper> */}
      {/* 설명 */}
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

      <Stack
        height='100%'
        alignItems='center'
        justifyContent='center'
      >
        <WordSlider content={data.items[0].content} />
      </Stack>

      <Stack sx={{ p: 5 }}>
        <Typography
          variant='h6'
          gutterBottom
        >
          답안 입력
        </Typography>

        <Stack direction='row'>
          <Stack
            spacing={1}
            width='50%'
          >
            {data.items[0].content.map((word, index) => (
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
      </Stack>

      <Unresolved data={data} />
    </>
  );
}
