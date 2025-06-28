import React from "react";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex justify-end py-4 md:py-6 px-4">
      <div className="relative w-[20rem]">
        <input
          type="search"
          placeholder="Search Task..."
          aria-label="Search Task"
          className="bg-[#1F2937] w-full pl-4 pr-10 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
      </div>
    </div>
  );
}

export default SearchBar;
