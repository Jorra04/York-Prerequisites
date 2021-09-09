import React, { useState, useEffect } from "react";
import {
  Link,
  Redirect,
} from "react-router-dom";
import exitButton from "../exit.svg"
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
    if (name === undefined) {
      throw "Undefined Request."
    }
    return (
      <>
        <div className="courseInformation">
          <div className="button-div">
            <Link to="/">
              <img className="exit-button" src={exitButton}  alt="Exit button closing popup"></img>
            </Link>
          </div>
          <div className="courseInformation-header">
            <h1>{name}</h1>
          </div>

          <div className="courseInformation-details">
            {courses === undefined || courses.length === 0 ? (
              <h3 id="established"><span className="courseDetail-title">Prerequisites for {name}: </span>This Course Has No Prerequisites.</h3>
            ) : (
              <h3 id="established"><span className="courseDetail-title">Prerequisites for {name}: </span> {courses.join(", ")}</h3>)}
          </div>
          <div className="courseInformation-details">
            {coursesReq === undefined || coursesReq.length === 0 ? (
              <h3 id="established"><span className="courseDetail-title">Courses requiring {name}: </span>No courses require {name}.</h3>
            ) : (
              <h3 id="established"><span className="courseDetail-title">Courses requiring {name}: </span> {coursesReq.join(", ")}</h3>)}
          </div>
          <div className="courseInformation-disclaimer">
            <p>*Please be aware that information on this page may be out of date. Please remember that this application
              is not intended to be your sole tool when enrolling in courses, always do your due diligence.</p>
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
