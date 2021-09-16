import getRequest from "./getRequesit";

export default function getSingle(id, url = '/data/single.json'){
  const result = getRequest(url);
  return result;
}
