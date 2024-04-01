import 'leaflet/dist/leaflet.css'

import usePosition from '@hooks/usePosition';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';

const Map = () => {
    const { position } = usePosition();

    return (
        <div className='content'>
            {position && (
                <MapContainer center={position} zoom={13} zoomControl={false}>
                    <ZoomControl position='topright' />
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