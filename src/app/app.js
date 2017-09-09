import 'angular';
import 'angular-ui-router';
import 'angular-gridster';
import 'angular-ui-bootstrap';
import 'javascript-detect-element-resize';

import '../style/style.css';
import '../style/style-common.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-gridster/dist/angular-gridster.min.css';

import widgetSettingsTemplate from './templates/widget_settings.html';

const app = angular.module('dashboardApp', [
    'ui.router',
    'ui.bootstrap',
    'gridster'
]);

app.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});

app.controller('DashboardCtrl', ['$scope', '$timeout',
	function($scope, $timeout) {

		$scope.gridsterOptions = {
			margins: [20, 20],
			columns: 4,
			draggable: {
				handle: 'h3'
			}
		};

		$scope.dashboards = {
			'1': {
				id: '1',
				name: 'Home',
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
			'2': {
				id: '2',
				name: 'Other',
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

		$scope.clear = function() {
			$scope.dashboard.widgets = [];
		};

		$scope.addWidget = function() {
			$scope.dashboard.widgets.push({
				name: "New Widget",
				sizeX: 1,
				sizeY: 1
			});
		};

		$scope.$watch('selectedDashboardId', function(newVal, oldVal) {
			if (newVal !== oldVal) {
				$scope.dashboard = $scope.dashboards[newVal];
			} else {
				$scope.dashboard = $scope.dashboards[1];
			}
		});

		// init dashboard
		$scope.selectedDashboardId = '1';

	}
]);

app.controller('CustomWidgetCtrl', ['$scope', '$uibModal',
	function($scope, $uibModal) {

		$scope.remove = function(widget) {
			$scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
		};

		$scope.openSettings = function(widget) {
			$uibModal.open({
				scope: $scope,
				template: widgetSettingsTemplate,
				controller: 'WidgetSettingsCtrl',
				resolve: {
					widget: function() {
						return widget;
					}
				}
			});
		};

	}
]);

app.controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$uibModalInstance', 'widget',
	function($scope, $timeout, $rootScope, $uibModalInstance, widget) {
		$scope.widget = widget;

		$scope.form = {
			name: widget.name,
			sizeX: widget.sizeX,
			sizeY: widget.sizeY,
			col: widget.col,
			row: widget.row
		};

		$scope.sizeOptions = [{
			id: '1',
			name: '1'
		}, {
			id: '2',
			name: '2'
		}, {
			id: '3',
			name: '3'
		}, {
			id: '4',
			name: '4'
		}];

		$scope.dismiss = function() {
			$modalInstance.dismiss();
		};

		$scope.remove = function() {
			$scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
			$modalInstance.close();
		};

		$scope.submit = function() {
			angular.extend(widget, $scope.form);

			$modalInstance.close(widget);
		};

	}
]);

// helper code
app.filter('object2Array', function() {
	return function(input) {
		var out = [];
		for (let i in input) {
			out.push(input[i]);
		}
		return out;
	}
});
