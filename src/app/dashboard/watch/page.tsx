'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Button, CircularProgress, Stack, TextField, Typography } from '@mui/material';

import { Memo } from './_component/memo';
import { useCat } from './_component/use-cat';
import { Watch } from './_component/watch';

const WatchApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cat = useCat();

  useEffect(() => {
    if (cat.cat !== '') {
      setIsLoading(false);
    }
  }, [cat.cat]);

  const changeCat = () => {
    cat.fetchCat();
  };

  return (
    <Box component="main" sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '100%' }}>
      <Stack direction="row" spacing={10}>
        <Stack spacing={3} sx={{ alignItems: 'center', maxWidth: 'md' }}>
          <Watch />
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Image src={cat.cat} width={400} height={400} alt="cat" />
              <Button onClick={changeCat} variant="outlined">
                {'チェンジで'}
              </Button>
            </>
          )}
        </Stack>
        <Stack>
          <Memo />
        </Stack>
      </Stack>
    </Box>
  );
};

export default WatchApp;
