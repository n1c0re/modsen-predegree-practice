/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './SearchBar.css'

import searchIconImg from "@assets/search-icon.svg";
import searchOnImg from "@assets/search-on.svg";
import { useState } from 'react';

import OptionsList from '@/OptionsList/OptionsList';

const SearchBar = ({ isOpen }) => {
    const [selectedOption, setSelectedOption] = useState();
    const [searchText, setSearchText] = useState();

    const optionSelect = (event) => {
        setSelectedOption(event.currentTarget.id);
    };

    const handleInputText = (event) => {
        setSearchText(event.currentTarget.value);
    }

    return (
        <div className={`searchbar ${isOpen ? 'open' : ''}`}>
            <div className='inputs'>
                <div className='search-input'>
                    <img src={searchIconImg} alt='search-icon' />
                    <input placeholder='Место, адрес...' onChange={handleInputText}/>
                </div>
                Искать:
                <OptionsList optionSelect={optionSelect} selectedOption={selectedOption} />
                В радиусе:
                <div className='radius'>
                    <input className='radius-input' id='radius-input' type='number' />
                    км
                </div>
            </div>
            <button className='search-button'>
                <img src={searchOnImg} alt='search' />
            </button>
        </div>
    );
}

export default SearchBar;