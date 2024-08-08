const axios = require("axios");
const { environment, configuration } = require("#utils/environment.js");
const logger = require("#utils/logger.js");

class RequestManager {
    constructor(baseURL, headers={}, timeout=configuration.timeout) {
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
        logger.info(`Send ${method.toUpperCase()} request to ${this.axios.defaults.baseURL + endpoint}`);
        if (params) logger.debug(`Request params: ${JSON.stringify(params)}`);
        if (headers) logger.debug(`Request headers: ${JSON.stringify(headers)}`);

        try {
            const response = await this.axios.request({
                method: method,
                url: endpoint,
                params: params,
                headers: headers
            });
            logger.debug(`Request response data: ${JSON.stringify(response.data)}`);
            return response

        } catch (error) {
            logger.error(`Request failed with status code: ${error.response?.status}`);
            logger.error(`Response data: ${JSON.stringify(error.response?.data)}`);
            // not throwing error
        }
    }
}

module.exports = new RequestManager(
    environment.base_url,
    { "Content-Type": "application/json" }
);
