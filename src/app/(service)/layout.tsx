'use client';

import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import { data as examine1 } from '@/data/examine1';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
// import { Progress } from '@/components/ui/progress';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  const { goToNext, goToPrevious, currentIndex, subIndex, setBaseFontSize } = useDiagnosisStore();
  const router = useRouter();

  return (
    <div className='flex h-dvh w-dvw flex-col'>
      <div className='flex-1 overflow-y-auto overscroll-none'>{children}</div>

      {/* <Progress value={((subIndex + 1) / 3) * 100} /> */}
      <div className='flex items-center justify-between border-t border-input bg-white px-4 pb-4 pt-2'>
        <div className='flex items-center gap-2'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Settings className='size-3 text-neutral-500' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[130px] m-2'>
              <DropdownMenuItem onClick={() => router.push('/service')}>홈으로 가기</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setBaseFontSize(20)}>큰 글씨 보기</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setBaseFontSize(16)}>보통 글씨 보기</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            className='w-[80px]'
            variant='ghost'
            onClick={goToPrevious}
            disabled={currentIndex === 0 && subIndex === 0}
          >
            이전
          </Button>
        </div>

        <p className='text-sm text-neutral-500 font-bold'>
          {currentIndex + 1} / {examine1.length}
        </p>

        {currentIndex < examine1.length - 1 ? (
          <Button
            className='w-[80px]'
            variant='secondary'
            onClick={goToNext}
          >
            다음
          </Button>
        ) : (
          <Button
            className='w-[80px]'
            variant='secondary'
            onClick={() => {
              alert('검사완료');
            }}
          >
            완료
          </Button>
        )}
      </div>
    </div>
  );
}
