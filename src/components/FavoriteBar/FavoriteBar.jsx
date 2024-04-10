/* eslint-disable no-unused-vars */
import './FavoriteBar.css'

import { undefinedPlaceImg } from '@constants/icons';
import * as images from '@constants/icons';
import options from '@constants/options';
import useFavorites from '@hooks/useFavorites';
import { toggleFavorite } from '@store/reducers/favoritesIdSlice';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const FavoriteBar = ({ isOpen }) => {
  const { favorites } = useFavorites();
  const [searchText, setSearchText] = useState();

  const dispatch = useDispatch();

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite({ id }));
  };

  const handleInputText = (event) => {
    setSearchText(event.currentTarget.value);
  }

  console.log(favorites);
  return (
    <div className={`favorite ${isOpen ? 'open' : ''}`}>
      <div className='search-input'>
        <img src={images.searchIconImg} alt='search-icon' />
        <input placeholder='Название' onChange={handleInputText} />
      </div>
      Избранное:
      <ul className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => (
            <li key={index}>
              <div className="favorite-item">
                <div className="top-section">
                  <div className="image-section">
                    <img src={favorite?.preview ? favorite?.preview?.source : undefinedPlaceImg} alt="background" className="background-image" />
                    <div className="type-icons">
                      {options.filter(option => favorite.kinds.includes(option.kind)).slice(0, 2).map((option, idx) => (
                        <img key={idx} src={option.imgSrc} alt="foreground" className="foreground-image" />
                      ))}
                    </div>
                  </div>
                  <div className="name-section">
                    {favorite.name}
                  </div>
                </div>
                <div className="bottom-section">
                  <button className='delete-button' onClick={() => handleToggleFavorite(favorite.xid)}>
                    <img src={images.filledHeartImg} alt='favorite' />
                  </button>
                  <button className="info-button">&#9658;</button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li>Список избранных мест пуст</li>
        )}
      </ul>
    </div>
  );
}

FavoriteBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default FavoriteBar;
