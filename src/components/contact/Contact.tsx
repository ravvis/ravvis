const EMAIL = "ravindras.sisodiya@gmail.com";

const Contact = () => {
  return <h5 className="d-flex align-items-center flex-wrap">
    <div className="px-1"/>
    I can be reached at
    <div className="px-1"/>
    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
  </h5>
}
export default Contact;
