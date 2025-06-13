import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchList from "./SearchList";
import { useNavigate } from "react-router-dom";

const CardList = () => {
  const Navigate = useNavigate();

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

  const handleFilter = (tittle, Location) => {
    const filtered = Showdata.filter((job) => {
      return (
        (tittle === "" ||
          job.title?.toLowerCase().includes(tittle.toLowerCase())) &&
        (Location === "" ||
          job.location?.toLowerCase().includes(Location.toLowerCase()))
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
              <div
                key={index}
                className="Cards"
                onClick={() => Navigate(`/job/${index}`, {state:{job:elem}})}
              >
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
