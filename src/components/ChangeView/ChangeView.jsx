import usePosition from '@hooks/usePosition';
import { useMap } from 'react-leaflet';

function ChangeView() {
    const position = usePosition();
    const map = useMap();

    map.setView(position.position, 13);

    return null;
}

export default ChangeView;