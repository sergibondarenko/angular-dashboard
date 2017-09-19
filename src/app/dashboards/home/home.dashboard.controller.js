const injectParams = ['$scope', 'StorageService'];
const HomeDashboardCtrl = function($scope, StorageService) {

  const self = this;
  self.view = 'home';
  self.title = 'Home';

  self.dashboards = StorageService.listDashboards();
  self.dashboard = self.dashboards[self.view]; 

};

HomeDashboardCtrl.$inject = injectParams;

export default HomeDashboardCtrl;
