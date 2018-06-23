/**
 * @class RenderPrimitive
 */

import { PureComponent } from 'react'
import PropTypes from 'prop-types'

function serializePrimitive (primitive) {
  if (typeof primitive === 'symbol') {
    return primitive.toString()
  }

  return `${primitive}`
}

export default class RenderPrimitive extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.symbol
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.symbol
    ])
  }

  render() {
    const {
      children,
      value
    } = this.props

    if (value !== undefined || (children === undefined && value === undefined)) {
      return serializePrimitive(value)
    }

    return serializePrimitive(children)
  }
}
