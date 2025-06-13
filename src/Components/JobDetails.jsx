import React from "react";
import { useLocation, useParams } from "react-router-dom";
import SearchList from "./SearchList";
import Button from "./Button";
import { CiLocationOn } from "react-icons/ci";

const JobDetails = () => {
  const { id } = useParams();
  const Location = useLocation();
  const job = Location.state?.job;
  return (
    <div className="JobDetails">
      <SearchList />
      <>
        <div className="Job-desc">
          <h2>{job.title}</h2>
          <h4>{job.company_name}</h4>
          <h4>{job.location}</h4>
          <Button btn="apply now"  Link={job.url} />
          <h5>Job details</h5>
          <p>Here’s how the job details align with your</p>
          <div className="job-type">
            <h6>job-type </h6>
            <Button btn="full-time"  backgroundColor="#C4ECC8" color="black" />
          </div>

          <div className="location">
            <h6>Location</h6>
            <h4>
              <CiLocationOn /> {job.location}
            </h4>
          </div>

          <div className="job-desc">
            <h6>Full job description</h6>
            <p>{job.description}</p>
          </div>
          <div className="remote-job">
            <h5>Remote-job</h5>
            <h6 style={{ color: job.remote ? "black" : "black" }}>
              {job.remote ? "✔️ Remote Available" : "❌ Not Remote"}
            </h6>
          </div>

          <div className="work-location">
            <h6>Work-location: in person</h6>

          </div>
          <div className="report-job">
            <Button btn="Report-job" backgroundColor="#E4E2E0" color="black" />
          </div>
        </div>
      </>
    </div>
  );
};

export default JobDetails;
