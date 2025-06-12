import React, { useState } from "react";

const SearchList = ({ onFilter }) => {
  const [area, setArea] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(area, keyword);
  };

  return (
    <div className="SearchList">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="jobs ,tittle, keyword"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <input
          type="text"
          placeholder="city , state"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchList;
