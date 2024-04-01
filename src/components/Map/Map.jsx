import 'leaflet/dist/leaflet.css'

import { useEffect } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

import usePosition from '@/Hooks/usePosition';

const Map = () => {
    const { position, getLocation } = usePosition();

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    return (
        <div className='content'>
            {position && (
                <MapContainer center={position} zoom={13} zoomControl={false}>
                    <ZoomControl position='topright' />
                    <TileLayer
                        url={import.meta.env.VITE_TILE_URL}
                    />
                </MapContainer>
            )}
        </div>
    );
};

export default Map;
