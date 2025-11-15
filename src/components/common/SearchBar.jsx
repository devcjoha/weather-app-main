import iconSearch from "../../assets/images/icon-search.svg";
const SearchBar = () => {
  return (
    <>
      <div className="search-bar flex flex-wrap w-85 lg:w-180 gap-3 justify-center h-auto items-center ">
        <div className="input-container lg:w-140 flex items-center w-full h-full relative">
          <img
            src={iconSearch}
            alt="icon-search"
            className=" left-4 absolute "
          />
          <input
            name="search"
            type="search"
            //   value={""}
            placeholder="Search for a place..."
            autoComplete="on"
            src="image-search"
            className="input-search-bar w-full  h-15 pl-12 border-transparent rounded-2xl bg-card-dark"
          />
        </div>
        <button
          type="button"
          value={""}
          name="search"
          className="border-transparent rounded-2xl h-15 text-[1.3rem] lg:w-30 w-full p-1 bg-Blue-500 hover:bg-Blue-600"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
