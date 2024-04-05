import './SideBar.css'

import { favouriteOffImg, favouriteOnImg, loginImg, logoImg, searchOffImg, searchOnImg } from '@constants/icons'
import { useState } from 'react';

import SearchBar from '@/SearchBar/SearchBar';

const Sidebar = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [favouriteBarOpen, setFavouriteBarOpen] = useState(false);

  const toggleSearchBar = () => {
    setSearchBarOpen(!searchBarOpen);
    setFavouriteBarOpen(false);
  }

  const toggleFavouriteBar = () => {
    setFavouriteBarOpen(!favouriteBarOpen);
    setSearchBarOpen(false);
  }

  return (
    <div className='sidebar'>
      <div className="search-buttons">
        <button className="sidebar-button">
          <img src={logoImg} alt='logo' />
        </button>
        <button className="sidebar-button" onClick={toggleSearchBar}>
          <img src={searchBarOpen ? searchOnImg : searchOffImg} alt='search' />
        </button>
        <button className="sidebar-button" onClick={toggleFavouriteBar}>
          <img src={favouriteBarOpen ? favouriteOnImg : favouriteOffImg} alt='favourite' />
        </button>
      </div>
      <button className='login-button'>
        <img src={loginImg} alt='login' />
      </button>
      <SearchBar isOpen={searchBarOpen} />
    </div>
  );
};

export default Sidebar;
