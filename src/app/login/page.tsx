'use client';
import Logocopy from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import Link from 'next/link';

export default function Home() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const setManagerInfo = useGlobalStore((state) => state.setManagerInfo);

  const handleLoginClick = () => {
    setManagerInfo({
      name: id,
      id,
    });
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-xs flex flex-col items-center justify-center gap-1'>
        <div className='flex flex-col items-center '>
          <Logocopy />
          <h1 className='text-5xl font-hakgyo text-[#707070]'>Moa</h1>
        </div>
        <Input
          type='text'
          placeholder='아이디'
        />
        <Input
          type='password'
          placeholder='비밀번호'
        />

        <Link href='/service'>
          <Button className='w-xs'>로그인</Button>
        </Link>
      </div>
    </div>
  );
}
