import './SideBar.css'

import { favoriteOffImg, favoriteOnImg, loginImg, logoImg, searchOffImg, searchOnImg } from '@constants/icons'
import routes from '@constants/routes.js'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [authUser, setAuthuser] = useState(null);

  const toggleSearchBar = () => {
    pathname === routes.SEARCH ? navigate(routes.HOME) : navigate(routes.SEARCH)
  };

  const toggleFavoriteBar = () => {
    pathname === routes.FAVORITES ? navigate(routes.HOME) : navigate(routes.FAVORITES)
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log('Ура'))
      .catch((error) => { console.log(error) })
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthuser(user)
      } else {
        setAuthuser(null)
      }
    })
    return () => {
      listen();
    }
  }, []);

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
      {authUser ?
        (
          <div>
            {authUser.email}
            <button onClick={userSignOut}>Выйти</button>
          </div>
        ) : <div>Не вошел</div>}
      <Link to={routes.REGISTER}>
        <img src={loginImg} alt='login' />
      </Link>
    </div>
  );
};

export default Sidebar;