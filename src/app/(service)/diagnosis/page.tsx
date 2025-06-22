'use client';

import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import ADAS01 from './components/adas/01';

export default function Diagnosis() {
  const { currentIndex } = useDiagnosisStore();

  return <>{currentIndex === 0 && <ADAS01 />}</>;
}
