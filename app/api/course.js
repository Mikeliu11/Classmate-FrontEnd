import client from "./client";

const endpoint = "/course";

const getCourses = () => client.get("/course");

const getMessages = (courseName) => {
  return client.get("/course/message", { courseName: courseName });
};

const sendMessages = (courseName, message) => {
  return client.post("/course/message", {
    courseName: courseName,
    message: message,
  });
};

const joinCourse = (courseName) => {
  return client.post("/course/join", { courseName: courseName });
};

export default {
  getCourses,
  getMessages,
  sendMessages,
  joinCourse,
};
