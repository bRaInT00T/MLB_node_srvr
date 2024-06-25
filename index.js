const axios = require('axios');

exports.handler = async (event) => {
    const baseUrl = 'https://statsapi.mlb.com/api/v1';
    const { path, ...params } = event.queryStringParameters;

    try {
        const response = await axios.get(`${baseUrl}/${path}`, {
            params: { ...params },
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: JSON.stringify({ error: error.message }),
        };
    }
};
