import { Stack, Typography } from '@mui/material';

export function ContentButton({
  title,
  handleClickOpen,
  color = 'secondary',
}: {
  title: string;
  handleClickOpen: () => void;
  color?: string;
}) {
  return (
    <Stack
      onClick={handleClickOpen}
      alignItems='center'
      justifyContent='center'
      sx={{
        width: '100%',
        height: '100px',
        cursor: 'pointer',
        bgcolor: `${color}.light`,
        borderRadius: '16px',
      }}
    >
      <Typography variant='h6'>{title}</Typography>
    </Stack>
  );
}
