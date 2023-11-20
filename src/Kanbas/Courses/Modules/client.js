import axios from "axios";
const COURSES_URL = `${API_BASE}/courses`;
const API_BASE = "https://kanbas-node-server-app-oigt.onrender.com";
const MODULES_URL = `${API_BASE}/modules`;
export const updateModule = async (module) => {
  const response = await axios.put(
    `https://kanbas-node-server-app-oigt.onrender.com/api/modules/${module._id}`,
    module
  );
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(
    `https://kanbas-node-server-app-oigt.onrender.com/api/modules/${moduleId}`
  );
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `https://kanbas-node-server-app-oigt.onrender.com/api/courses/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(
    `https://kanbas-node-server-app-oigt.onrender.com/api/courses/${courseId}/modules`
  );
  return response.data;
};
