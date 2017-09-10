const injectParams = ['$scope', '$timeout', '$rootScope'];
const WidgetSettingsCtrl = function($scope, $timeout, $rootScope) {
  const self = this;

	self.widget = $scope.$parent.$resolve.widget;
  self.modalInstance = $scope.$parent.$uibModalInstance;
  self.dashboard = $scope.$parent.$resolve.dashboard;

	self.form = {
		name: self.widget.name,
		sizeX: self.widget.sizeX,
		sizeY: self.widget.sizeY,
		col: self.widget.col,
		row: self.widget.row
	};

	self.sizeOptions = [{
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

	self.dismiss = function() {
		self.modalInstance.dismiss();
	};

	self.remove = function() {
		self.dashboard.widgets.splice(self.dashboard.widgets.indexOf(self.widget), 1);
		self.modalInstance.close();
	};

	self.submit = function() {
		angular.extend(self.widget, self.form);
		self.modalInstance.close(self.widget);
	};

};

WidgetSettingsCtrl.$inject = injectParams;
export { WidgetSettingsCtrl };
