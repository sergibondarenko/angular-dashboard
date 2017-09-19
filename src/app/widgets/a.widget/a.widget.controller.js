import _ from 'lodash';

import controller from './a.widget.settings.controller.js';
import template from './templates/a.widget.settings.template.html';

const injectParams = ['$scope', '$timeout', '$uibModal'];
const AWidgetCtrl = function($scope, $timeout, $uibModal) {
  const self = this;

  self.remove = function() {
    const widgetIndex = _.findIndex(self.dashboard.widgets, function (w) {
      return w.name === self.widget.name;
    });
    self.dashboard.widgets.splice(widgetIndex, 1);
  };

  self.openSettings = function() {
    $uibModal.open({
      scope: $scope,
      controllerAs: '$ctrl',
      controller,
      template,
      resolve: {
        widget: function() {
          return self.widget;
        }
      }
    });
  };

};

AWidgetCtrl.$inject = injectParams;
export default AWidgetCtrl;
