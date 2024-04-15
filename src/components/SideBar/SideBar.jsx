import './SideBar.css'

import { favoriteOffImg, favoriteOnImg, loginImg, logoImg, searchOffImg, searchOnImg } from '@constants/icons'
import routes from '@constants/routes.js'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleSearchBar = () => {
    pathname === routes.SEARCH ? navigate(routes.HOME) : navigate(routes.SEARCH)
  };

  const toggleFavoriteBar = () => {
    pathname === routes.FAVORITES ? navigate(routes.HOME) : navigate(routes.FAVORITES)
  };

  return (
    <div className='sidebar'>
      <div className="search-buttons">
        <Link to={routes.HOME}>
          <img src={logoImg} alt='logo' />
        </Link>
        <button className="sidebar-button" onClick={toggleSearchBar}>
          <img src={pathname === routes.SEARCH ? searchOnImg : searchOffImg} alt='search' />
        </button>
        <button className="sidebar-button" onClick={toggleFavoriteBar}>
          <img src={pathname === routes.FAVORITES ? favoriteOnImg : favoriteOffImg} alt='favorite' />
        </button>
      </div>
      <button className='login-button'>
        <img src={loginImg} alt='login' />
      </button>
    </div>
  );
};

export default Sidebar;