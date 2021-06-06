import {Link} from "@material-ui/core";

const NavItem = ({ label, url }) => {
  return <div className="pe-4 py-2 NavItem">
    <Link href={url}>
      {label}
    </Link>
  </div>
}
export default NavItem;
