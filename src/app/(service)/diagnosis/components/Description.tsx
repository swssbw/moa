import { data as exam } from '@/data/examine1';
import { Stack, Typography } from '@mui/material';

export default function Description({ data }: { data: (typeof exam)[0] }) {
  return (
    <Stack sx={{ padding: '40px 40px 0px 40px' }}>
      <Stack gap={2}>
        <Typography
          variant='h4'
          fontWeight='bold'
        >
          {data.cognitiveName}
        </Typography>

        <Typography
          variant='body2'
          color='text.secondary'
        >
          {data.description}
        </Typography>

        <Typography
          variant='h5'
          fontWeight='bold'
        >
          검사자 지시사항
        </Typography>

        <Stack gap={2}>
          {data.instructions.map((item) => (
            <Stack
              key={item.situation}
              spacing={0.5}
            >
              <Typography fontWeight='600'>{item.situation}</Typography>
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
      </Stack>
    </Stack>
  );
}
