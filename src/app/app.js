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

import DashboardCtrl from './controllers/dashboard.controller';

import homeDashboard from './dashboards/home/home.dashboard.component';
import otherDashboard from './dashboards/other/other.dashboard.component';
import aWidget from './widgets/a.widget/a.widget.component';

import Storage from './services/storage.service.js';

const app = angular.module('dashboardApp', [
  'ui.router',
  'ui.bootstrap',
  'gridster'
])
  .controller('DashboardCtrl', DashboardCtrl)
  .component('aWidget', aWidget)
  .component('homeDashboard', homeDashboard)
  .component('otherDashboard', otherDashboard)
  .factory('StorageService', () => new Storage());

app.config(function ($urlRouterProvider, $stateProvider) {
  app.stateProvider = $stateProvider;
  $urlRouterProvider.otherwise('/home');
});

export default app;
