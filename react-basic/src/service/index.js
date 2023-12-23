import { LocalPatch, OnlineRoot } from "./Config";
import Get from "./Get";
import Post from "./Post";

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
