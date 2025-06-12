'use client';

import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import WordSlider from './_WordSlider';

export default function Content() {
  const { currentIndex } = useDiagnosisStore();

  if (currentIndex === 0) {
    return <WordSlider />;
  }
  return <div>Content</div>;
}
