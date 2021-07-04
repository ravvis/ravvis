import {Link} from "@material-ui/core";

const NavItem = ({ label, url, external }) => {
  return <div className="pe-3 py-2 NavItem">
    <Link href={url} target={external ? "_blank" : "_self"}>
      {label}
    </Link>
  </div>
}
export default NavItem;
