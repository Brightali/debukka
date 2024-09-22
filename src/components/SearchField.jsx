import { useContext } from "react";
import { searchIcon } from "../assets/images";
import SearchResult from "./SearchResult";
import { AppContext } from "../context/AppContext";

const SearchField = () => {
  const { search, setSearch } = useContext(AppContext);

  return (
    <div className="frame">
      <div
        className={`fixed z-50  top-0 left-0 w-dvw h-dvh bg-white ${
          search.length > 0 ? "block" : "hidden pointer-events-none"
        }`}
      ></div>
      <div
        className={`inner-frame py-3 ${
          search.length > 0
            ? "absolute top-4 z-50 -translate-x-[50%] left-[50%] "
            : ""
        }`}
      >
        <label className="relative flex gap-2 rounded-2xl bg-main_red/5 px-3 md:px-8 py-1 md:py-6 w-[95%] max-w-[900px] bg-slate-50 mx-auto">
          <img src={searchIcon} width={20} alt="" />
          <input
            name="foodsearch"
            placeholder="Search for your favourite food"
            className="px-3 py-2 w-full outline-none bg-transparent placeholder-gray-800 text-sm"
            style={{ fontSize: "16px" }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <SearchResult />
        </label>
      </div>
    </div>
  );
};

export default SearchField;
