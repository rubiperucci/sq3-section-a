const configuration = require("./../config.json");
const environments = require("./../env.json");
const environment = environments[configuration.environment];

module.exports = { configuration, environment };
