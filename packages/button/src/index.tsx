import classNames from 'classnames'
import * as React from 'react'

// import '@ruicostafajozes/typography'

import styles from './styles.module.scss'

// interface Props {
//   text: string
// }

export function Button({ children, outlined, ...other }: any) {
  return (
    <button
      {...other}
      className={classNames(styles.button, outlined && styles.outlined)}
    >
      {children}
    </button>
  )
}
