/*global angular*/

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

import { homeDashboard } from './dashboards/home/homeDashboard.component';
import { otherDashboard } from './dashboards/other/otherDashboard.component';
import { aWidget } from './widgets/a_widget/aWidget.component';

import { Storage } from './services/storage.service.js';
import { Object2Array } from './filters/object2Array.js';

const app = angular.module('dashboardApp', [
  'ui.router',
  'ui.bootstrap',
  'gridster'
])
  .controller('DashboardCtrl', DashboardCtrl)
  .component('aWidget', aWidget)
  .component('homeDashboard', homeDashboard)
  .component('otherDashboard', otherDashboard)
  .factory('StorageService', () => new Storage())
  .filter('object2Array', Object2Array);

app.config(function ($urlRouterProvider, $stateProvider) {
  app.stateProvider = $stateProvider;
  $urlRouterProvider.otherwise('/home');
});

export default app;
