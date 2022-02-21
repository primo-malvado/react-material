import classnames from 'classnames'
import * as React from 'react'
import styles from './styles.module.scss'

// interface Props {
//   text: string
// }
export function Icon({ icon }: any) {
  return (
    <i className={classnames('material-icons', styles.icon)} aria-hidden='true'>
      {icon}
    </i>
  )
}
