import client from "./client";

const endpoint = "/course";

const getCourses = () => client.get("/course");

const getMessages = (courseName) =>
  client.get("/course/message", { courseName: courseName });

export default {
  getCourses,
  getMessages,
};
