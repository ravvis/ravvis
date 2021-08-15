import Link from "next/link";
import styles from "./Post.module.css";
import Image from "next/image";
import classNames from "classnames";
import {PostType} from "../../../@types/posts";

export default function Post({ href, title, subtitle, coverImage } : PostType){
	return <Link href={href}>
		<a className={styles.post}>
			{/*<div className={styles.image}>*/}
			{/*	<figure>*/}
			{/*		<Image*/}
			{/*			src={coverImage as any}*/}
			{/*			alt={title}*/}
			{/*			layout="fill"*/}
			{/*			objectFit="contain"*/}
			{/*		/>*/}
			{/*	</figure>*/}
			{/*</div>*/}
			<div>
				<div className={styles.title}>
					{ title }
				</div>
				<div>
					<span className={classNames(styles.subtitle, "textMuted")}>{ subtitle }</span>
					<span className={classNames(styles.descriptionReadMore, "favLink", "movingRightAnimation")}>Read post &#8594;</span>
				</div>
			</div>
		</a>
	</Link>
}