import getRequest from "./getRequesit";

export default function getSteps(url = 'data/steps.json'){
  const result = getRequest(url);
  return result;
}
