import React, { useState, useEffect } from "react";
import {  Redirect,
} from "react-router-dom";

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
    <div>
      {loading ? (
          <div>waiting</div>
      ) : (<CourseInformation
        name={prerequisites.course_id}
        courses={prerequisites.courses}
        coursesReq={coursesRequiring.courses}/>)}
    </div>
  );
};




const CourseInformation = ({ name, courses, coursesReq}) => {
    try {
        return (
            <>
              <div className="header">
                <div>
                  <h1>{name}</h1>
                </div>
                <div className="otherStuff">
                  <h3 id="established">Courses requiring... {courses.join(", ")}</h3>
                </div>
                <div className="otherStuff2">
                  <h3 id="established">Courses requiring... {coursesReq.join(", ")}</h3>
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
