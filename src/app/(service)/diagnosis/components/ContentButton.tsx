import { Stack, Typography } from '@mui/material';

export function ContentButton({ title, handleClickOpen }: { title: string; handleClickOpen: () => void }) {
  return (
    <Stack
      onClick={handleClickOpen}
      alignItems='center'
      justifyContent='center'
      sx={{
        width: '100%',
        height: '100px',
        cursor: 'pointer',
        bgcolor: 'secondary.light',
        borderRadius: '16px',
      }}
    >
      <Typography variant='h6'>{title}</Typography>
    </Stack>
  );
}
