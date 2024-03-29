import axios from 'axios';
import { useState } from 'react';

const useAtm = () => {
    const [markers, setMarkers] = useState([]);

    const getATM = async (position) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_OTM_URL}radius?radius=5000&lon=${position[1]}&lat=${position[0]}&kinds=atm&apikey=${import.meta.env.VITE_OTM_API_KEY}`);
            setMarkers(response.data.features);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return { markers, getATM };
};

export default useAtm;