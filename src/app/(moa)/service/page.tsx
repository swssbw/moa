'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CircleCheckBig, CircleDashed, Laugh, Meh, Smile, Frown, Angry } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';

const moods = [
  { value: 'very_bad', icon: Angry, label: '아주 나쁨' },
  { value: 'bad', icon: Frown, label: '조금 나쁨' },
  { value: 'neutral', icon: Meh, label: '보통' },
  { value: 'good', icon: Smile, label: '조금 좋음' },
  { value: 'very_good', icon: Laugh, label: '아주 좋음' },
];

export default function Home() {
  const [target, setTarget] = useState('');
  const [selectedTest, setSelectedTest] = useState('A');
  const [selectedMood, setSelectedMood] = useState<string>('neutral');

  const services = [
    { value: 'A', label: '인지 기능 평가' },
    { value: 'B', label: '재활 콘텐츠' },
  ];

  return (
    <div className={`flex w-full flex-1 flex-col items-center justify-center gap-4 ${target ? 'h-auto' : 'h-full'}`}>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <h4 className='font-ibm font-bold'>오늘 만날 어르신은?</h4>

          <Select
            value={target}
            onValueChange={setTarget}
          >
            <SelectTrigger
              className='border-input w-[620px] border bg-white'
              size='sm'
            >
              <SelectValue placeholder='대상자 선택' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='김길동'>김길동</SelectItem>
              <SelectItem value='이길동'>이길동</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div
          className={`flex flex-col gap-1 transition-all duration-500 ease-in-out ${target ? 'opacity-100 h-[214px]' : 'opacity-0 h-[0px]'} [transition-delay:200ms]`}
        >
          <h4 className='font-ibm font-bold'>기분 Check!</h4>

          <div className='flex gap-4'>
            {moods.map((mood) => (
              <div
                key={mood.value}
                className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                  selectedMood === mood.value ? 'text-primary' : 'text-gray-500'
                }`}
                onClick={() => setSelectedMood(mood.value)}
              >
                <mood.icon size={40} />
                <span className={`${selectedMood === mood.value ? 'font-bold' : 'font-normal'}`}>{mood.label}</span>
              </div>
            ))}
          </div>

          <Textarea
            placeholder='오늘 하루 어땠어요?'
            className='w-[620px]'
            rows={3}
          />
        </div>

        <div
          className={`flex flex-col gap-1 transition-all duration-500 ease-in-out ${target ? 'opacity-100 h-[260px]' : 'opacity-0 h-[0px]'} [transition-delay:500ms]`}
        >
          <h4 className='font-ibm font-bold'>시작하기</h4>

          <div className='flex gap-2'>
            {services.map((service) => (
              <label
                key={service.value}
                className={`border-input relative flex h-[120px] flex-1 cursor-pointer flex-col items-center justify-center rounded-xl border-1 ${
                  selectedTest === service.value ? 'border-primary bg-white' : 'bg-neutral-200'
                }`}
              >
                <input
                  type='radio'
                  name='test'
                  value={service.value}
                  className='sr-only'
                  checked={selectedTest === service.value}
                  onChange={(e) => setSelectedTest(e.target.value)}
                />
                {selectedTest === service.value ? <CircleCheckBig /> : <CircleDashed />}
                <span className='mt-1 text-xl font-bold'>{service.label}</span>
              </label>
            ))}
          </div>

          <Link href='/diagnosis'>
            <Button
              className='mt-2 w-[620px]'
              size='lg'
            >
              완료
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
