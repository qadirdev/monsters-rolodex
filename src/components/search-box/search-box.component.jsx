import "./search-box.style.css";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Search Monsters"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
