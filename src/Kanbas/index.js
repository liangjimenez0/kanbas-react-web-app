import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "https://kanbas-node-server-app-oigt.onrender.com/api/courses";

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Course Number",
    startDate: new Date(),
    endDate: new Date(),
  });
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses((currentCourses) => [response.data, ...currentCourses]);
    setCourse({ name: "" });
  };
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  const deleteCourse = async (course) => {
    const response = await axios.delete(`${URL}/${course._id}`);

    setCourses(courses.filter((c) => c._id !== course._id));
  };
  const updateCourse = async (course) => {
    const response = await axios.put(`${URL}/${course._id}`, course);

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  setCourses={setCourses}
                  course={course}
                  setCourse={setCourse}
                  addCourse={addCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
