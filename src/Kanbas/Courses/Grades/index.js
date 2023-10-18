import db from "../../Database";
import { useParams } from "react-router-dom";
import { AiOutlineImport } from "react-icons/ai";
import { AiOutlineExport } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { AiFillFilter } from "react-icons/ai";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div class="wd-flex-row-container">
      <div>
        <div className="wd-flex-row-container">
          <div className="wd-flex-grow-1 grades-table">
            <div className="buttons-grades-top">
              <button type="button" className="btns-grades btn btn-light">
                <AiOutlineImport />
                Import
              </button>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle btns-grades"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineExport />
                  Export
                </button>
              </div>
              <button type="button" className="btn btn-light btns-grades">
                <FiSettings />
              </button>
            </div>
            <br />
            <br />
            <div className="row dropdown-grades">
              <div className="col">
                <label for="student-names" className="form-label">
                  <b>Student Names</b>
                </label>
                <div class="input-group">
                  <input
                    class="form-select assignment-names"
                    id="student-names"
                    placeholder="Search Students"
                  />
                </div>
              </div>
              <div className="col">
                <label for="assignment-names" className="form-label">
                  <b>Assignment Names</b>
                </label>
                <div className="input-group">
                  <input
                    className="form-select assignment-names"
                    id="assignment-names"
                    placeholder="Search Assignments"
                  />
                </div>
              </div>
            </div>

            <button type="button" class="btn btn-light apply-filters">
              <AiFillFilter />
              Apply Filters
            </button>

            <div className="table-responsive">
              <table className="table">
                <thead className="grades-table-head">
                  <tr class="table-secondary">
                    <th className="text-left names-grades">Student Name</th>
                    {assignments.map((assignment) => (
                      <th className="text-center title-of-table">
                        {assignment.title}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody valgin="middle" className="grades-table-body">
                  {enrollments.map((enrollment) => {
                    const user = db.users.find(
                      (user) => user._id === enrollment.user
                    );
                    return (
                      <tr valign="middle">
                        <td className="color-red border names-grades">
                          {user.firstName} {user.lastName}
                        </td>
                        {assignments.map((assignment) => {
                          const grade = db.grades.find(
                            (grade) =>
                              grade.student === enrollment.user &&
                              grade.assignment === assignment._id
                          );
                          return (
                            <td className="text-center">
                              {grade?.grade || ""}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Grades;
