import React, { useState } from "react";
import { Search } from "lucide-react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);  // সার্চ ফাংশন কল করো সার্চ টার্ম সহ
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4 py-4 md:py-6 flex justify-end">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <input
            type="search"
            placeholder="Search Task..."
            aria-label="Search Task"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#1F2937] w-full pl-4 pr-10 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
