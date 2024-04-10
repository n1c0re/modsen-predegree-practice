import { setFavorites } from '@store/reducers/favoritesSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useFavorites = () => {
  const dispatch = useDispatch();
  const favoritesId = useSelector((state) => state.favoritesId);
  const favorites = useSelector((state) => state.favorites);

  const getFavorites = async () => {
    try {
      const promises = favoritesId.map(async (id) => {
        const response = await axios.get(`https://api.opentripmap.com/0.1/ru/places/xid/${id}?apikey=5ae2e3f221c38a28845f05b66a8baee12148c103a382d6f5af863ff6`);
        console.log(response);
        return response.data;
      });
      const favoritesData = await Promise.all(promises);
      dispatch(setFavorites(favoritesData));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, [favoritesId])

  return { favorites };
};

export default useFavorites;