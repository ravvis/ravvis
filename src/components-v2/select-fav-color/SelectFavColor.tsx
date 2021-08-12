import styles from "./SelectFavColor.module.css";
import {useState} from "react";
import Modal from "../base/modal/Modal";
import {getFavColor, setFavColor, getFavColors} from "../../Utils";
import {CheckMarkIcon} from "../base/icons/Icons";
import Button from "../base/button/Button";

export default function SelectFavColor(){
  const [select, setSelect] = useState(false);
  const [selectedFavColor, setSelectedFavColor] = useState(getFavColor());

  return <div>
    <div className={styles.selectFavColorCTA} onClick={() => setSelect(true)}/>
    <Modal show={select} header="Customize your view">
      <div>
        <div className={`${styles.selectFavColorLabel} textGray`}>Select your favourite color 🌈</div>
        <div className={styles.selectFavColorInputColorWrapper}>
          { getFavColors().map(({ color }) => <div
            className={`${styles.selectFavColorInputColor} ${color === selectedFavColor ? "" : "pointer"}`}
            style={{ backgroundColor: `rgb(${color})` }}
            onClick={() => {
              setFavColor(color);
              setSelectedFavColor(color);
            }}
          >
            { selectedFavColor === color && <div className={styles.selectFavColorInputColorChecked}><CheckMarkIcon/></div> }
          </div>) }
        </div>
        <div className={`${styles.selectFavColorAction} d-flex justify-content-center align-items-center`}>
          <Button onClick={() => {
            setSelect(false)
          }}>
            Done
          </Button>
        </div>
      </div>
    </Modal>
  </div>
}