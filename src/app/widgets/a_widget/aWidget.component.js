import template from './templates/aWidget.template.html';
import { WidgetSettingsCtrl as controller } from './aWidget.controller';

const aWidget = {
  bindings: {
    modalInstance: '<',
    resolve: '<'
  },
  controllerAs: 'aWidget',
  controller,
  template
};

export { aWidget };
