import _ from 'lodash';

import widgetSettingsTemplate from '../../templates/widget_settings.html';

const injectParams = ['$scope', '$uibModal'];
const OtherWidgetCtrl = function($scope, $uibModal) {

  $scope.title = 'Other';

  $scope.dashboard = _.find($scope.dashboards, function (d) {
    return d.name === $scope.title;
  }); 

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

};

OtherWidgetCtrl.$inject = injectParams;
export { OtherWidgetCtrl };
