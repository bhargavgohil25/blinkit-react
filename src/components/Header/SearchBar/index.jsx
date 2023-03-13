import "./SearchBar.style.css";
import { ReactComponent as SearchIcon } from "../../../assets/images/search-icon.svg";

const SearchBar = () => {
  return (
    <div className="search__bar--container">
      <div className="search__bar">
        <div className="search__bar--icon">
          <SearchIcon />
        </div>
        <div className="search__bar--input">
          <input
            type="text"
            placeholder='Search "Butter", "Chocalate" and more'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
