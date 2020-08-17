const axios = require('axios');

// create a new axios instance
module.exports = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
  });
}