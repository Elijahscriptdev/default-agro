export function createQuery(queryParams = {}) {
  let queryString = "";
  if (Object.keys(queryParams).length > 0) {
    queryString = "?";
    Object.keys(queryParams).forEach((key, index) => {
      if (index === 0) {
        queryString += `${key}=${queryParams[key]}`;
      } else {
        queryString += `&${key}=${queryParams[key]}`;
      }
    });
  }
  return queryString;
}