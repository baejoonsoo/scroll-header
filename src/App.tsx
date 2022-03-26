import { useRef } from 'react';
import { useEffect, useState } from 'react';
import * as S from './style/app';

function App() {
  const [hide, setHide] = useState<boolean>(false); // 헤더 가림 유무
  const [pageY, setPageY] = useState<number>(0); // 스크롤 정도 저장
  const doc = useRef(document);

  const headerMoving = (direction: string) => {
    if (direction === 'up') {
      // header.className = '';
      console.log('up');
      setHide(false);
    } else if (direction === 'down') {
      // header.className = 'scrollDown';
      console.log('down');
      setHide(true);
    }
  };

  let prevScrollTop = 0;
  const onScroll = () => {
    var nextScrollTop = window.pageYOffset || 0; // pageYOffset -> IE 8 이하 빼고 다 됨.
    if (nextScrollTop > prevScrollTop) {
      headerMoving('down');
    } else if (nextScrollTop < prevScrollTop) {
      headerMoving('up');
    }
    prevScrollTop = nextScrollTop;
  };

  useEffect(() => {
    doc.current.addEventListener('scroll', onScroll);
  }, []);

  return (
    <S.Page>
      <S.Header hide={hide}>header</S.Header>
    </S.Page>
  );
}

export default App;
