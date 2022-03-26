import { useEffect } from 'react';
import * as S from './style/app';

function App() {
  const handleScroll = () => {
    console.log(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <S.Page>
      <S.Header>헤더</S.Header>
    </S.Page>
  );
}

export default App;
