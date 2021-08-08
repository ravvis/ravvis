import styles from "./About.module.css";

export default function (){
  return <h1 className={styles.aboutIntro}>
    <span>
      Hi there, I’m <a href="https://twitter.com/ssravvi">Ravindra</a>.
      <br/>
    </span>
    <span>
      Software Developer,
      <br/>
    </span>
    <span>
      Student, and intern at <a href="https://www.indmoney.com/">INDmoney</a>.
      <br/>
    </span>
  </h1>
}