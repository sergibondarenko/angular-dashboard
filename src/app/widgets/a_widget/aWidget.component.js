import template from './templates/aWidget.template.html';
import { AWidgetCtrl as controller } from './aWidget.controller';

const aWidget = {
  bindings: {
    widget: '=',
    dashboard: '='
  },
  controller,
  template
};

export { aWidget };
