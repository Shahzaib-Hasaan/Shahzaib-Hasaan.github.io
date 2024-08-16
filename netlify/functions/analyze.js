const axios = require('axios');

exports.handler = async function(event, context) {
    const { url, strategy } = event.queryStringParameters;
    const API_KEY = process.env.API_KEY;

    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${API_KEY}&strategy=${strategy}&category=performance&category=accessibility&category=best-practices&category=seo`;

    try {
        const response = await axios.get(apiUrl);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching the API' }),
        };
    }
};
