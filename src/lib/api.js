export const post1 = (url, headers = {}, data, extras = []) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
    ...extras,
  }).then(data => console.log(data));
};
