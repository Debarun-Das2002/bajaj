const axios = require('axios');

const createAccount = async (name, email, rollNumber, phone) => {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', {
      name:"Bajaj Finserv",
      email:"debarun0411.be21@chitkara.edu.in",
      rollNumber:2110990411,
      phone:7896880963
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
