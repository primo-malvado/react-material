function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var classnames = _interopDefault(require('classnames'));
var React = require('react');

var styles = {"button":"_3wODo","outlined":"_2_0cL"};

function Icon(_ref) {
  var icon = _ref.icon;
  return React.createElement("i", {
    className: classnames('material-icons', styles.icon),
    "aria-hidden": 'true'
  }, icon);
}

exports.Icon = Icon;
//# sourceMappingURL=index.js.map
