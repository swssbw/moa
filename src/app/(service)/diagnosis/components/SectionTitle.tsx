import { ADASITEM } from '@/data/examine1';
import { Typography } from '@mui/material';

export default function SectionTitle({ data }: { data: ADASITEM }) {
  return (
    <Typography variant='h5'>
      {data.cognitiveId}. {data.cognitiveName}
    </Typography>
  );
}

export function SectionSubTitle({ title }: { title: string }) {
  return <Typography variant='h6'>{title}</Typography>;
}
