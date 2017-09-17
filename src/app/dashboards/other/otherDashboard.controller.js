const injectParams = ['$scope', 'StorageService'];
const OtherDashboardCtrl = function($scope, StorageService) {

  const self = this;
  self.view = 'other';
  self.title = 'Other';

  self.dashboards = StorageService.listDashboards();
  self.dashboard = self.dashboards[self.view]; 

};

OtherDashboardCtrl.$inject = injectParams;

export default OtherDashboardCtrl;
