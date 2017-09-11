const injectParams = ['widget', '$scope', '$timeout', '$rootScope', '$uibModalInstance'];
const AWidgetSettingsCtrl = function(widget, $scope, $timeout, $rootScope, $uibModalInstance) {
  const self = this;

  console.log('--- modal');
  console.log('widget');
  console.log(widget);

  self.widget = widget;

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
		$uibModalInstance.dismiss();
	};

	self.submit = function() {
		angular.extend(self.widget, self.form);
		$uibModalInstance.close(self.widget);
	};
};

AWidgetSettingsCtrl.$inject = injectParams;
export { AWidgetSettingsCtrl };
