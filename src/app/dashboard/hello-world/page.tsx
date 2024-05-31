'use client'
import Image from 'next/image';
import { useState, ChangeEvent } from 'react';
import { Button, TextField, Grid } from '@mui/material';

import imageData from '../../../../public/assets/kirin.jpg';

const HelloWorld = () => {
  const [ clickCount, setClickCount ] = useState(0);
  const [ message, setMessage ] = useState("");

//--------------------------------------------------------
//  入力
//--------------------------------------------------------
const handleChange = (message: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
  setMessage(message.target.value)
  console.log("ChangeEventのなかみ", message.target.value)
};
const handleReset = () =>{
  setMessage("")
};

//--------------------------------------------------------
//  カウント
//--------------------------------------------------------
  //数値を増やす
  const handleClickButton = () =>{
    setClickCount((c) =>{
      return c + 1;
    });
  };

  //数値を減らす
  const handleClickDownButton = () =>{
    setClickCount((c) =>{
      return c - 1;
    });
  };

  //数値をリセットする
  const resetButton = () =>{
    setClickCount((c) =>{
      return c = 0;
    });
  };

  //カウントアップボタン
  const countUp = () => {
    return (
      <>
        <Button variant="contained" onClick={handleClickButton}>{ 'カウントを+1する' }</Button>
      </>
    );
  };

  //カウントダウンボタン
  const countDown = () => {
    return (
      <>
        <Button variant="contained" onClick={handleClickDownButton}>{ 'カウントを-1する' }</Button>
      </>
    );
  };

  //カウントリセットボタン
  const countReset = () => {
    return (
      <>
        <Button variant="outlined" onClick={resetButton}>{ 'カウントをリセット' }</Button>
      </>
    );
  };

//--------------------------------------------------------
//  リターン
//--------------------------------------------------------
  return (
    <>
      <Grid container spacing={2} rowSpacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <>{'HELLO WORLD=  '}</>
          <>{ clickCount }</>
        </Grid>
        <Grid item xs={6}>
          <>{countReset()}</>
        </Grid>
        <Grid item xs={6}>
          <>{countUp()}</>
        </Grid>
        <Grid item xs={6}>
          <>{countDown()}</>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth onChange={(event) =>handleChange(event)}></TextField>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={handleReset}>{'入力文字をリセット'}</Button>
        </Grid>
        <Grid item xs={12}>
          <>{message}</>
        </Grid>
        <Grid item xs={12}>
          <Image src={imageData} alt={'kirin'}></Image>
        </Grid>
      </Grid>
    </>
  );
};

export default HelloWorld;
