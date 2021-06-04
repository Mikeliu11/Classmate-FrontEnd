import client from "./client";

const login = (email, password) =>
  client.post("/user/login", {
    email: email,
    password: password,
  });

export default {
  login,
};
