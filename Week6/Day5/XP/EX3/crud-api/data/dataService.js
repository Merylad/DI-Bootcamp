const axios = require('axios');

async function fetchPosts(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

module.exports = {fetchPosts}