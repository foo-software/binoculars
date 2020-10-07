import winston from 'winston';

const level = process.env.LOG_LEVEL || 'info';
const name = '@foo-software/binoculars';

const logger = winston.createLogger({
  level,
  name,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      json: true,
    }),
  ],
});

export default logger;
