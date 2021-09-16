import getRequest from "./getRequesit";

export default function getCars(url = '/data/cars.json'){
  const result = getRequest(url);
  return result;
}
