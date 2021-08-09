import SectionLayout from "../layouts/SectionLayout";
import styles from "./Connect.module.css";

export default function Connect() {
  return <SectionLayout sectionId="connect" header="Let's Build Something Together">
    <>
      <p className="textGray">
        Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
      </p>
      <a href="mailto:ravindra.sisodiya@iiitg.ac.in" className={styles.connectMail}>
        ravindra.sisodiya@iiitg.ac.in
      </a>
    </>
  </SectionLayout>
}