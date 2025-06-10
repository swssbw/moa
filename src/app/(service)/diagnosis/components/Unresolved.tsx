import { data as exam } from '@/data/examine1';

export default function Unresolved({ data }: { data: (typeof exam)[0] }) {
  return (
    <div className='flex flex-col gap-2 p-6'>
      <h4 className='font-bold'>{data.cognitiveName}</h4>
      <div>
        <p>
          <input
            type='checkbox'
            className='mr-1'
            id='reason-1'
          />
          <label htmlFor='reason-1'>하위검사를 실시하거나 완료하지 못함</label>
        </p>
        <p className='text-sm text-gray-500'>(이를 선택한 경우, 이 하위검사의 총점은 계산하지 않음)</p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='font-bold'>이유</p>
        <p>
          <input
            type='checkbox'
            className='mr-1'
            id='reason-3'
          />
          <label htmlFor='reason-3'>검사를 완료하기에 대상자의 인지장애가 너무 심함</label>
        </p>
        <p>
          <input
            type='checkbox'
            className='mr-1'
            id='reason-2'
          />
          <label htmlFor='reason-2'>대상자가 거부함</label>
        </p>
        <p>
          <input
            type='checkbox'
            className='mr-1'
            id='reason-4'
          />
          <label htmlFor='reason-4'>대상자의 신체적 이유로 검사를 완료할 수 없었음</label>
        </p>
        <p>
          <input
            type='checkbox'
            className='mr-1'
            id='reason-5'
          />
          <label htmlFor='reason-5'>그 외의 이유를 아래에 설명하시오</label>
        </p>
        <textarea className='w-full h-24 border border-input rounded-md p-2 bg-white' />
      </div>
    </div>
  );
}
