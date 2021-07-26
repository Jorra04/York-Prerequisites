import React, { useEffect, useState } from "react";
import CourseInfo from "./CourseInfo";
import "./Courses.css"

const Teams = () => {
  const exampleReq = `http://yorkapi-env.eba-fi5ekpb4.us-east-2.elasticbeanstalk.com/courses`;
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await fetch(exampleReq);
    const data = await resp.json();
    setTeams(data.courses);
    setLoading(false);
  };

  return (
    <div className="App">
        big guy
    


    <div className="courses">

    
    {teams.map((team) => (
        <CourseInfo key={team._id}
        course_id={team.course_id}
        prerequisites={team.prerequisites}/>
    ))}
    </div>
    </div>
  );
};



export default Teams;

