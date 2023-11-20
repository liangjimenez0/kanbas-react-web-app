import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { createModule, findModulesForCourse } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="list-group-home-modules">
      <div className="top-of-home">
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
      <ul className="list-group edit-module-group">
        <li className="list-group-item">
          <input
            className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <span className="float-end add-and-update">
            <button className="btn btn-success" onClick={handleAddModule}>
              Add
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleUpdateModule(module)}
            >
              Update
            </button>
          </span>
        </li>
      </ul>

      <ul className="list-group list-group-home-modules">
        <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary home-page-module-title">
          <div class="wd-flex-row-container week-0-title">Week 0 - INTRO</div>
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
                    <button
                      className="btn btn-warning"
                      onClick={() => dispatch(setModule(module))}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteModule(module._id)}
                    >
                      Delete
                    </button>

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
