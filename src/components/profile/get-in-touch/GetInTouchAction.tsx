import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from "@material-ui/core";

const GetInTouchAction = ({ icon, url, label }) => {
  return <div>
    <Tooltip title={label}>
      <Link href={url} target="_blank">
        <IconButton aria-label={label} >
          {icon}
        </IconButton>
      </Link>
    </Tooltip>
  </div>
}
export default GetInTouchAction;
