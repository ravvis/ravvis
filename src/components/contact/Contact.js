import {Link} from "@material-ui/core";
import {Email} from "@material-ui/icons";

const EMAIL = "ravindras.sisodiya@gmail.com";

const Contact = () => {
  return <h5 className="d-flex align-items-center flex-wrap">
    <Email/>
    <div className="px-1"/>
    I can be reached at
    <div className="px-1"/>
    <Link href={EMAIL}>{EMAIL}</Link>
  </h5>
}
export default Contact;
