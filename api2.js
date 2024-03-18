const investInBajajFinserv = async (accountNumber, currentPrice, githubRepoLink) => {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks', {
      company: 'Bajaj Finserv',
      currentPrice: 1500,
      accountNumber:"BFHL0018655",
      githubRepoLink:"https://github.com/Debarun-Das2002/bajaj"
    }, {
      headers: {
        'content-type': 'application/json',
        'bfhl-auth': '2110990411'
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
