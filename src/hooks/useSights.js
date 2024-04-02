import { setMarkers } from '@store/reducers/sightsSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const useSights = () => {
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.sights);

  const getSights = async (position, kind) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_OTM_URL}radius?radius=5000&lon=${position[0]}&lat=${position[1]}&kinds=${kind}&apikey=${import.meta.env.VITE_OTM_API_KEY}`);
      const modifiedMarkers = response.data.features.map(feature => ({
        ...feature,
        kind
      }));
      dispatch(setMarkers(modifiedMarkers));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return { markers, getSights };
};

export default useSights;