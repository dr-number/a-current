import getRequest from "./getRequesit";

export default function getHomeOurBlog(url = 'data/homeOurBlog.json'){
  const result = getRequest(url);
  return result;
}
