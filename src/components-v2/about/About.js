import styles from "./About.module.css";

export default function (){
  return <div className={`${styles.aboutWrapper}`}>
    <h1 className={`${styles.aboutIntro} movingUpAnimation`}>
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
    <p>
      I am a computer science undergraduate from IIIT Guwahati.
    </p>
  </div>
}