import React, {useState, useEffect} from "react";
import "./CourseInfo.css"
const CourseInfo = ({ course_id, prerequisites }) => {

    const [hasPrerequisites, setHasPrerequisites] = useState(false);


    useEffect(() => {
        setHasPrerequisites(!(prerequisites === undefined || prerequisites.length === 0))
      }, []);

    


    return (
        <div className="course">
            <h1 className="course-id">{course_id}</h1>
            {hasPrerequisites ? <p className="prerequisites">Prerequisites: {prerequisites.join(', ')}</p>  : <p className="prerequisites">No Prerequisites</p>}
        </div>
    );
  };


export default CourseInfo;