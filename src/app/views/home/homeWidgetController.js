import widgetSettingsTemplate from '../../templates/widget_settings.html';

const injectParams = ['$scope', '$uibModal'];
const HomeWidgetCtrl = function($scope, $uibModal) {

  $scope.title = 'Home';

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

HomeWidgetCtrl.$inject = injectParams;
export { HomeWidgetCtrl };
