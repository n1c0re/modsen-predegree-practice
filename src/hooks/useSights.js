import { setMarkers } from '@store/reducers/sightsSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const useSights = () => {
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.sights);

  const getSights = async (position, searchParams) => {
    try {
      const response = await axios.get(buildUrl(position, searchParams));
      const filteredFeatures = response.data.features.filter(feature => feature.properties.name.trim() !== '');
      dispatch(setMarkers(filteredFeatures));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const buildUrl = (position, searchParams) => {
    const radius = (searchParams.searchRadius !== '') ? searchParams.searchRadius : '5000';
    const kinds = Array.isArray(searchParams.selectedOptions) ? searchParams.selectedOptions.join(',') : searchParams.selectedOptions;
    const name = searchParams.searchText.length >= 3 ? `&name=${searchParams.searchText}` : '';
    return `${import.meta.env.VITE_OTM_URL}radius?radius=${radius}&lon=${position[1]}&lat=${position[0]}
    &kinds=${kinds}${name}&apikey=${import.meta.env.VITE_OTM_API_KEY}${name}`;
  };

  return { markers, getSights };
};

export default useSights;