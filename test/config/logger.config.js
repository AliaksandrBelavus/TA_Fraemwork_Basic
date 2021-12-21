const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.DailyRotateFile({ filename: 'console-%DATE%.log', level: 'info' }),
        new winston.transports.Console({ level: 'error' }),
    ],
    format: winston.format.simple()
});

module.exports = logger;
