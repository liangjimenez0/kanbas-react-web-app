import { Link, useParams, useLocation } from "react-router-dom";
import "../../home.css";
import { FaBars } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Discussion",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];

  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-course-navigation" style={{ width: 150 }}>
      {links.map(
        (link, index) =>
          pathname.includes(link) && (
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb d-none d-md-block">
                <li class="breadcrumb-item active" aria-current="page">
                  <div className="course-nav-top">
                    <FaBars className="bars-red" />
                    <span class="color-red">CS4550.12631.202410</span>{" "}
                    <IoIosArrowForward className="course-arrow" />
                    {link}
                  </div>
                </li>
                {/* <hr /> */}
              </ol>
            </nav>
          )
      )}
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
