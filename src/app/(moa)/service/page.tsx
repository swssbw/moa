'use client';
import {
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import Nl2br from '@/components/Nl2br';
import { useState } from 'react';

const steps = [
  {
    label: '대상자 선택',
    description: `서비스 대상자를 선택해주세요.`,
  },
  {
    label: '검사 선택',
    description: '검사를 선택해주세요.',
  },
];

export default function Home() {
  // const target = useGlobalStore((state) => state.targetName);
  // const setTargetName = useGlobalStore((state) => state.setTargetName);

  const [target, setTarget] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Stack
      flex={1}
      minHeight={'100%'}
      gap={4}
      width={'100%'}
    >
      <Stack gap={1}>
        <Typography
          variant='h4'
          sx={{
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: 700,
          }}
        >
          <Nl2br>안녕하세요! 홍길동 매니저님</Nl2br>
        </Typography>

        <Typography
          variant='h6'
          sx={{
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: 500,
          }}
        >
          오늘도 활기차게 시작해볼까요?
        </Typography>
      </Stack>

      <Stepper
        activeStep={activeStep}
        orientation='vertical'
      >
        <Step expanded>
          <StepLabel>
            <Typography variant='h6'>{steps[0].label}</Typography>
          </StepLabel>

          <StepContent>
            <Typography>{steps[0].description}</Typography>

            <Select
              size='small'
              sx={{ width: '80%' }}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={'김길동'}>김길동</MenuItem>
              <MenuItem value={'이길동'}>이길동</MenuItem>
              <MenuItem value={'박길동'}>박길동</MenuItem>
            </Select>

            <Box sx={{ mb: 2 }}>
              <Button
                variant='contained'
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                확인
              </Button>
            </Box>
          </StepContent>
        </Step>

        <Step expanded>
          <StepLabel>
            <Typography variant='h6'>{steps[1].label}</Typography>
          </StepLabel>

          <StepContent>
            <Typography>{steps[1].description}</Typography>

            <RadioGroup
              aria-labelledby='service-radio-buttons-group-label'
              defaultValue='diagnosis'
              name='service-radio-buttons-group'
            >
              <FormControlLabel
                value='diagnosis'
                control={<Radio />}
                label='진단'
              />
              <FormControlLabel
                value='rehabilitation'
                control={<Radio />}
                label='재활'
              />
            </RadioGroup>

            <Box sx={{ mb: 2 }}>
              <Button
                variant='contained'
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                완료
              </Button>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
    </Stack>
  );
}
