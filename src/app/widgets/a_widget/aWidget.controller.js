import _ from 'lodash';

import { AWidgetSettingsCtrl as controller } from './aWidget.settings.controller.js';
import template from './templates/aWidget.settings.template.html';

const injectParams = ['$scope', '$timeout', '$uibModal'];
const AWidgetCtrl = function($scope, $timeout, $uibModal) {
  const self = this;

  self.remove = function(widget) {
    const widgetIndex = _.findIndex(self.dashboard.widgets, function (w) {
      return w.name === self.widget.name;
    });
    self.dashboard.widgets.splice(widgetIndex, 1);
  };

  self.openSettings = function(widget) {
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
export { AWidgetCtrl };
