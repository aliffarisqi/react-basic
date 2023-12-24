import axios from "axios";

const Put = (rootPath, path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${rootPath}/${path}`, data).then(
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

export default Put;
