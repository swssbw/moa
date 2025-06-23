'use client';

import { useDiagnosisStore } from '@/hooks/diagnosisStore';
import ADAS01 from './components/adas/01';
import ADAS02 from './components/adas/02';
import ADAS03 from './components/adas/03';
// import ADAS05 from './components/adas/05';
// import ADAS04 from './components/adas/04';
// import ADAS11 from './components/adas/11';
// import ADAS10 from './components/adas/10';
// import ADAS07 from './components/adas/07';
// import ADAS08 from './components/adas/08';
// import ADAS09 from './components/adas/09';

export default function Diagnosis() {
  const { currentIndex } = useDiagnosisStore();

  return (
    <>
      {currentIndex === 1 && <ADAS01 />}
      {currentIndex === 2 && <ADAS02 />}
      {currentIndex === 3 && <ADAS03 />}
      {/* {currentIndex === 4 && <ADAS04 />} */}
      {/* {currentIndex === 5 && <ADAS05 />} */}
      {/* {currentIndex === 7 && <ADAS07 />} */}
      {/* {currentIndex === 8 && <ADAS08 />} */}
      {/* {currentIndex === 9 && <ADAS09 />} */}
      {/* {currentIndex === 10 && <ADAS10 />} */}
      {/* {[11, 12, 13].includes(currentIndex) && <ADAS11 />}  */}
    </>
  );
}
