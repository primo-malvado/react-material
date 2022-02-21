import classnames from 'classnames';
import { createElement } from 'react';

var styles = {"button":"_3wODo","outlined":"_2_0cL"};

function Icon(_ref) {
  var icon = _ref.icon;
  return createElement("i", {
    className: classnames('material-icons', styles.icon),
    "aria-hidden": 'true'
  }, icon);
}

export { Icon };
//# sourceMappingURL=index.modern.js.map
