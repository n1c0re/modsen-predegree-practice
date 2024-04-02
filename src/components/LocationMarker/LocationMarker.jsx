/* eslint-disable react/prop-types */
import { Marker, Popup } from 'react-leaflet';

const LocationMarker = ({position, name}) => {
  console.log(position, name);
  return (
    <Marker position={[position[1], position[0]]}>
      <Popup>{name}</Popup>
    </Marker>
  );
};

export default LocationMarker;
