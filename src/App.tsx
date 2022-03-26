import { useRef } from 'react';
import { useEffect, useState } from 'react';
import * as S from './style/app';

function App() {
  const [hide, setHide] = useState<boolean>(false); // 헤더 가림 유무
  const [pageY, setPageY] = useState<number>(0); // 스크롤 정도 저장
  const doc = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;

    // 이전 스크롤 양과 현재 양의 차이
    const deltaY = pageYOffset - pageY;

    // 스크롤 위치가 0이 아니고 변화량이 0보다 클 때 true를 저장

    const hides = pageYOffset !== 0 && deltaY >= 0;

    setHide(hides);
    setPageY(pageYOffset);
  };

  useEffect(() => {
    doc.current.addEventListener('scroll', handleScroll);

    return () => doc.current.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.Page>
      <S.Header hide={hide}>header</S.Header>
    </S.Page>
  );
}

export default App;
