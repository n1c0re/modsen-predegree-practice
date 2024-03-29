import 'leaflet/dist/leaflet.css'

import { useEffect } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

import usePosition from '@/Hooks/usePosition';
import SideBar from '@/SideBar/SideBar';

const Map = () => {
    const { position, getLocation } = usePosition();

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    return (
        <>
            {position && (
                <MapContainer center={position} zoom={13} zoomControl={false}>
                    <ZoomControl position='topright' />
                    <TileLayer
                        url={import.meta.env.VITE_TILE_URL}
                    />
                    <SideBar />
                </MapContainer>
            )}
        </>
    );
};

export default Map;
