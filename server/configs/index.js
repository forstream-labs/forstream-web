'use strict';

const path = require('path');
const yaml = require('yamljs');
const _ = require('lodash');

const configs = yaml.load(path.resolve('server', 'configs.yml'));

function get(property, defaultValue) {
  return _.get(configs, property, defaultValue);
}

exports.env = get('app.env', 'development');
exports.port = get('app.port', 4000);
exports.debug = get('app.debug', false);
exports.distPath = path.resolve('dist');
exports.publicPath = path.resolve('server', 'public');

exports.websiteUrl = this.env === 'production' ? 'https://www.forstream.io' : `http://localhost:${this.port}`;
exports.apiUrl = get('api.url', this.env === 'production' ? 'https://api.forstream.io' : 'http://localhost:3000');
exports.prerenderUrl = get('prerender.url');
