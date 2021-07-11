import styles from "./Avatar.module.css";

const AVATAR_SOURCE = "https://avatars.githubusercontent.com/u/48203006?s=400&u=c25b2ee3bdbaf28f06679beddb1ee783d67e759f&v=4";

const Avatar = () => {
  return <img src={AVATAR_SOURCE} alt="Avatar" className={styles.MainProfileAvatar}/>
}
export default Avatar;
