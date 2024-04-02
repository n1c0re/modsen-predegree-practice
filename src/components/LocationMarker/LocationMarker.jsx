/* eslint-disable react/prop-types */
import architectureImg from '@assets/architecture.svg'
import attractionImg from '@assets/attraction.svg'
import bankImg from '@assets/bank.svg'
import coffeeImg from '@assets/coffee.svg'
import cultureImg from '@assets/culture.svg'
import foodImg from '@assets/food.svg'
import historyImg from '@assets/history.svg'
import industryImg from '@assets/industry.svg'
import natureImg from '@assets/nature.svg'
import otherImg from '@assets/other.svg'
import religionImg from '@assets/religion.svg'
import shopImg from '@assets/shop.svg'
import sleepImg from '@assets/sleep.svg'
import sportImg from '@assets/sport.svg'
import userMarkerImg from '@assets/user-marker.svg'
import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

const LocationMarker = ({ position, name, kind }) => {
  let iconUrl;
  switch (kind) {
    case 'natural':
      iconUrl = natureImg;
      break;
    case 'cultural':
      iconUrl = cultureImg;
      break;
    case 'historic':
      iconUrl = historyImg;
      break;
    case 'religion':
      iconUrl = religionImg;
      break;
    case 'architecture':
      iconUrl = architectureImg;
      break;
    case 'industrial_facilities':
      iconUrl = industryImg;
      break;
    case 'other':
      iconUrl = otherImg;
      break;
    case 'sport':
      iconUrl = sportImg;
      break;
    case 'foods':
      iconUrl = foodImg;
      break;
    case 'shops':
      iconUrl = shopImg;
      break;
    case 'cafes':
      iconUrl = coffeeImg;
      break;
    case 'tourist_object':
      iconUrl = attractionImg;
      break;
    case 'banks':
      iconUrl = bankImg;
      break;
    case 'accomodations':
      iconUrl = sleepImg;
      break;
    default:
      iconUrl = userMarkerImg;
      break;
  }

  const customIcon = new Icon({
    iconUrl: iconUrl,
    iconSize: [30, 30]
  })

  return (
    <div className='sight-marker'>
      <Marker position={[position[1], position[0]]} icon={customIcon}>
        <Popup>{name ? name : "Нет информации"}</Popup>
      </Marker>
    </div>
  );
};

export default LocationMarker;
