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
import { WidgetSettingsCtrl } from './controllers/widgetSettingsController';

import { HomeWidgetCtrl } from './views/home/homeWidgetController';
import HomeWidgetCtrlTemplate from './views/home/templates/home_widget.html';
import { OtherWidgetCtrl } from './views/other/otherWidgetController';
import OtherWidgetCtrlTemplate from './views/other/templates/other_widget.html';

import { Object2Array } from './filters/object2Array.js';

const app = angular.module('dashboardApp', [
    'ui.router',
    'ui.bootstrap',
    'gridster'
])
.controller('DashboardCtrl', DashboardCtrl)
.controller('WidgetSettingsCtrl', WidgetSettingsCtrl)
.filter('object2Array', Object2Array);

app.config(function ($urlRouterProvider, $stateProvider) {

  const homeState = {
    name: 'home',
    url: '/home',
    controller: HomeWidgetCtrl,
    template: HomeWidgetCtrlTemplate
  };

  const otherState = {
    name: 'other',
    url: '/other',
    controller: OtherWidgetCtrl,
    template: OtherWidgetCtrlTemplate
  };

  $stateProvider.state(homeState);  
  $stateProvider.state(otherState);  

  $urlRouterProvider.otherwise('/home');
});

