'use strict';

const indexRoutes = require('routes/index');
const logger = require('utils/logger');

exports.configure = (express, app) => {
  logger.info('Configuring routes');
  indexRoutes(express, app);
};
