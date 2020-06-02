'use strict';

const path = require('path');
const yaml = require('yamljs');
const _ = require('lodash');

exports.get = (env) => {
  const filename = env === 'production' ? 'configs-prod.yml' : 'configs-dev.yml';
  const configs = yaml.load(path.resolve('client', filename));

  const envConfigs = {env};
  if (env === 'production') {
    envConfigs.websiteUrl = 'https://www.forstream.io';
    envConfigs.apiUrl = 'https://api.forstream.io';
  } else {
    envConfigs.websiteUrl = _.get(configs, 'websiteUrl', 'http://localhost:4000');
    envConfigs.apiUrl = _.get(configs, 'apiUrl', 'http://localhost:3000');
  }
  envConfigs.cdnUrl = 'https://cdn.forstream.io';
  return envConfigs;
};
