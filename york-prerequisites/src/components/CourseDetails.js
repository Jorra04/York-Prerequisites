import React, { useState, useEffect } from "react";
import {
  Redirect,
} from "react-router-dom";
import LoadingScreen from "./Loading Screen/LoadingScreen";
import "./CourseDetails.css"

const CourseDetails = ({ match }) => {
  useEffect(() => {
    fetchCourse();
  }, []);

  const [prerequisites, setPrerequisites] = useState([]);
  const [coursesRequiring, setCoursesRequiring] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {

    const fetchedCourses = await fetch(
      `http://yorkapi-env.eba-fi5ekpb4.us-east-2.elasticbeanstalk.com/prerequisites/coursesRequired/${match.params.faculty + "%2f" +
      match.params.department}/${match.params.course}`
    );

    const fetchedRequiringCourses = await fetch(
      `http://yorkapi-env.eba-fi5ekpb4.us-east-2.elasticbeanstalk.com/prerequisites/coursesRequiring/${match.params.faculty + "%2f" +
      match.params.department}/${match.params.course}`
    );
    const course1 = await fetchedCourses.json();
    const course2 = await fetchedRequiringCourses.json();
    setPrerequisites(course1);
    setCoursesRequiring(course2)
    setLoading(false);

  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="expanded-course-info">
          <CourseInformation
            name={prerequisites.course_id}
            courses={prerequisites.courses}
            coursesReq={coursesRequiring.courses} />
        </div>)}
    </>
  );

};




const CourseInformation = ({ name, courses, coursesReq }) => {
  try {
    return (
      <>
        <div className="header">
          <div>
            <h1>{name}</h1>
          </div>
          <div className="otherStuff">
            {courses === undefined || courses.length === 0 ? (
              <h3 id="established"><span className="courseDetail-title">Prerequisites for {name}:</span>This Course Has No Prerequisites.</h3>
            ) : (
              <h3 id="established"><span className="courseDetail-title">Prerequisites for {name}:</span> {courses.join(", ")}</h3>)}
          </div>
          <div className="otherStuff2">
          {coursesReq === undefined || coursesReq.length === 0 ? (
              <h3 id="established"><span className="courseDetail-title">Courses requiring {name}:</span>No courses require {name}.</h3>
            ) : (
              <h3 id="established"><span className="courseDetail-title">Courses requiring {name}:</span> {coursesReq.join(", ")}</h3>)}
          </div>
        </div>
      </>
    );
  } catch (err) {
    return (
      <Redirect from="./" to="/404" />
    )
  }
};

export default CourseDetails;
