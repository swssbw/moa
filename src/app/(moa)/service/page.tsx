'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CircleCheckBig, CircleDashed } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { useGlobalStore } from '@/hooks/globalStore';

const steps = [
  {
    label: '대상자 선택',
    description: `서비스 대상자를 선택해주세요.`,
  },
  {
    label: '서비스 선택',
    description: '진행할 서비스를 선택해주세요.',
  },
];

export default function Home() {
  const managerInfo = useGlobalStore((state) => state.managerInfo);

  const [target, setTarget] = useState('');
  const [selectedTest, setSelectedTest] = useState('A');

  return (
    <div className='w-full flex-1 gap-4'>
      <div className='mb-4 gap-1'>
        <h2 className='font-ibm font-bold'>안녕하세요! {managerInfo.name} 매니저님</h2>

        <h3 className='font-ibm font-medium'>오늘도 활기차게 시작해볼까요?</h3>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <h4 className='font-ibm font-bold'>{steps[0].label}</h4>
          <p className='font-ibm font-medium'>{steps[0].description}</p>

          <Select
            value={target}
            onValueChange={(value) => setTarget(value)}
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

        <div className='flex flex-col gap-1'>
          <h4 className='font-ibm font-bold'>{steps[1].label}</h4>
          <p className='font-ibm font-medium'>{steps[1].description}</p>

          <div className='flex gap-2'>
            <label
              className={`border-input relative flex h-[140px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-xl border-1 ${
                selectedTest === 'A' ? 'border-primary bg-white' : 'bg-neutral-200'
              }`}
            >
              <input
                type='radio'
                name='test'
                value='A'
                className='sr-only'
                checked={selectedTest === 'A'}
                onChange={(e) => setSelectedTest(e.target.value)}
              />
              {selectedTest === 'A' ? <CircleCheckBig /> : <CircleDashed />}
              <span className='mt-1 text-2xl font-bold'>진단</span>
            </label>

            <label
              className={`border-input relative flex h-[140px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-xl border-1 ${
                selectedTest === 'B' ? 'border-primary bg-white' : 'bg-neutral-200'
              }`}
            >
              <input
                type='radio'
                name='test'
                value='B'
                className='sr-only'
                checked={selectedTest === 'B'}
                onChange={(e) => setSelectedTest(e.target.value)}
              />
              {selectedTest === 'B' ? <CircleCheckBig /> : <CircleDashed />}
              <span className='mt-1 text-2xl font-bold'>재활</span>
            </label>
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
