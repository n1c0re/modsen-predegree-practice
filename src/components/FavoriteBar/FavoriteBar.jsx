/* eslint-disable no-unused-vars */
import './FavoriteBar.css'

import { undefinedPlaceImg } from '@constants/icons';
import * as images from '@constants/icons';
import options from '@constants/options';
import routes from '@constants/routes';
import useFavorites from '@hooks/useFavorites';
import { toggleFavorite } from '@store/reducers/favoritesIdSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const FavoriteBar = () => {
  const { favorites } = useFavorites();
  const [searchText, setSearchText] = useState();

  const dispatch = useDispatch();

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite({ id }));
  };

  const handleInputText = (event) => {
    setSearchText(event.currentTarget.value);
  }

  return (
    <div className={`favoritebar`}>
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
                  <Link to={`/place/${favorite.xid}`}>
                    <button className="info-button">&#9658;</button>
                  </Link>
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

export default FavoriteBar;
