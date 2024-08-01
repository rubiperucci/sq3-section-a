const winston = require("winston");
const { configuration } = require("#utils/environment.js");

let logConfiguration = {};

if (configuration.logger === "info") {
    logConfiguration = {
        format: winston.format.combine(
            winston.format.errors({ stack: true }),
            winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            winston.format.json()
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: "reports/error.log", level: "error", "timestamp": true }),
            new winston.transports.File({ filename: "reports/info.log", level: "info", "timestamp": true })
        ],
    };
} else {
    logConfiguration = {
        level: "debug",
        format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: "reports/debug.log", level: "debug" }),
            new winston.transports.File({ filename: "reports/debugError.log", level: "error" })
        ],
    };
}

const logger = winston.createLogger(logConfiguration);

module.exports = logger;