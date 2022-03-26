import React, { useEffect } from 'react';

function App() {
  const handleScroll = () => {
    console.log(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div style={{ height: '300vh' }}></div>;
}

export default App;
