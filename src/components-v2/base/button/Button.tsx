import styles from "./Button.module.css";
import type { ReactNode } from 'react'

const Button = (
  { children,
    onClick = () => {}
  } : {
    children: ReactNode,
    onClick: () => any
  }) => {
  return <button className={`${ styles.Button }`} onClick={onClick}>
    { children }
  </button>
}
export default Button;