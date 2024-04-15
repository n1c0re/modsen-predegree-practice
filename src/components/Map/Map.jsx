import 'leaflet/dist/leaflet.css'

import { userMarkerImg } from '@constants/icons'
import usePosition from '@hooks/usePosition';
import { Icon } from 'leaflet';
import { Circle, MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'
import { useSelector } from 'react-redux';

import ChangeView from '@/ChangeView/ChangeView';
import PlaceMarkers from '@/PlaceMarkers/PlaceMarkers';

const Map = () => {
  const { position } = usePosition();
  const searchRadius = useSelector((state) => state.radius);

  const customIcon = new Icon({
    iconUrl: userMarkerImg,
    iconSize: [30, 30]
  })

  return (
    <div className='content'>
      {position && (
        <MapContainer center={position} zoom={13} zoomControl={false}>
          <ChangeView />
          <ZoomControl position='topright' />
          <TileLayer
            url={import.meta.env.VITE_TILE_URL}
          />
          <MarkerClusterGroup chunkedLoading>
            <PlaceMarkers />
          </MarkerClusterGroup>
          {!isNaN(searchRadius) && (
            <Circle center={position} radius={searchRadius} />
          )}
          <Marker position={position} icon={customIcon}>
            <Popup>You are here!</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;