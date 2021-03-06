import React, { useEffect, useState } from "react";
import CourseInfo from "./CourseInfo";
import "./Courses.css";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Teams = () => {
  const request = `https://prerequisitechecker-york.herokuapp.com/courses`;
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(8);

  const [firstSearch, setFirstSearch] = useState(true);

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
    if (firstSearch) {
      setFirstSearch(false);
    }
    let tempCourses = [];
    if (searchText.length !== 0) {
      tempCourses = allCourses.filter((course) => {
        return course.course_id
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });

      setCurrentPage(1);
    }

    setCourses(tempCourses);
  };

  const keyPressed = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      performSearch();
    }
  };

  const indexOfLastPost = currentPage * coursesPerPage;
  const indexOfFirstPost = indexOfLastPost - coursesPerPage;
  const currentPosts = courses.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App-container">
      <div className="search-interface">
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
          <button className="search-button" onClick={performSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="fetched-information">
        {courses.length !== 0 ? (
          <>
            <div className="courses">
              <FoundCourses courses={currentPosts} />
            </div>
            <div className="pagination-pages">
              <Pagination
                postsPerPage={coursesPerPage}
                totalPosts={courses.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </>
        ) : !firstSearch ? (
          <NoCoursesFound />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const FoundCourses = ({ courses }) => {
  return courses.map((course) => (
    <Link
      className="coursePage"
      to={`/courseDetail/${course.course_id.replace(
        /[0-9 ]/g,
        ""
      )}/${course.course_id.replace(/[a-zA-z/ ]/g, "")}`}
    >
      <CourseInfo
        key={course._id}
        course_id={course.course_id}
        prerequisites={course.prerequisites}
      />
    </Link>
  ));
};

const NoCoursesFound = () => {
  return (
    <div className="course-search-fail">
      <h2 className="course-search-fail-title">
        No Courses Match Your Search...
      </h2>
      <h4 className="course-search-fail-message">
        Please refine your search, or contact us to report any shortcomings!
      </h4>
    </div>
  );
};

export default Teams;
