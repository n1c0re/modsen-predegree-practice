import { setMarkers } from '@store/reducers/sightsSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const useSights = () => {
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.sights);

  const getSights = async (position, searchParams) => {
    try {
      const response = await axios.get(buildUrl(position, searchParams));
      console.log(response);
      const filteredFeatures = response.data.features.filter(feature => feature.properties.name.length > 3);
      const modifiedMarkers = filteredFeatures.map(feature => ({
        ...feature,
        kind: searchParams.selectedOption
      }));
      dispatch(setMarkers(modifiedMarkers));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const buildUrl = (position, searchParams) => {
    console.log(searchParams);
    const radius = (searchParams.searchRadius !== '') ? searchParams.searchRadius : '5000';
    const name = searchParams.name ? `&name=${searchParams.name}` : '';
    return `${import.meta.env.VITE_OTM_URL}radius?radius=${radius}&lon=${position[1]}&lat=${position[0]}
    &kinds=${searchParams.selectedOption}&apikey=${import.meta.env.VITE_OTM_API_KEY}${name}`;
  };

  return { markers, getSights };
};

export default useSights;