import 'leaflet/dist/leaflet.css'

import usePosition from '@hooks/usePosition';
import useSights from '@hooks/useSights';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';

import LocationMarker from '@/LocationMarker/LocationMarker';

const Map = () => {
  const { position } = usePosition();
  const { markers } = useSights();

  const sightsMarkers = markers.map(marker => {
    <LocationMarker position={marker.geometry.coordinates} name={marker.properties.name}/>
  })

  console.log(markers);
  return (
    <div className='content'>
      {position && (
        <MapContainer center={position} zoom={13} zoomControl={false}>
          <ZoomControl position='topright' />
          {sightsMarkers}
          <TileLayer
            url={import.meta.env.VITE_TILE_URL}
          />
          <Marker position={position}>
            <Popup>You are here!</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;