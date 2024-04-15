import './PlaceMarkers.css';

import * as images from '@constants/icons';
import options from '@constants/options';
import useSights from '@hooks/useSights';
import { toggleFavorite } from '@store/reducers/favoritesIdSlice';
import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

const PlaceMarkers = () => {
  const dispatch = useDispatch();
  const favoritesIds = useSelector(state => state.favoritesId);

  const { markers } = useSights();

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite({ id }));
  };

  return (
    markers.length > 0 &&
    markers.map(({ properties, geometry }) => {
      const markerKind = properties.kinds.split(',').filter((kind) => options.map((marker) => marker.kind).includes(kind))[0];

      const stars = [1, 2, 3, 4, 5].map((star, index) => (
        <img key={index} src={star <= properties.rate ? images.filledStarImg : images.starImg} />
      ));

      const customIcon = new Icon({
        iconUrl: images[markerKind + "Img"],
        iconSize: [30, 30]
      })

      const isFavorite = favoritesIds.includes(properties.xid);

      return (
        <Marker key={properties.xid} position={[geometry.coordinates[1], geometry.coordinates[0]]} icon={customIcon}>
          <Popup>
            <div className='marker-info'>
              {properties.name}
              <div className='marker-bottom'>
                <div className='marker-rating'>
                  {stars}
                </div>
              </div>
            </div>
            <button onClick={() => handleToggleFavorite(properties.xid)}>
              <img src={isFavorite ? images.filledHeartImg : images.heartImg} alt='favorite' />
            </button>
          </Popup>
        </Marker>
      );
    })
  );
};

export default PlaceMarkers;