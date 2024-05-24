'use client';

import { useState } from 'react';
import { Button } from '@mui/material';

const SamplePage = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClickButton = () => {
    setClickCount((c) => {
      return c + 1;
    });
  };
  const countUp = () => {
    return (
      <>
        <>{clickCount}</>
        <Button onClick={handleClickButton}>{'＋１します'}</Button>
      </>
    );
  };
  return (
    <>
      <>{countUp()}</>
      <>{'Hello world'}</>
    </>
  );
};

export default SamplePage;
