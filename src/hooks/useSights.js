import { setMarkers } from '@store/reducers/sightsSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const useSights = () => {
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.sights);

  const getSights = async (position, kind) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_OTM_URL}radius?radius=5000&lon=${position[1]}&lat=${position[0]}&kinds=${kind}&apikey=${import.meta.env.VITE_OTM_API_KEY}`);
      dispatch(setMarkers(response.data.features));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log(markers);
  return { markers, getSights };
};

export default useSights;