import styles from "./Greet.module.css";
import {Link} from "@material-ui/core";

const Greet = () => {
  return <div className={styles.Greet}>
    <Link color="inherit" href="#home">Ravindra Singh</Link>
  </div>
}
export default Greet;
