import axios from 'axios';
import { useState } from 'react';

const useSights = () => {
    const [markers, setMarkers] = useState([]);

    const getSights = async (position) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_OTM_URL}radius?radius=5000&lon=${position[1]}&lat=${position[0]}&kinds=atm&apikey=${import.meta.env.VITE_OTM_API_KEY}`);
            setMarkers(response.data.features);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return { markers, getSights };
};

export default useSights;