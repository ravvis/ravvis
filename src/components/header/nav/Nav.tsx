import NavItem from "./NavItem";
import {NAV_LINKS} from "./Utils";

const Nav = () => {
  return <div className="d-flex align-items-center flex-row flex-wrap">
    {NAV_LINKS.map(nav => <NavItem { ...nav } key={nav.label}/>)}
  </div>
}
export default Nav;
