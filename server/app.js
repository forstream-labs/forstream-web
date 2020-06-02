'use strict';

require('app-module-path/register');

const configs = require('configs');
const engine = require('configs/engine');
const middlewares = require('configs/middlewares');
const routes = require('configs/routes');
const logger = require('utils/logger');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');

require('json.date-extensions');

// Parse string to date when call JSON.parse
JSON.useDateParser();

const app = express();

app.set('env', configs.env);
app.set('port', configs.port);
app.set('views', configs.distPath);
app.set('trust proxy', 1);

app.use(express.static(configs.distPath));
app.use('/public', express.static(configs.publicPath));
app.use(morgan('tiny', {stream: {write: (message) => logger.console.debug(message)}}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compression());

logger.info(`Using ${configs.env} environment configs`);
logger.info(`Debug mode is ${configs.debug ? 'ON' : 'OFF'}`);

engine.configure(app);
middlewares.configure(app);
routes.configure(express, app);

app.listen(app.get('port'), () => {
  logger.info(`Forstream Web server is listening on port ${app.get('port')}`);
});
