import axios from "axios";

// posts?_sort=id&_order=desc
const LocalPatch = "http://localhost:3004";
const OnlineRoot = "https://jsonplaceholder.typicode.com";

const Get = (rootPath, path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${rootPath}/${path}`).then(
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

const getNewsBlog = () => Get(LocalPatch, "posts?_sort=id&_order=desc");
const getComentsBlog = () => Get(OnlineRoot, "comments");

const API = {
  getNewsBlog,
  getComentsBlog,
};

export default API;
