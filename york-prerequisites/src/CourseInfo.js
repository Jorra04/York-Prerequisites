import React from "react";

const CourseInfo = ({ course_id, prerequisites }) => {
    return (
        <div className="course">
            <h1 className="course-id">{course_id}</h1>
            <p className="prerequisites">Prerequisites: {prerequisites.join(', ')}</p>
        </div>
    );
  };


export default CourseInfo;