const investInBajajFinserv = async (accountNumber, currentPrice) => {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks', {
      company: 'Bajaj Finserv',
      currentPrice,
      accountNumber
    }, {
      headers: {
        'content-type': 'application/json',
        'bfhl-auth': 'your roll number'
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
