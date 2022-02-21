function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var classNames = _interopDefault(require('classnames'))
var React = require('react')

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }

  return target
}
var styles = { button: '_3wODo', outlined: '_2_0cL', 'button-icon': '_3cZAT' }

var _excluded = ['children', 'outlined']
function Button(_ref) {
  var children = _ref.children,
    outlined = _ref.outlined,
    other = _objectWithoutPropertiesLoose(_ref, _excluded)

  return React.createElement(
    'button',
    Object.assign({}, other, {
      className: classNames(styles.button, outlined && styles.outlined)
    }),
    children
  )
}

exports.Button = Button
//# sourceMappingURL=index.js.map
