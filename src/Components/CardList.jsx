import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchList from "./SearchList";

const CardList = () => {
  const [Showdata, setShowdata] = useState([]);
  const [filteredJobs, setfilteredJobs] = useState([]);
  const Api_Url = "https://www.arbeitnow.com/api/job-board-api";

  useEffect(() => {
    Apihandler();
  }, []);

  const Apihandler = async () => {
    try {
      const Response = await axios.get(Api_Url);
      const data = Response.data;
      const Result = data;
      console.log(Result);
      setShowdata(Result.data);
      setfilteredJobs(Result.data);
    } catch {
      console.log("Api Fail please try again");
    }
  };

  const handleFilter = (area, keyword) => {
    const filtered = Showdata.filter((job) => {
      return (
       (area === "" || job.location.toLowerCase().includes(area.toLowerCase())) &&
  (keyword === "" || job.title.toLowerCase().includes(keyword.toLowerCase()))
      );
    });
    setfilteredJobs(filtered);
  };

  return (
    <>
      <SearchList onFilter={handleFilter} />
      <div className="CardList">
        <div className="CardListtop">
          <h2>Jobs for you..!</h2>
          <h4>Jobs based on your activity on CareerHunt.</h4>
        </div>

        <div className="CardListbottom">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((elem, index) => (
              <div key={index} className="Cards">
                <h2>{elem.title}</h2>
                <h4>{elem.company_name}</h4>
                <h4>{elem.location}</h4>
              </div>
            ))
          ) : (
            <p>No matching jobs found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CardList;
