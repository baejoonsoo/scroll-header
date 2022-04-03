import { useRef } from 'react';
import { useEffect, useState } from 'react';
import * as S from './style/app';

function App() {
  const [hide, setHide] = useState<boolean>(false); // 헤더 가림 유무
  const doc = useRef<Document>(document);

  const headerMoving = (direction: string) => {
    if (direction === 'up') {
      setHide(false);
    } else if (direction === 'down') {
      setHide(true);
    }
  };

  let prevScrollTop = 0;
  const onScroll = () => {
    var nextScrollTop = window.pageYOffset || 0; // pageYOffset -> IE 8 이하 빼고 다 됨.

    if (nextScrollTop < 200) {
      headerMoving('up');
    } else if (nextScrollTop > prevScrollTop) {
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
      <S.Header hide={hide}>스크롤 방향에 따라 사라지고 나타나는 헤더</S.Header>
    </S.Page>
  );
}

export default App;
