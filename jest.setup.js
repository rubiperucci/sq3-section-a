const { configuration, environment } = require("#utils/environment.js");
const logger = require("#utils/logger.js");
const softAssert = require('#utils/softAssert.js');

global.softAssert = softAssert;

beforeAll(async() => {
    logger.info("Started tests")
    logger.debug(`Base URL: ${environment.base_url}
        Environment UAT: ${configuration.environment} 
        Timeout Set: ${configuration.timeout}`
    );
});

afterAll(async() => {
    logger.info("Finished tests");
});
