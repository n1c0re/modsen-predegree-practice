import './SearchBar.css'

const SearchBar = ({isOpen}) => {
    return (
        <div className={`searchbar ${isOpen ? 'open' : ''}`}>
            a
        </div>
    );
}

export default SearchBar;