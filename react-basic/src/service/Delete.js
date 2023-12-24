import axios from "axios";

const Delete = (rootPath, path) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${rootPath}/${path}`).then(
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

export default Delete;
