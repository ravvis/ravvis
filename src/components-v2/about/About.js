import styles from "./About.module.css";

export default function (){
  return <div className={`${styles.aboutWrapper}`}>
    <h1 className={`${styles.aboutIntro} movingUpAnimation`}>
      <span>
        Hi there, I’m <a className="favLink" href="https://twitter.com/ssravvi">Ravindra</a>.
        <br/>
      </span>
        <span>
        Software Developer,
        <br/>
      </span>
        <span>
        Student, and intern at <a className="favLink" href="https://www.indmoney.com/">INDmoney</a>.
        <br/>
      </span>
    </h1>

    <p>
      I am a computer science undergraduate from IIIT Guwahati. The reason I like programming is because of the power it provides. With the right use of tech you can build a product that can touch thousands of lives.
   </p>
    <p>
      I have done several internships during my college life where I got to work on some of the path-breaking products.
    </p>
    <p>
      Currently I'm interning with INDmoney, building financial timeline products as a part of the goals team.
    </p>
  </div>
}