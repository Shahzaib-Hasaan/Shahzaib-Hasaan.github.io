const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const { url } = event.queryStringParameters;
  const apiKey = process.env.PAGESPEED_API_KEY;
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error fetching API:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from API' }),
    };
  }
};
