'use client';

import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import ADAS01 from './components/adas/01';
import ADAS02 from './components/adas/02';

export default function Diagnosis() {
  const { currentIndex } = useDiagnosisStore();

  return (
    <>
      {currentIndex === 1 && <ADAS01 />}
      {currentIndex === 2 && <ADAS02 />}
    </>
  );
}
