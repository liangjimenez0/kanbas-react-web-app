import { Link } from "react-router-dom";
import db from "../Database";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <div class="dashboard-title">
        <h1>Dashboard</h1>
        <hr />
      </div>
      <div class="published-courses">
        <h3>Published Courses (24)</h3>
        <hr />
      </div>
      <div class="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="card text-bg-light mb-3"
          >
            <div class="card-img-top wd-bg-color-blue">
              <BsThreeDotsVertical className="icon" />
            </div>
            <div className="card-body">
              <div className="card-title">
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="card-link"
                  style={{ textDecoration: "none" }}
                >
                  {course.name}
                </Link>
              </div>
              <p class="card-text">{course._id}</p>
              <p class="card-text">
                <small class="text-body-secondary">
                  202410_1 Fall 2023 Semester Full Term
                </small>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;

/* <div class="card text-bg-light mb-3" style="width: 270px">
  <div class="card-img-top wd-bg-color-blue">
    <i class="fa fa-ellipsis-v"></i>
  </div>
  <div class="card-body">
    <a href="home.html">
      <h5 class="card-title wd-text-color-blue">
        CS4550 12631 Web Development
      </h5>
    </a>

    <p class="card-text">CS4550.12631.202410</p>
    <p class="card-text">
      <small class="text-body-secondary">
        202410_1 Fall 2023 Semester Full Term
      </small>
    </p>
    <a href="home.html">
      <i class="fa fa-book"></i>
    </a>
  </div>
</div>; */
