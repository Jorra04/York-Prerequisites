import React, { useEffect, useState } from "react";
import CourseInfo from "./CourseInfo";
import "./Courses.css";

const Teams = () => {
  const request = `http://yorkapi-env.eba-fi5ekpb4.us-east-2.elasticbeanstalk.com/courses`;
  const [teams, setTeams] = useState([]);
  const [teamsOriginal, setTeamsOriginal] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {

    const getData = async () => {
      const resp = await fetch(request);
      const data = await resp.json();
      setTeams(data.courses);
      setTeamsOriginal(data.courses);
    };


    getData();
  }, []);

  const updateSearch = (e) => {
    setSearchText(e.target.value);
    let newTeams = teamsOriginal.filter((team) => {
      return team.course_id.toLowerCase().includes(e.target.value);
    });

    setTeams(newTeams);
  };

  

  return (
    <div className="App">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          value={searchText}
          onChange={updateSearch}
        />
      </div>

      <div className="courses">
        {teams.map((team) => (
          <CourseInfo
            key={team._id}
            course_id={team.course_id}
            prerequisites={team.prerequisites}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;
