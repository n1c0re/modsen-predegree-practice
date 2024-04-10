import './LocationMarker.css';

import * as images from '@constants/icons';
import { toggleFavorite } from '@store/reducers/favoritesIdSlice';
import { Icon } from 'leaflet';
import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

const LocationMarker = ({ position, name, kind, rate, id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favoritesId.includes(id));

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite({ id }));
  };

  const customIcon = new Icon({
    iconUrl: images[kind + "Img"],
    iconSize: [30, 30]
  })

  const stars = [1, 2, 3, 4, 5].map((star, index) => (
    <img key={index} src={star <= rate ? images.filledStarImg : images.starImg} />
  ));

  return (
    <Marker position={[position[1], position[0]]} icon={customIcon}>
      <Popup>
        <div className='marker-info'>
          {name}
          <div className='marker-bottom'>
            <div className='marker-rating'>
              {stars}
            </div>
          </div>
        </div>
        <button onClick={handleToggleFavorite}>
          <img src={isFavorite ? images.filledHeartImg : images.heartImg} alt='favorite' />
        </button>
      </Popup>
    </Marker>
  );
};

LocationMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  name: PropTypes.string,
  kind: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default LocationMarker;