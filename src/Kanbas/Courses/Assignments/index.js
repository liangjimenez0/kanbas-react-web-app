import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div class="wd-assignments-page">
      <br></br>
      <br></br>
      <br></br>
      <div class="row grades-header flex-grow">
        <div class="input-group col mb-3 search-for-assignments">
          <input
            type="text"
            class="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div class="col buttons-assignments-top">
          <button type="button" class="btn btn-light float-end">
            <div class="wd-flex-row-container">
              <AiOutlinePlus className="assignment-buttons" />
              Group
            </div>
          </button>
          <button type="button" class="btn btn-danger float-end">
            <div class="wd-flex-row-container">
              <AiOutlinePlus className="assignment-buttons" /> Assignment
            </div>
          </button>
          <button type="button" class="btn btn-light float-end">
            <BsThreeDotsVertical />
          </button>
        </div>
        <hr />
      </div>

      <div className="assignments-table">
        <div className="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary home-page-module-title">
            <div class="wd-flex-row-container">
              <i class="fa fa-arrow-down arrow-assignments"> </i> ASSIGNMENTS
            </div>

            <div class="btns-assignment">
              <span class="badge rounded-pill">
                <div class="wd-text-color-black">40% of Total</div>
              </span>
              <span>
                <AiOutlinePlus />
              </span>
              <span>
                <BsThreeDotsVertical />
              </span>
            </div>
          </li>
          <div className="border-green-left">
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item d-flex justify-content-between align-items-center assignment-item"
              >
                <div className="assignment-title-group">
                  <AiFillFile className="wd-text-color-green"></AiFillFile>
                  <span className="assignment-title">{assignment.title}</span>
                </div>
                <div className="check-and-ellipsis">
                  <BsCheckCircleFill className="wd-text-color-green check-assignment" />
                  <BsThreeDotsVertical />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
