import React from "react";
import SearchList from "../Components/SearchList";
import Button from "../Components/Button";
const Topcompanies = () => {
  const popularcompanies = [
    {
      backgroundcolor: "white",
    },

    {
      backgroundcolor: "white",
    },
     {
      backgroundcolor: "white",
    },

    {
      backgroundcolor: "white",
    },
    {
      backgroundcolor: "white",
    },

    {
      backgroundcolor: "white",
    },

    {
      backgroundcolor: "white",
    },

    {
      backgroundcolor: "white",
    },
    {
      backgroundcolor: "white",
    },

   git init
  ];
  return (
    <div className="Topcompanies">
      <div className="Topcompaniesupper">
        <h3>Find great places to work</h3>
        <h4>Discover real reviews from real professionals</h4>
<SearchList>
</SearchList>      </div>
      <div className="Topcompaniesbottom">
        <h3>Popular companies</h3>

        <div className="popularcompany">
          {popularcompanies.map((elem, index) => {
            return (
              <div
                key={index}
                className="popularcompaniescard"
                style={{ backgroundColor: elem.backgroundcolor }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topcompanies;
