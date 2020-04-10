const axios = require('axios');

module.exports = {
    get_product_listings: async () => {
      try {
          const response = await axios.get('http://localhost:8000/products');
          return response.data;
      } catch (error) {
          console.error(error);
          throw error("An error has occured, please check the logs.")
      }
    }
}