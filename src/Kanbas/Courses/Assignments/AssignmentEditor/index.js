import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="assignment-editor">
      <div className="float-end">
        <button className="btn">
          <BsCheckCircleFill className="check-assignment-editor" />
          <span className="published">Published</span>
        </button>
        <button className="btn btn-light">
          <BsThreeDotsVertical />
        </button>
      </div>
      <br></br>
      <br></br>
      <hr />
      <h2 className="assignment-name">Assignment Name</h2>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
      <div className="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-light"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
