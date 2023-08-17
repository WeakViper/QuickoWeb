import { Search } from 'react-bootstrap-icons';
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className="rounded-search-input my-4">
            <div className="search-icon">
                <Search />
            </div>
            <input type="text" placeholder="Search..." className="search-input" />
        </div>
    );
}
 
export default SearchBar;