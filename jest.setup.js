const { configuration, environment } = require("#/utils/environment");
const logger = require("#/utils/logger");
const { matchersWithOptions } = require("jest-json-schema");

expect.extend(matchersWithOptions());

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
