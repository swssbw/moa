import { data as exam } from '@/data/examine1';

export default function Description({ data }: { data: (typeof exam)[0] }) {
  return (
    <div className='flex flex-col gap-2 p-6'>
      <h4 className='font-bold'>{data.cognitiveName}</h4>
      <p className='text-sm text-gray-500'>{data.description}</p>
      <h5 className='font-bold'>검사자 지시사항</h5>
      <div className='flex flex-col gap-4'>
        {data.instructions.map((item) => (
          <div
            key={item.situation}
            className='flex flex-col gap-1'
          >
            <p className='font-semibold'>{item.situation}</p>
            <p className='pl-1 border-l-2 border-gray-300 italic'>{item.script}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
