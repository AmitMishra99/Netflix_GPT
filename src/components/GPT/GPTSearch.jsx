import React, { useState } from "react";
import GPTMoviesSuggested from './GPTMoviesSuggested'


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Later: call API and update suggested movies
  };
  return (
    <div className="bg-gray-900 text-white p-6">
      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className=" flex  mb-8 mt-13 p-5  ">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for movies or shows..."
          className="w-[90%] p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500  mr-5 rouded-xl"
        />
      <button className="w-20 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-2xl">Search </button>
      </form>
      <GPTMoviesSuggested searchTerm={searchTerm}/>
      
    </div>

  );
};

export default SearchPage;
