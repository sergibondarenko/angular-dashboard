import template from './templates/a.widget.template.html';
import controller from './a.widget.controller';

const aWidget = {
  bindings: {
    widget: '=',
    dashboard: '='
  },
  controller,
  template
};

export default aWidget;
