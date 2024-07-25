const configuration = require("./../config.json");
const environments = require("./../env.json");
const environment = environments[configuration.environment];

modelu.exports = { configuration, environment };
