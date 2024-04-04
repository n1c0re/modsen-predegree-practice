import * as images from '@constants/icons';
import { Icon } from 'leaflet';
import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';

const LocationMarker = ({ position, name, kind }) => {
  const customIcon = new Icon({
    iconUrl: images[kind + "Img"],
    iconSize: [30, 30]
  })

  return (
    <Marker position={[position[1], position[0]]} icon={customIcon}>
      <Popup>
        {name ? name : "Нет информации"}
      </Popup>
    </Marker>
  );
};

LocationMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  name: PropTypes.string, 
  kind: PropTypes.string.isRequired,
};

export default LocationMarker;