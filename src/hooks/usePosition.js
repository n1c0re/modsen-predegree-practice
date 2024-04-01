import { useEffect,useState } from 'react';

const usePosition = () => {
    const [position, setPosition] = useState();

    const getLocation = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setPosition([latitude, longitude]);
            });
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return { position, getLocation };
};

export default usePosition;