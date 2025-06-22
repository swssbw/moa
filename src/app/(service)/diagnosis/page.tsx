'use client';

import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import ADAS01 from './components/adas/01';
import ADAS02 from './components/adas/02';
import ADAS03 from './components/adas/03';

export default function Diagnosis() {
  const { currentIndex } = useDiagnosisStore();

  return (
    <>
      {currentIndex === 1 && <ADAS01 />}
      {currentIndex === 2 && <ADAS02 />}
      {currentIndex === 3 && <ADAS03 />}
    </>
  );
}
