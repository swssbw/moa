import ADAS01 from '../../components/adas/01';
import ADAS02 from '../../components/adas/02';
import ADAS03 from '../../components/adas/03';
import ADAS04 from '../../components/adas/04';
import ADAS05 from '../../components/adas/05';
import ADAS06 from '../../components/adas/06';
import ADAS07 from '../../components/adas/07';
import ADAS08 from '../../components/adas/08';
import ADAS09 from '../../components/adas/09';
import ADAS10 from '../../components/adas/10';
import ADAS11 from '../../components/adas/11';
import Result from '../../components/adas/Result';

export default async function Diagnosis({ params }: { params: Promise<{ index: string }> }) {
  const { index } = await params;
  const currentPageIndex = parseInt(index);

  return (
    <>
      {currentPageIndex === 1 && <ADAS01 />}
      {currentPageIndex === 2 && <ADAS02 />}
      {currentPageIndex === 3 && <ADAS03 />}
      {currentPageIndex === 4 && <ADAS04 />}
      {currentPageIndex === 5 && <ADAS05 />}
      {currentPageIndex === 6 && <ADAS06 />}
      {currentPageIndex === 7 && <ADAS07 />}
      {currentPageIndex === 8 && <ADAS08 />}
      {currentPageIndex === 9 && <ADAS09 />}
      {currentPageIndex === 10 && <ADAS10 />}
      {[11, 12, 13].includes(currentPageIndex) && <ADAS11 />}
      {currentPageIndex === 14 && <Result />}
    </>
  );
}
