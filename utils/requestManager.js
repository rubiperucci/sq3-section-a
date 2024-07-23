const axios = require('axios');
require('dotenv').config();

class RequestManager {
    constructor(baseURL, headers={}, timeout=5000) {
        if (RequestManager._instance) { 
            return RequestManager._instance 
        };
        RequestManager._instance = this;

        this.axios = axios.create({
            baseURL,
            headers,
            timeout
        });
    }

    async send(method, endpoint, params, headers){
        return this.axios.request({
            method: method,
            url: endpoint,
            params: params,
            headers: headers
        })
    }
}

const requestManager = new RequestManager(process.env.BASE_URL);
module.exports = requestManager;
