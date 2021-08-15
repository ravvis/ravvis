import BottomSheet from "../bottom-sheet/BottomSheet";
import Modal from "../modal/Modal";
import {ReactChildren, ReactElement} from "react";

export default function Popup({ ...props } : { children : ReactChildren | ReactElement, header? : string, onClose: any, show: boolean}) {
  return <>
    <div className="d-block d-sm-none">
      <Modal {...props}/>
    </div>
    <div className="d-none d-sm-block">
      <BottomSheet {...props}/>
    </div>
  </>
}