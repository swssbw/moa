import { Button } from '@/components/ui/button';
import { House, Settings } from 'lucide-react';

export default function Diagnosis() {
  return (
    <div className='flex h-dvh w-dvw flex-col'>
      <div className='flex justify-between px-2 py-1'>
        <House className='size-3 text-neutral-500' />
        <Settings className='size-3 text-neutral-500' />
      </div>
      <div className='flex-1'>진단 콘텐츠</div>
      <div className='flex justify-between border-t border-input bg-white p-1'>
        <Button
          className='w-[60px]'
          variant='outline'
        >
          이전
        </Button>
        <Button
          className='w-[60px]'
          variant='secondary'
        >
          다음
        </Button>
      </div>
    </div>
  );
}
