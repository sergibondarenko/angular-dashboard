import _ from 'lodash';

const injectParams = ['$scope', '$uibModal', 'StorageService'];
const OtherDashboardCtrl = function($scope, $uibModal, StorageService) {

  const self = this;
  self.view = 'other';
  self.title = 'Other';

  self.dashboards = StorageService.listDashboards();
  self.dashboard = _.find(self.dashboards, d => d.view === self.view); 

	self.remove = function(widget) {
		self.dashboard.widgets.splice(self.dashboard.widgets.indexOf(widget), 1);
    self.dashboards[self.dashboard.view] = self.dashboard;
    StorageService.saveDashboards(self.dashboards);
	};

	self.openSettings = function(widget) {
		$uibModal.open({
			scope: $scope,
      component: 'aWidget',
			resolve: {
				widget: function() {
					return widget;
				},
        dashboard: function() {
          return self.dashboard;
        } 
			}
		});
	};
};

OtherDashboardCtrl.$inject = injectParams;

export default OtherDashboardCtrl;
