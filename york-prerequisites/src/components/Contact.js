import React from "react";
import "./Contact.css"

const About = () => {
  return (
    <div className="body">
      <div className="header" id="header">
        <h1>About this App</h1>
      </div>
      <div className="paragraphs">
            <div className="first-paragraph">
                <h1>What is the purpose of this app?</h1>
                <p>The purpose of this web app is to help students easily see both prerequisites for a given course and
                    to see what courses depend on a given course. This information was pulled from the 2021 FW course
                    schedule and should not be the sole source of your information. As confident as I am in my design, I
                    would advise each and every user to do their own research to see the exact relationship between
                    courses.</p>
            </div>
            <div className="second-paragraph">
                <h1>Who is this app for?</h1>
                <p>This application is for any EECS, ESSE, or ENG student who would like to get a quick glimpse of what
                    the relationship is for a given course. It can tell you the prerequisites for a course or it can
                    tell you what future courses depend on the completion of a given course. This application was made
                    by students for students; however, it should not be used as the sole resource for signing up for
                    classes. I would strongly recommend you use this application as a road map and then validate your
                    choices with information provided directly from York University.</p>
            </div>
            <div className="third-paragraph">
                <h1>Should you use this app to enrol in courses?</h1>
                <p>This Web Application is in no way affiliated with York University nor is it affiliated with any of
                    the university’s faculties and therefore, should not be used as the sole resource to enrol in your
                    courses. The best way to use this application is to get an idea of the relationship each course has
                    with other courses (both prerequisites and courses requiring that course). This application should
                    be used as a guide to help students get an idea of what may be required of them without constantly
                    checking York Universities website. The Information was pulled from the 2021 FW schedule.</p>
            </div>
        </div>
    </div>
  );
};

export default About;
