import getRequest from "./getRequesit";

export default function getOurTeam(url = '/data/ourTeam.json'){
  const result = getRequest(url);
  return result;
}
