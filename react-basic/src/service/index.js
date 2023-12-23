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

const Post = (rootPath, path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${rootPath}/${path}`, data).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

//GET
const getNewsBlog = () => Get(LocalPatch, "posts?_sort=id&_order=desc");
const getComentsBlog = () => Get(OnlineRoot, "comments");

//POT
const postNewsBlog = (data) => Post(LocalPatch, "posts", data);

const API = {
  getNewsBlog,
  getComentsBlog,
  postNewsBlog,
};

export default API;
