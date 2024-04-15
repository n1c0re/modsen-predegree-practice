import './SearchBar.css';

import { searchBigImg, searchIconImg } from '@constants/icons';
import usePosition from '@hooks/usePosition';
import useSights from '@hooks/useSights';
import { setRadius } from '@store/reducers/radiusSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import OptionsList from '@/OptionsList/OptionsList';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { position } = usePosition();
  const { getSights } = useSights();
  const [searchParams, setSearchParams] = useState({ selectedOptions: [], searchText: '', searchRadius: '' });

  const handleOptionSelect = (event) => {
    const optionId = event.currentTarget.id;
    const isSelected = searchParams.selectedOptions.includes(optionId);

    if (isSelected) {
      setSearchParams(prevState => ({
        ...prevState,
        selectedOptions: prevState.selectedOptions.filter(option => option !== optionId)
      }));
    } else {
      setSearchParams(prevState => ({
        ...prevState,
        selectedOptions: [...prevState.selectedOptions, optionId]
      }));
    }
  };

  const handleInputText = (event) => {
    setSearchParams({ ...searchParams, searchText: event.currentTarget.value });
  }

  const handleSearchRadius = (event) => {
    setSearchParams({ ...searchParams, searchRadius: event.currentTarget.value });
    dispatch(setRadius(event.currentTarget.value));
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
        <OptionsList optionSelect={handleOptionSelect} selectedOptions={searchParams.selectedOptions} />
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
