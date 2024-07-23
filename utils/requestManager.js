const axios = require('axios');
require('dotenv').config();

class RequestManager {
    constructor(baseURL, headers={}, timeout=5000) {
        if (!this.instance) this.getInstance();
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

    static getInstance(){
        return this;
    }
}

const requestManager = new RequestManager(process.env.BASE_URL).getInstance();
module.exports = requestManager;
