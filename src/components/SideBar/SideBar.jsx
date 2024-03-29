import './SideBar.css'

import favouriteImg from "@assets/favourite.svg";
import loginImg from "@assets/login.svg";
import logoImg from "@assets/logo.svg";
import searchImg from "@assets/search.svg";
import { useState } from 'react';

import SearchBar from '@/SearchBar/SearchBar';

const Sidebar = () => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const toggleSearchBar = () => {
        setSearchBarOpen(!searchBarOpen);
    }

    console.log(searchBarOpen);
    return (
        <div className='sidebar'>
            <div className="search-buttons">
                <button className="sidebar-button">
                    <img src={logoImg} alt='logo' />
                </button>
                <button className="sidebar-button" onClick={toggleSearchBar}>
                    <img src={searchImg} alt='search' />
                </button>
                <button className="sidebar-button">
                    <img src={favouriteImg} alt='favourite' />
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
