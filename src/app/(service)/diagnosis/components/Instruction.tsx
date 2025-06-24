import Nl2br from '@/components/Nl2br';
import { Stack, Typography } from '@mui/material';

export function Instruction({ item }: { item: { situation: string; script: string } }) {
  return (
    <Stack
      key={item.situation}
      gap={2}
    >
      <Typography fontWeight='bold'>{item.situation}</Typography>
      <Typography
        sx={{
          pl: 2,
          borderLeft: '4px solid',
          borderColor: 'grey.300',
          fontStyle: 'italic',
        }}
      >
        {item.script}
      </Typography>
    </Stack>
  );
}

export function Description({ item }: { item: string }) {
  console.log(item);
  return (
    <Typography
      key={item}
      color='text.secondary'
      sx={{ padding: 2, bgcolor: 'grey.100' }}
    >
      <Nl2br>{item}</Nl2br>
    </Typography>
  );
}
