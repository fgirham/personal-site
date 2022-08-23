const request = (url, options, cb) => {
  fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
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
