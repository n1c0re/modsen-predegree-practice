﻿import { setPosition } from '@store/reducers/positionSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const usePosition = () => {
  const position = useSelector((state) => state.position);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(setPosition([position.coords.latitude, position.coords.longitude]));
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  }, [dispatch]);

  return { position };
};

export default usePosition;
