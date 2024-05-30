'use client';

import { useState } from 'react';
import { Typography } from '@mui/material';

export const Watch = () => {
  const dateTime = new Date();
  const defaultTime = dateTime.toLocaleTimeString();
  const [time, setTime] = useState(defaultTime);
  const changeTime = () => {
    const dateTime = new Date();
    setTime(dateTime.toLocaleTimeString());
  };

  setTimeout(changeTime, 1000);

  return <Typography variant="h1">{time}</Typography>;
};
