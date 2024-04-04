import './SearchBar.css';

import { searchBigImg, searchIconImg } from '@constants/icons';
import usePosition from '@hooks/usePosition';
import useSights from '@hooks/useSights';
import PropTypes from 'prop-types';
import { useState } from 'react';

import OptionsList from '@/OptionsList/OptionsList';

const SearchBar = ({ isOpen }) => {
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
    <div className={`searchbar ${isOpen ? 'open' : ''}`}>
      <div className='inputs'>
        <div className='search-input'>
          <img src={searchIconImg} alt='search-icon' />
          <input placeholder='Место, адрес...' onChange={handleInputText} />
        </div>
        Искать:
        <OptionsList optionSelect={handleOptionSelect} selectedOption={searchParams.selectedOption} />
        В радиусе:
        <div className='radius'>
          <input className='radius-input' type='number' onChange={handleSearchRadius}/>
          км
        </div>
      </div>
      <button className='search-button' onClick={handleGetSights}>
        <img src={searchBigImg} alt='search' />
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default SearchBar;
