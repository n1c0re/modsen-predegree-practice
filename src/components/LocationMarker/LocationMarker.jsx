import { Marker, Popup } from 'react-leaflet';

const LocationMarker = (position) => {
    return (
        <Marker position={[position.position[1], position.position[0]]}>
            <Popup>Полоцк</Popup>
        </Marker>
    );
};  

export default LocationMarker;
