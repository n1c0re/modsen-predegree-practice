import './SearchBar.css';

import { searchBigImg, searchIconImg } from '@constants/icons';
import usePosition from '@hooks/usePosition';
import useSights from '@hooks/useSights';
import { useState } from 'react';

import OptionsList from '@/OptionsList/OptionsList';

const SearchBar = () => {
  const { position } = usePosition();
  const { getSights } = useSights();
  const [searchParams, setSearchParams] = useState({ selectedOption: '', searchText: '', searchRadius: '' });

  const handleOptionSelect = (event) => {
    setSearchParams({ ...searchParams, selectedOption: event.currentTarget.id });
  };

  const handleInputText = (event) => {
    setSearchParams({ ...searchParams, searchText: event.currentTarget.value });
  }

  const handleSearchRadius = (event) => {
    setSearchParams({ ...searchParams, searchRadius: event.currentTarget.value });
  }

  const handleGetSights = () => {
    getSights(position, searchParams)
  }

  return (
    <div className={`searchbar`}>
      <div className='inputs'>
        <div className='search-input'>
          <img src={searchIconImg} alt='search-icon' />
          <input placeholder='Название' onChange={handleInputText} />
        </div>
        Искать:
        <OptionsList optionSelect={handleOptionSelect} selectedOption={searchParams.selectedOption} />
        В радиусе:
        <div className='radius'>
          <input placeholder='5000' className='radius-input' type='number' onChange={handleSearchRadius} />
          м
        </div>
      </div>
      <button className='search-button' onClick={handleGetSights}>
        <img src={searchBigImg} alt='search' />
      </button>
    </div>
  );
}

export default SearchBar;
