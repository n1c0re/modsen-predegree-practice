/* eslint-disable no-unused-vars */
import { undefinedPlaceImg } from '@constants/icons';
import * as images from '@constants/icons';
import options from '@constants/options';
import useFavorites from '@hooks/useFavorites';
import { toggleFavorite } from '@store/reducers/favoritesIdSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import styles from './FavoritePlace.module.css'

const FavoritePlace = () => {
  const { xid } = useParams();
  const { favorites } = useFavorites();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoritePlace = favorites.find(place => place.xid === xid);

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite({ id }));
    navigate(-1);
  };

  return (
    favoritePlace &&
    <div className={styles.favorite_place}>
      <Link to={'/favorites'}>
        <button className={styles.back_button}>
          &#9664; Избранное
        </button>
      </Link>
      <div className={styles.favorite_item}>
        <img src={favoritePlace?.preview ? favoritePlace?.preview?.source : undefinedPlaceImg} alt="background" className={styles.place_image} />
        <div className={styles.type_icons}>
          {options.filter(option => favoritePlace.kinds.includes(option.kind)).slice(0, 2).map((option, idx) => (
            <img key={idx} src={option.imgSrc} alt="foreground" />
          ))}
        </div>
        <h1>
          {favoritePlace.name}
        </h1>
        <div className={styles.bottom_section}>
          <button className={styles.delete_button} onClick={() => handleToggleFavorite(favoritePlace.xid)}>
            <img src={images.filledHeartImg} alt='favorite' />
          </button>
          <button className={styles.route_button}>Маршрут</button>
        </div>
      </div>
    </div>
  );
}

export default FavoritePlace;
