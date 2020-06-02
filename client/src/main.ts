import '@assets/img/favicon.ico';
import '@assets/img/logo-og.png';
import '@assets/img/logo-header.png';

import '@assets/styles/styles.less';
import 'bootstrap/dist/css/bootstrap.css';

import 'core-js/es/symbol';
import 'core-js/es/object';
import 'core-js/es/function';
import 'core-js/es/parse-int';
import 'core-js/es/parse-float';
import 'core-js/es/number';
import 'core-js/es/math';
import 'core-js/es/string';
import 'core-js/es/date';
import 'core-js/es/array';
import 'core-js/es/regexp';
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/proposals/reflect-metadata';

import 'zone.js/dist/zone';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from '@app/app.module';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
} else {
  Error.stackTraceLimit = Infinity;
  // tslint:disable-next-line: no-var-requires
  require('zone.js/dist/long-stack-trace-zone');
}

platformBrowserDynamic().bootstrapModule(AppModule);
