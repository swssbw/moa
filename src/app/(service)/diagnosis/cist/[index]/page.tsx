import CIST01 from '../../components/cist/01';
import CIST02 from '../../components/cist/02';
import CIST03 from '../../components/cist/03';
import CIST04 from '../../components/cist/04';
import CIST05 from '../../components/cist/05';
import CIST06 from '../../components/cist/06';
import CIST07 from '../../components/cist/07';
import CIST08 from '../../components/cist/08';
import Result from '../../components/cist/Result';

export default async function Diagnosis({ params }: { params: Promise<{ index: string }> }) {
  const { index } = await params;
  const currentPageIndex = parseInt(index);

  return (
    <>
      {currentPageIndex === 1 && <CIST01 />}
      {currentPageIndex === 2 && <CIST02 />}
      {currentPageIndex === 3 && <CIST03 />}
      {currentPageIndex === 4 && <CIST04 />}
      {currentPageIndex === 5 && <CIST05 />}
      {currentPageIndex === 6 && <CIST06 />}
      {currentPageIndex === 7 && <CIST07 />}
      {currentPageIndex === 8 && <CIST08 />}
      {currentPageIndex === 9 && <Result />}
    </>
  );
}
