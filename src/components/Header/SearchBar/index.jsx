import "./SearchBar.style.css";
import { ReactComponent as SearchIcon } from "../../../assets/images/search-icon.svg";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(delay);
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
