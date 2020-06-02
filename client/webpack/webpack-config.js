'use strict';

const configs = require('../configs');
const webpackCommon = require('./webpack-common.js');

module.exports = (env) => {
  const buildConfigs = configs.get(env && env.production ? 'production' : 'development');
  return webpackCommon(buildConfigs);
};
