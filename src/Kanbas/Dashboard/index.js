import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard({
  courses,
  course,
  setCourse,
  addCourse,
  deleteCourse,
  updateCourse,
}) {
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
      <div className="update-courses">
        <h5>Course</h5>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button className="btn btn-success" onClick={addCourse}>
          Add
        </button>
        <button className="btn btn-primary" onClick={updateCourse}>
          Update
        </button>
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
              <span className="buttons-on-dashboard-cards">
                <button
                  className="btn btn-warning"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course);
                  }}
                >
                  Delete
                </button>
              </span>
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
