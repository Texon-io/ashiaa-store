import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ onSearch, query, setQuery }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="relative w-full max-w-xl mx-auto ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-600" />
      </div>

      <input
        type="text"
        className="block w-full p-3 pl-10 pr-10 text-md text-gray-800 border border-gray-200 rounded-xl bg-main-bg-2 focus:ring-2 focus:ring-accent-dark-2 focus:border-transparent outline-none transition-all duration-300 shadow-sm"
        placeholder="بتدور على إيه في أشياء؟"
        value={query}
        onChange={handleInputChange}
      />

      {query && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
