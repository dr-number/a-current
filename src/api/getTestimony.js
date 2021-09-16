import getRequest from "./getRequesit";

export default function getTestimony(url = 'data/testimony.json'){
  const result = getRequest(url);
  return result;
}
