import classNames from 'classnames';
import { createElement } from 'react';

var styles = {"button":"_styles-module__button__3wODo","outlined":"_styles-module__outlined__2_0cL","button-icon":"_styles-module__button-icon__3cZAT"};

function Button({
  children,
  outlined,
  ...other
}) {
  return createElement("button", Object.assign({}, other, {
    className: classNames(styles.button, outlined && styles.outlined)
  }), children);
}

export { Button };
//# sourceMappingURL=index.modern.js.map
