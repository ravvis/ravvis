import styles from "./Button.module.css";

export default function Button({ children, onClick = () => {} }){
  return <button className={`${ styles.Button }`} onClick={onClick}>
    { children }
  </button>
}