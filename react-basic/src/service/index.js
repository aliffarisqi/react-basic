import axios from "axios";

// posts?_sort=id&_order=desc
const RootPath = "http://localhost:3004";

const Get = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${RootPath}/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const getNewsBlog = () => Get("posts?_sort=id&_order=desc");

const API = {
  getNewsBlog,
};

export default API;
