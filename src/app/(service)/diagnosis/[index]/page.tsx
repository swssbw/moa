import ADAS01 from '../components/adas/01';
import ADAS02 from '../components/adas/02';
import ADAS03 from '../components/adas/03';
import ADAS04 from '../components/adas/04';
import ADAS05 from '../components/adas/05';
// import ADAS11 from './components/adas/11';
// import ADAS10 from './components/adas/10';
import ADAS06 from '../components/adas/06';
import ADAS07 from '../components/adas/07';
// import ADAS08 from './components/adas/08';
// import ADAS09 from './components/adas/09';

const pages = [ADAS01, ADAS02, ADAS03, ADAS04, ADAS05, ADAS06, ADAS07];

export default async function Diagnosis({ params }: { params: Promise<{ index: string }> }) {
  const { index } = await params;
  const currentPageIndex = parseInt(index);
  const CurrentPage = pages[currentPageIndex - 1];

  return (
    <>
      <CurrentPage />
      {/* {currentIndex === 5 && <ADAS05 />} */}
      {/* {currentIndex === 7 && <ADAS07 />} */}
      {/* {currentIndex === 8 && <ADAS08 />} */}
      {/* {currentIndex === 9 && <ADAS09 />} */}
      {/* {currentIndex === 10 && <ADAS10 />} */}
      {/* {[11, 12, 13].includes(currentIndex) && <ADAS11 />}  */}
    </>
  );
}
