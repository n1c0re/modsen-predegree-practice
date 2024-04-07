import 'leaflet/dist/leaflet.css'

import { userMarkerImg } from '@constants/icons'
import usePosition from '@hooks/usePosition';
import useSights from '@hooks/useSights';
import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'

import ChangeView from '@/ChangeView/ChangeView';
import LocationMarker from '@/LocationMarker/LocationMarker';

const Map = () => {
  const { position } = usePosition();
  const { markers } = useSights();

  const sightsMarkers = markers.map(({ properties, geometry, kind }) => (
    <LocationMarker key={properties.xid} position={geometry.coordinates} name={properties.name}
      rate={properties.rate} kind={kind} id={properties.xid}
    />
  ));

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
            {sightsMarkers}
          </MarkerClusterGroup>
          <Marker position={position} icon={customIcon}>
            <Popup>You are here!</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;