const request = (url, options, cb, handleError) => {
  fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  })
    .then((response) => {
      if (!response.ok) {
        handleError(response)
      }
      return response.json();
    })
    .then((data) => {
      cb(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default request
