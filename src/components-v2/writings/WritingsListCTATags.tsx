import styles from "./WritingsListCTA.module.css";

export default function WritingsListCTATags({ tags } : { tags : string[] }) {
  return <div className={styles.writingListCTATagsWrapper}>
    {
      tags.map((tag, index) => <div className={styles.writingListCTATags}>
        { tag } {index !== tags.length - 1}
      </div>)
    }
  </div>
}