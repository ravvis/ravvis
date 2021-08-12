import ReactMarkdown from 'react-markdown'
import {BIO_MD} from "./Utils";
import styles from "./Bio.module.css";

const Bio = () => {
  return (
    <div className={styles.Bio}>
      <ReactMarkdown>{ BIO_MD }</ReactMarkdown>
    </div>
  )
}
export default Bio;
