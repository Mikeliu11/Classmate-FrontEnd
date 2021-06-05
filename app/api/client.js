import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL:
    "http://classmatebackend-env.eba-uzmg53uz.us-east-1.elasticbeanstalk.com/",
  // "http://classmatebackend-env.eba-uzmg53uz.us-east-1.elasticbeanstalk.com/",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = authToken;
});

// const get = apiClient.get;
// apiClient.get = async (url, params, axiosConfig) => {
//   const response = await get(url, params, axiosConfig);

//   if (response.ok) {
//     cache.store(url, response.data);
//     return response;
//   }

//   const data = await cache.get(url);
//   return data ? { ok: true, data } : response;
// };

export default apiClient;
