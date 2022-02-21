import classnames from 'classnames';
import { createElement } from 'react';

var styles = {"button":"_styles-module__button__3wODo","outlined":"_styles-module__outlined__2_0cL"};

function Icon({
  icon
}) {
  return createElement("i", {
    className: classnames('material-icons', styles.icon),
    "aria-hidden": 'true'
  }, icon);
}

export { Icon };
//# sourceMappingURL=index.modern.js.map
