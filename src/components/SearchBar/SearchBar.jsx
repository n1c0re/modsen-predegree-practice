/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './SearchBar.css'

import searchIconImg from "@assets/search-icon.svg";
import searchOnImg from "@assets/search-on.svg";
import usePosition from '@hooks/usePosition';
import useSights from '@hooks/useSights';
import { useState } from 'react';

import OptionsList from '@/OptionsList/OptionsList';

const SearchBar = ({ isOpen }) => {
  const { position } = usePosition();
  const { getSights } = useSights();

  const [selectedOption, setSelectedOption] = useState();
  const [searchText, setSearchText] = useState();


  const optionSelect = (event) => {
    setSelectedOption(event.currentTarget.id);
  };

  const handleInputText = (event) => {
    setSearchText(event.currentTarget.value);
  }

  const handleGetSights = () => {
    getSights(position, selectedOption)
  }

  return (
    <div className={`searchbar ${isOpen ? 'open' : ''}`}>
      <div className='inputs'>
        <div className='search-input'>
          <img src={searchIconImg} alt='search-icon' />
          <input placeholder='Место, адрес...' onChange={handleInputText} />
        </div>
        Искать:
        <OptionsList optionSelect={optionSelect} selectedOption={selectedOption} />
        В радиусе:
        <div className='radius'>
          <input className='radius-input' id='radius-input' type='number' />
          км
        </div>
      </div>
      <button className='search-button' onClick={handleGetSights}>
        <img src={searchOnImg} alt='search' />
      </button>
    </div>
  );
}

export default SearchBar;