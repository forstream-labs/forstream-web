'use strict';

module.exports = {
  apps: [{
    name: 'forstream-web',
    script: 'server/app.js',
    exec_mode: 'cluster',
    instances: 'max',
    watch: false,
    max_memory_restart: '1G',
  }],
};
