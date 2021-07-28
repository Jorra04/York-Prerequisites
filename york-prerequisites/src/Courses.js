import React, { useEffect, useState } from "react";
import CourseInfo from "./CourseInfo";
import "./Courses.css";

const Teams = () => {
  const request = `http://yorkapi-env.eba-fi5ekpb4.us-east-2.elasticbeanstalk.com/courses`;
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(request);
      const data = await resp.json();
      setAllCourses(data.courses);
    };
    getData();
  }, []);

  const updateSearch = (e) => {
    setSearchText(e.target.value);
  };

  const performSearch = () => {
    let tempCourses = [];
    if(searchText.length != 0) {
      tempCourses = allCourses.filter((course) => {
        return course.course_id.toLowerCase().includes(searchText);
      });
    } 
    

    setCourses(tempCourses);
  };

  const keyPressed = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      performSearch();
    }
  };

  return (
    <div className="App">
      <div className="header" id="header">
        <h1>Search For a Class...</h1>
      </div>
      <div className="search">
        <input
          className="search-bar"
          type="text"
          onChange={updateSearch}
          onKeyDown={keyPressed}
        />
        <button className="search-button">Search</button>
      </div>
      <div className="courses">
        {courses.map((course) => (
          <CourseInfo
            key={course._id}
            course_id={course.course_id}
            prerequisites={course.prerequisites}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;
