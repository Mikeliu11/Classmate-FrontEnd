import client from "./client";

const endpoint = "/course";

const getCourses = () => client.get(endpoint);

export default {
  getCourses,
};
