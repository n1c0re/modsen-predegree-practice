/* eslint-disable no-unused-vars */
import './SideBar.css'

import favouriteOffImg from "@assets/favourite-off.svg";
import favouriteOnImg from "@assets/favourite-on.svg";
import loginImg from "@assets/login.svg";
import logoImg from "@assets/logo.svg";
import searchOffImg from "@assets/search-off.svg";
import searchOnImg from "@assets/search-on.svg";
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
