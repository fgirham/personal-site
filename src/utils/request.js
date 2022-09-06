const request = (url, options, handleError) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  })
    .then((response) => {
      if (!response.ok) {
        handleError(response);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default request;
