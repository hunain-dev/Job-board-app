import { useState } from "react";
import Button from "./Button";

const SearchList = ({ onFilter }) => {
  const [title, setTitle] = useState("");       
  const [Location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(title, Location);
  };

  return (
    <div className="SearchList">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="jobs ,tittle, keyword"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="city , state"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button type="submit" btn="Find - jobs" />
      </form>
    </div>
  );
};

export default SearchList;
