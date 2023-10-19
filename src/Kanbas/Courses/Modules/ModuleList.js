import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="list-group-home-modules">
      <div className="top-of-home">
        {/* <br></br>
        <br></br>
        <br></br> */}
        <button type="button" class="btn btn-light float-end">
          <BsThreeDotsVertical />
        </button>
        <button type="button" class="btn btn-danger float-end">
          <AiOutlinePlus /> Module
        </button>

        <div class="dropdown">
          <button
            class="btn btn-light dropdown-toggle float-end"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsCheckCircleFill className="wd-text-color-green" /> Publish All
          </button>
        </div>

        <button type="button" class="btn btn-light float-end">
          View Progress
        </button>
        <button type="button" class="btn btn-light float-end">
          Collapse All
        </button>
        <br />
        <br />
        <hr />
        <br />
      </div>
      <ul className="list-group list-group-home-modules">
        <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary home-page-module-title">
          <div class="wd-flex-row-container">Week 0 - INTRO</div>
          <div class="check-and-ellipsis">
            <BsCheckCircleFill className="wd-text-color-green" />
            <BsThreeDotsVertical />
          </div>
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div>
              <div className="home-titles">
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="home-page-module-item wd-flex-row-container">
                    {module.name}
                  </div>
                  <div className="check-and-ellipsis">
                    <BsCheckCircleFill className="wd-text-color-green" />
                    <BsThreeDotsVertical />
                  </div>
                </li>
              </div>

              <div className="home-page-module-subitems">
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {module.description}

                  <div className="check-and-ellipsis">
                    <BsCheckCircleFill className="wd-text-color-green" />
                    <BsThreeDotsVertical />
                  </div>
                </li>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
