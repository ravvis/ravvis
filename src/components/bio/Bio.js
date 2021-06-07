import ReactMarkdown from 'react-markdown'

const BIO_MD = "I am a computer science undergraduate at IIIT Guwahati.\n" +
  "\n" +
  "I am a tech enthusiast and an explorer, I like to try my hands on different technologies and see their impact. \n";

const Bio = () => {
  return (
    <div className="Bio">
      <ReactMarkdown>{ BIO_MD }</ReactMarkdown>
    </div>
  )
}
export default Bio;
