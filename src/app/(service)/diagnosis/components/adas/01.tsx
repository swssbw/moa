import WordSlider from '../WordSlider';
import Description from '../Description';
import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';

export default function ADAS01() {
  const data = examine1[0];

  return (
    <>
      <Description data={data} />
      <WordSlider content={data.content} />

      <div className='flex flex-col gap-2 p-6'>
        <h4 className='font-bold'>채점</h4>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col gap-2'>
            {data.content.map((word, index) => (
              <div key={index}>
                <input
                  type='checkbox'
                  className='mr-1'
                  id={word.name}
                />
                <label htmlFor={word.name}>
                  <span className='text-2xl'>{word.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Unresolved data={data} />
    </>
  );
}
