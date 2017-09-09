import 'angular';
import 'angular-ui-router';
import 'angular-gridster';
import 'angular-ui-bootstrap';
import 'javascript-detect-element-resize';

import '../style/style.css';
import '../style/style-common.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-gridster/dist/angular-gridster.min.css';

import { DashboardCtrl } from './controllers/dashboardController';
import { CustomWidgetCtrl } from './controllers/customWidgetController';
import { WidgetSettingsCtrl } from './controllers/widgetSettingsController';

import { Object2Array } from './filters/object2Array.js';

const app = angular.module('dashboardApp', [
    'ui.router',
    'ui.bootstrap',
    'gridster'
])
.controller('DashboardCtrl', DashboardCtrl)
.controller('CustomWidgetCtrl', CustomWidgetCtrl)
.controller('WidgetSettingsCtrl', WidgetSettingsCtrl)
.filter('object2Array', Object2Array);

app.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});

