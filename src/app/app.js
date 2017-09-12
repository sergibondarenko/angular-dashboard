import 'angular';
import 'angular-ui-router';
import 'angular-gridster';
import 'angular-ui-bootstrap';
import 'javascript-detect-element-resize';

import _ from 'lodash';

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

	const dashboards = {
		'home': {
			id: '1',
			name: 'Home',
      view: 'home',
      url: '/home',
      component: 'homeDashboard',
			widgets: [{
				col: 0,
				row: 0,
				sizeY: 1,
				sizeX: 1,
				name: "Widget 1"
			}, {
				col: 2,
				row: 1,
				sizeY: 1,
				sizeX: 1,
				name: "Widget 2"
			}]
		},
		'other': {
			id: '2',
			name: 'Other',
      view: 'other',
      url: '/other',
      component: 'otherDashboard',
			widgets: [{
				col: 1,
				row: 1,
				sizeY: 1,
				sizeX: 2,
				name: "Other Widget 1"
			}, {
				col: 1,
				row: 3,
				sizeY: 1,
				sizeX: 1,
				name: "Other Widget 2"
			}]
		}
	};

  _.forEach(dashboards, function (d) {
    $stateProvider.state({
      name: d.view,
      url: d.url,
      component: d.component
    });
  });

  $urlRouterProvider.otherwise('/home');
});

