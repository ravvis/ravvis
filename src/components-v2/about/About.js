import styles from "./About.module.css";

export default function (){
  return <h1 className={styles.aboutIntro}>
    <span className="movingUpAnimation">
      Hi there, I’m <a href="https://twitter.com/ssravvi">Ravindra</a>.
      <br/>
    </span>
    <span className="movingUpAnimation">
      Software Developer,
      <br/>
    </span>
    <span className="movingUpAnimation">
      Student, and intern at <a href="https://www.indmoney.com/">INDmoney</a>.
      <br/>
    </span>
  </h1>
}