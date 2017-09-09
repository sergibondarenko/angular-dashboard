const injectParams = ['$scope', '$timeout', '$location'];
const DashboardCtrl = function ($scope, $timeout, $location) {

	$scope.gridsterOptions = {
		margins: [20, 20],
		columns: 4,
		draggable: {
			handle: 'h3'
		}
	};

	$scope.dashboards = {
		'home': {
			id: '1',
			name: 'Home',
      view: 'home',
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

  $scope.setCurrentDashboard = function (name) {
    $scope.dashboard = $scope.dashboards[name];
  };

};

DashboardCtrl.$inject = injectParams;
export { DashboardCtrl };
