import React, { useState } from "react";
import SearchList from "../Components/SearchList";

const Topcompanies = () => {
   const popularcompanies = [
    {
      backgroundcolor: "white",
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-meta-3d-icon-download-in-png-blend-fbx-gltf-file-formats--twitter-logo-social-media-pack-logos-icons-7516842.png?f=webp",
      name: "Meta",
      role: "AI Engineer",
      location: "Remote / USA",
      logo: "https://logo.clearbit.com/meta.com",
      hiringFor: ["Frontend", "AI/ML", "Data Science"],
    },

    {
      backgroundcolor: "white",
      name: "TCS",
      role: "Software Developer",
      location: "Mumbai, India",
      logo: "https://logo.clearbit.com/tcs.com",
      hiringFor: ["Full Stack", "Backend", "Support"],
    },
    {
      backgroundcolor: "white",
      name: "xAI",
      role: "Swift Developer",
      location: "Remote",
      logo: "https://static.vecteezy.com/system/resources/previews/029/129/369/non_2x/x-3d-icon-free-png.png",
      hiringFor: ["macOS", "AI", "Swift"],
    },

    {
      backgroundcolor: "white",
      name: "NeoSOFT",
      role: "Junior Developer",
      location: "Pune, India",
      logo: "https://logo.clearbit.com/neosofttech.com",
      hiringFor: ["Entry-level", "Mobile", "Web"],
    },
    {
      backgroundcolor: "white",
      name: "Visa",
      role: "Full Stack Engineer",
      location: "Bengaluru",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxM7oQYAPAaCZp8sx6NoYG7IWheBlJY9yUg&s",
      hiringFor: ["Node.js", "React", "Spring Boot"],
    },

    {
      backgroundcolor: "white",
      name: "S&P Global",
      role: "Data Analyst",
      location: "Islamabad, PK",
      logo: "https://logo.clearbit.com/spglobal.com",
      hiringFor: ["Finance", "M&A", "Entry-level"],
    },

    {
      backgroundcolor: "white",
      name: "London Stock Exchange",
      role: "Backend Developer",
      location: "Hyderabad, India",
      logo: "https://logo.clearbit.com/lseg.com",
      hiringFor: ["Java", "Python", "SQL"],
    },

    {
      backgroundcolor: "white",
      name: "GitLab",
      role: "Remote Developer",
      location: "Remote / Global",
      logo: "https://logo.clearbit.com/gitlab.com",
      hiringFor: ["Remote", "DevOps", "Backend"],
    },
    {
      name: "Cognizant",
      role: "Data Entry Associate",
      location: "Lahore, PK",
      logo: "https://logo.clearbit.com/cognizant.com",
      hiringFor: ["Data Entry", "Excel", "ERP"],
    },
  ];

  const [filteredCompanies, setFilteredCompanies] = useState(popularcompanies);

  const handleFilter = (area, keyword) => {
    const result = popularcompanies.filter((comp) => {
      return (
        (area === "" || comp.name.toLowerCase().includes(area.toLowerCase())) ||
        (keyword === "" || comp.role.toLowerCase().includes(keyword.toLowerCase()))
      );
    });

    setFilteredCompanies(result);
  };

  return (
    <div className="Topcompanies">
      <div className="Topcompaniesupper">
        <h3>Find great places to work</h3>
        <h4>Discover real reviews from real professionals</h4>
        <SearchList onFilter={handleFilter} />
      </div>

      <div className="Topcompaniesbottom">
        <h3>Popular companies</h3>

        <div className="popularcompany">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((elem, index) => (
              <div key={index} className="popularcompaniescard" style={{ backgroundColor: elem.backgroundcolor }}>
                <div className="popularcompaniescardtopsection">
                  <div className="popularcompaniescardtopsectionleft">
                    <img src={elem.logo} alt="" />
                  </div>
                  <div className="popularcompaniescardtopsectionright">
                    <h2>{elem.name}</h2>
                    <h3>{elem.role}</h3>
                    <h4>{elem.location}</h4>
                  </div>
                </div>
                <div className="popularcompaniescardbottomsection">
                  {elem.hiringFor.map((role, i) => (
                    <span key={i} className="hiring-role">{role}</span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No companies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topcompanies;
