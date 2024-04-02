// import { updateLocation } from '@store/action';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const usePosition = () => {
//   const dispatch = useDispatch();
//   const position = useSelector(state => [state.latitude, state.longitude]);

//   const getLocation = () => {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         dispatch(updateLocation(latitude, longitude));
//       });
//     } else {
//       console.log('Geolocation is not supported by this browser.');
//     }
//   };

//   useEffect(() => {
//     getLocation();
//     console.log(position);
//   }, [dispatch]);

//   return position;
// };

// export default usePosition;

// usePosition.js
import { setPosition } from '@store/reducers/positionSlice';
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
        if (error.PERMISSION_DENIED) {
          dispatch(setPosition([55.490295, 28.782988]));
        } else {
          console.error('Error getting geolocation:', error);
        }
      }
    );
  }, [dispatch]);

  // console.log(position);
  return { position };
};

export default usePosition;
