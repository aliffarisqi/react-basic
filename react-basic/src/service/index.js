import { LocalPatch, OnlineRoot } from "./Config";
import Delete from "./Delete";
import Get from "./Get";
import Post from "./Post";
import Put from "./Put";

//GET
const getNewsBlog = () => Get(LocalPatch, "posts?_sort=id&_order=desc");
const getComentsBlog = () => Get(OnlineRoot, "comments");

//POST
const postNewsBlog = (data) => Post(LocalPatch, "posts", data);

//PUT
const updateNewsBlog = (data, id) => Put(LocalPatch, `posts/${id}`, data);

//DELETE
const deleteNewsBlog = (id) => Delete(LocalPatch, `posts/${id}`);

const API = {
  getNewsBlog,
  getComentsBlog,
  postNewsBlog,
  updateNewsBlog,
  deleteNewsBlog,
};

export default API;
