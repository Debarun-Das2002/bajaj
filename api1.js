const axios = require('axios');

const createAccount = async (name, email, rollNumber, phone) => {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', {
      name,
      email,
      rollNumber,
      phone
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
