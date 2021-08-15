import styles from "./SelectFavColor.module.css";
import {useState} from "react";
import {getFavColor, setFavColor, getFavColors} from "../../Utils";
import {CheckMarkIcon} from "../base/icons/Icons";
import {Sliders} from "react-feather";
import Button from "../base/button/Button";
import { useTheme } from 'next-themes'
import classNames from "classnames";
import Popup from "../base/popup/Popup";
import useMounted from "../../../hooks/useMounted";

export default function SelectFavColor(){
  const [select, setSelect] = useState(false);
  const [selectedFavColor, setSelectedFavColor] = useState(getFavColor());

  const { theme, setTheme } = useTheme();
  const [mounted] = useMounted();

  if(!mounted) return null;

  return <div>
    <button className={styles.selectFavColorCTA} onClick={() => setSelect(true)}>
      <Sliders/>
    </button>
    <Popup show={select} header="Customize your view" onClose={() => setSelect(false)}>
      <div>
        <div className={`${styles.selectFavColorLabel} textGray`}>Select your favourite color 🌈</div>
        <div className={styles.selectFavColorInputColorWrapper}>
          { getFavColors().map(({ color}, index) => <div
            key={index}
            className={`${styles.selectFavColorInputColor} ${color === selectedFavColor ? "" : "pointer"}`}
            style={{ backgroundColor: color }}
            onClick={() => {
              setFavColor(color);
              setSelectedFavColor(color);
            }}
          >
            { selectedFavColor === color && <div className={styles.selectFavColorInputColorChecked}><CheckMarkIcon/></div> }
          </div>) }
        </div>
        <div className={`${styles.selectFavColorLabel} textGray`}>Select your favourite theme 💅🏻</div>
        <div className={styles.selectFavThemeWrapper}>
          <button
            className={classNames(styles.selectFavThemeButton, { [styles.selectFavThemeButtonSelected] : theme == "light" }, "bgLight textLight")}
            onClick={() => setTheme("light")}
          >
            Light
          </button>
          <button
            className={classNames(styles.selectFavThemeButton, { [styles.selectFavThemeButtonSelected] : theme == "dark" }, "bgDark textDark")}
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
        </div>
        <div className={`${styles.selectFavColorAction} d-flex justify-content-center align-items-center`}>
          <Button onClick={() => {
            setSelect(false)
          }}>
            Done
          </Button>
        </div>
      </div>
    </Popup>
  </div>
}