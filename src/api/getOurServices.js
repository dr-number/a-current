import getRequest from "./getRequesit";

export default function getOurServices(url = '/data/ourServices.json'){
  const result = getRequest(url);
  return result;
}
