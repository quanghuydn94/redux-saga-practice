export const getPosts = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};
export const addPost = (data) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`, {
    method: "post",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};
