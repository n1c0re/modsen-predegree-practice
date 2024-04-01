import './OptionsList.css';

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

// eslint-disable-next-line react/prop-types
const OptionsList = ({ optionSelect, selectedOption }) => {
    const options = [
        { label: 'Природа', imgSrc: natureImg, kind: 'natural' },
        { label: 'Культура', imgSrc: cultureImg, kind: 'cultural' },
        { label: 'История', imgSrc: historyImg, kind: 'historic' },
        { label: 'Религия', imgSrc: religionImg, kind: 'religion' },
        { label: 'Архитектура', imgSrc: architectureImg, kind: 'architecture' },
        { label: 'Индустриальные объекты', imgSrc: industryImg, kind: 'industrial_facilities' },
        { label: 'Разное', imgSrc: otherImg, kind: 'other' },
        { label: 'Спорт', imgSrc: sportImg, kind: 'sport' },
        { label: 'Еда', imgSrc: foodImg, kind: 'food' },
        { label: 'Магазины', imgSrc: shopImg, kind: 'shops' },
        { label: 'Кафе', imgSrc: coffeeImg, kind: 'cafes' },
        { label: 'Развлечения', imgSrc: attractionImg, kind: 'tourist_object' },
        { label: 'Банки', imgSrc: bankImg, kind: 'banks' },
        { label: 'Места для отдыха', imgSrc: sleepImg, kind: 'accomodations' }
    ];

    return (
        <div className="custom-select" tabIndex="0">
            <ul className="options">
                {options.map((option, index) => (
                    <li key={index} id={option.kind} onClick={optionSelect} className={selectedOption == option.kind ? 'selected' : ''}>
                        <img src={option.imgSrc} alt={option.label} />{option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OptionsList;
