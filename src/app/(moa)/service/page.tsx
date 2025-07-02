'use client';
import Link from 'next/link';
import { useState } from 'react';

import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentVerySatisfied,
  CheckCircle,
  RadioButtonUnchecked,
} from '@mui/icons-material';
import {
  Stack,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Collapse,
  ToggleButtonGroup,
  ToggleButton,
  SelectChangeEvent,
} from '@mui/material';

const moods = [
  { value: 'very_bad', icon: <SentimentVeryDissatisfied fontSize='large' />, label: '아주 나쁨' },
  { value: 'bad', icon: <SentimentDissatisfied fontSize='large' />, label: '조금 나쁨' },
  { value: 'neutral', icon: <SentimentNeutral fontSize='large' />, label: '보통' },
  { value: 'good', icon: <SentimentSatisfied fontSize='large' />, label: '조금 좋음' },
  { value: 'very_good', icon: <SentimentVerySatisfied fontSize='large' />, label: '아주 좋음' },
];

export default function Home() {
  const [target, setTarget] = useState('');
  const [selectedTest, setSelectedTest] = useState('A');
  const [selectedMood, setSelectedMood] = useState<string>('neutral');

  const services = [
    { value: 'A', label: '인지 기능 평가' },
    { value: 'B', label: '재활 콘텐츠' },
  ];

  const handleTargetChange = (event: SelectChangeEvent) => {
    setTarget(event.target.value as string);
  };

  const handleMoodChange = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleTestChange = (event: React.MouseEvent<HTMLElement>, newTest: string | null) => {
    if (newTest !== null) {
      setSelectedTest(newTest);
    }
  };

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      py={4}
    >
      <Stack
        spacing={3}
        sx={{ width: 620 }}
      >
        <Stack spacing={1}>
          <Typography
            variant='h6'
            fontWeight={700}
            fontFamily='IBMPlexSans'
          >
            오늘 만날 어르신은?
          </Typography>
          <FormControl fullWidth>
            <InputLabel id='target-select-label'>대상자 선택</InputLabel>
            <Select
              labelId='target-select-label'
              id='target-select'
              value={target}
              label='대상자 선택'
              onChange={handleTargetChange}
            >
              <MenuItem value='김길동'>김길동</MenuItem>
              <MenuItem value='이길동'>이길동</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Collapse in={!!target}>
          <Stack gap={2}>
            <Typography
              variant='h6'
              fontWeight={700}
              fontFamily='IBMPlexSans'
            >
              기분 Check!
            </Typography>
            <Stack
              direction='row'
              spacing={4}
              justifyContent='center'
              sx={{ pt: 1 }}
            >
              {moods.map((mood) => (
                <Stack
                  key={mood.value}
                  alignItems='center'
                  spacing={0.5}
                  onClick={() => handleMoodChange(mood.value)}
                  sx={{ cursor: 'pointer', color: selectedMood === mood.value ? 'primary.main' : 'text.secondary' }}
                >
                  {mood.icon}
                  <Typography sx={{ fontWeight: selectedMood === mood.value ? 'bold' : 'normal' }}>
                    {mood.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <TextField
              placeholder='오늘 하루 어떠셨나요?'
              multiline
              rows={3}
              fullWidth
            />

            <Typography
              variant='h6'
              fontWeight={700}
              fontFamily='IBMPlexSans'
            >
              시작하기
            </Typography>
            <ToggleButtonGroup
              value={selectedTest}
              exclusive
              onChange={handleTestChange}
              fullWidth
              sx={{ gap: 2 }}
            >
              {services.map((service) => (
                <ToggleButton
                  key={service.value}
                  value={service.value}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                    flex: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    '&.Mui-selected': {
                      borderColor: 'primary.main',
                      bgcolor: 'action.selected',
                    },
                  }}
                >
                  {selectedTest === service.value ? <CheckCircle /> : <RadioButtonUnchecked />}
                  <Typography sx={{ mt: 1, fontSize: '1.25rem', fontWeight: 'bold' }}>{service.label}</Typography>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            <Button
              component={Link}
              href='/diagnosis/adas/1'
              variant='contained'
              size='large'
              fullWidth
              sx={{ mt: 2 }}
            >
              완료
            </Button>
          </Stack>
        </Collapse>
      </Stack>
    </Stack>
  );
}
