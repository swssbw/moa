import { data as exam } from '@/data/examine1';
import { Box, Stack, Typography, Checkbox, FormControlLabel, TextField } from '@mui/material';

export default function Unresolved({ data }: { data: (typeof exam)[0] }) {
  return (
    <Box sx={{ p: 5 }}>
      <Stack gap={2}>
        <Typography variant='h6'>
          {data.cognitiveId}. {data.cognitiveName}
        </Typography>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                id='reason-1'
                name='reason-1'
              />
            }
            label='하위검사를 실시하거나 완료하지 못함'
          />
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ pl: 4 }}
          >
            (이를 선택한 경우, 이 하위검사의 총점은 계산하지 않음)
          </Typography>
        </Box>

        <Stack gap={1}>
          <Typography fontWeight='bold'>이유</Typography>
          <FormControlLabel
            control={
              <Checkbox
                id='reason-3'
                name='reason-3'
              />
            }
            label='검사를 완료하기에 대상자의 인지장애가 너무 심함'
          />
          <FormControlLabel
            control={
              <Checkbox
                id='reason-2'
                name='reason-2'
              />
            }
            label='대상자가 거부함'
          />
          <FormControlLabel
            control={
              <Checkbox
                id='reason-4'
                name='reason-4'
              />
            }
            label='대상자의 신체적 이유로 검사를 완료할 수 없었음'
          />
          <FormControlLabel
            control={
              <Checkbox
                id='reason-5'
                name='reason-5'
              />
            }
            label='그 외의 이유를 아래에 설명하시오'
          />
          <TextField
            multiline
            rows={4}
            fullWidth
            variant='outlined'
          />
        </Stack>
      </Stack>
    </Box>
  );
}
