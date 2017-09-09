import widgetSettingsTemplate from '../templates/widget_settings.html';

const injectParams = ['$scope', '$uibModal'];
const CustomWidgetCtrl = function($scope, $uibModal) {

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

CustomWidgetCtrl.$inject = injectParams;
export { CustomWidgetCtrl };
