const axios = require('axios');

async function sendHttpRequest({ url, method = "POST", headers = {}, body }) {
    const config = {
        url,
        method: method.toUpperCase(),
        headers,
        validateStatus: () => true
    };

    if (typeof body === 'object' && body != null && !Buffer.isBuffer(body)) {
        config.data = body;
        if (!config.headers['Content-Type']) {
            config.headers['Content-Type'] = 'application/json';
        }
    } else {
        config.data = body;
    }

    const res = await axios(config);
    return {
        status: res.status,
        data: res.data,
        headers: res.headers
    };
}

module.exports = {
    sendHttpRequest
};


