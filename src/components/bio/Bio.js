import ReactMarkdown from 'react-markdown'
import {BIO_MD} from "./Utils";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="Bio">
      <ReactMarkdown>{ BIO_MD }</ReactMarkdown>
    </div>
  )
}
export default Bio;
