'use strict';

const logger = require('utils/logger');
const configs = require('configs');
const prerender = require('prerender-node');

exports.configure = (app) => {
  logger.info('Configuring middlewares');
  if (configs.prerenderUrl) {
    app.use(prerender.set('prerenderServiceUrl', configs.prerenderUrl));
  }
};
