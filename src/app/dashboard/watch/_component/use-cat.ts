import { useEffect, useState } from 'react';
import axios from 'axios';

export const useCat = () => {
  const [cat, setCat] = useState<any>('');
  const fetchCat = async () =>
    await axios.get(`https://api.thecatapi.com/v1/images/search`).then((res) => {
      setCat(res.data[0].url);
    });

  useEffect(() => {
    fetchCat();
  }, []);

  return { cat, fetchCat };
};
