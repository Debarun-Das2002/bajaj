const axios = require('axios');

async function createAccount() {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', {
      name: 'Debarun Das',
      email: 'debarun0411.be21@chitkara.edu.in',
      rollNumber:2110990411,
      phone:7896880963
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Account Created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error Creating Account:', error);
  }
}

async function buyStocks(accountNumber, githubRepoLink) {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks', {
      company: 'Bajaj Finserv',
      currentPrice: 1500,
      accountNumber: "BFHL0018655",
      githubRepoLink:'https://github.com/Debarun-Das2002/bajaj'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'bfhl-auth': 2110990411
      }
    });

    console.log('Stocks Bought:', response.data);
  } catch (error) {
    console.error('Error Buying Stocks:', error);
  }
}

// Main Function
async function main() {
  const account = await createAccount();
  const accountNumber = account.accountNumber;
  const githubRepoLink = 'https://github.com/Debarun-Das2002/bajaj';

  buyStocks(accountNumber, githubRepoLink);
}

main();
