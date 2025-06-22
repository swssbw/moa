import WordSlider from '../WordSlider';
import Description from '../Description';
import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Box, Stack, Typography, Checkbox, FormControlLabel } from '@mui/material';

export default function ADAS01() {
  const data = examine1[0];

  return (
    <>
      <Description data={data} />
      <WordSlider content={data.content} />

      <Box sx={{ p: 3 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          gutterBottom
        >
          채점
        </Typography>
        <Stack spacing={1}>
          {data.content.map((word, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  id={word.name}
                  name={word.name}
                />
              }
              label={
                <Typography
                  variant='h5'
                  component='span'
                >
                  {word.name}
                </Typography>
              }
            />
          ))}
        </Stack>
      </Box>
      <Unresolved data={data} />
    </>
  );
}
