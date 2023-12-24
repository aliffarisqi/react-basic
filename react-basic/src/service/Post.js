import axios from "axios";

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

export default Post;
