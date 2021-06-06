import Greet from "./title/Greet";
import Nav from "./nav/Nav";

const Header = () => {
  return <div className="d-flex justify-content-between flex-column flex-sm-row">
    <Greet/>
    <Nav/>
  </div>
}
export default Header;
