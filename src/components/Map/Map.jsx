import 'leaflet/dist/leaflet.css'

import usePosition from '@hooks/usePosition';
import useSights from '@hooks/useSights';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

import LocationMarker from '@/LocationMarker/LocationMarker';

const Map = () => {
  const { position } = usePosition();
  const { markers } = useSights();

  const sightsMarkers = markers.map(marker => (
    <LocationMarker key={marker.id} position={marker.geometry.coordinates} name={marker.properties.name} kind={marker.kind} />
  ))

  return (
    <div className='content'>
      {position && (
        <MapContainer center={[position[1], position[0]]} zoom={13} zoomControl={false}>
          <ZoomControl position='topright' />
          {sightsMarkers}
          <TileLayer
            url={import.meta.env.VITE_TILE_URL}
          />
          <LocationMarker position={position} name={"You are here!"}/>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;