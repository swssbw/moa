'use client';

import { data as examine1 } from '@/data/examine1';
import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import Description from './components/Description';
import Unresolved from './components/Unresolved';
import Content from './components/Content';

export default function Diagnosis() {
  const { currentIndex, subIndex } = useDiagnosisStore();

  const data = examine1[currentIndex];

  return (
    <>
      {subIndex === 0 && <Description data={data} />}
      {subIndex === 1 && <Content />}
      {subIndex === 2 && <Unresolved data={data} />}
    </>
  );
}
