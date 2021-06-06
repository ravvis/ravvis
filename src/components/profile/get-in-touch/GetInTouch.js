import {GET_IN_TOUCH_PLATFORMS} from "./Utils";
import GetInTouchAction from "./GetInTouchAction";

const GetInTouch = () => {
  return (<div className="d-flex align-items-center">
    {GET_IN_TOUCH_PLATFORMS.map(get_in_touch => <GetInTouchAction {...get_in_touch} key={get_in_touch.label}/>)}
  </div>)
}
export default GetInTouch;
