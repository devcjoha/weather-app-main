import iconSearch from "../../assets/images/icon-search.svg";
import { useState } from "react";
const SearchBar = ({ searchWeather }) => {
  const [search, setSearch] = useState("");

  const handleSearchOnChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    if (!search.trim()) return;
    searchWeather(search);
    setSearch("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmitSearch}
        className="search-bar flex flex-wrap w-85 lg:w-180 gap-3 justify-center h-auto items-center "
      >
        <div className="input-container lg:w-140 flex items-center w-full h-full relative border dark:border-transparent border-border-card-light rounded-2xl focus:outline-none focus:border-2 focus:border-Blue-500">
          <img
            src={iconSearch}
            alt="icon-search"
            className="icon-search left-4 absolute invert dark:invert-0 dark:brightness-100 brightness-75"
          />
          <input
            name="search"
            type="search"
            placeholder="Search for a place..."
            autoComplete="on"
            value={search}
            src="image-search"
            className="input-search-bar w-full h-15 pl-12 border-transparent rounded-2xl dark:bg-card-dark bg-card-light"
            onChange={handleSearchOnChange}
            aria-label="Search for a place"
          />
        </div>
        <button
          type="submit"
          name="search"
          className="button-search rounded-2xl h-15 text-[1.3rem] lg:w-30 w-full p-1 bg-Blue-500 hover:bg-Blue-700  text-text-dark cursor-pointer
          focus:outline-2 focus:outline-offset-2 focus:outline-Blue-500 focus:bg-Blue-700"
        >
          Search
        </button>
      </form>
    </>
  );
};
export default SearchBar;
