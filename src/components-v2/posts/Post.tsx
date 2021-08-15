import Link from "next/link";
import Image from "next/image";
import styles from "./Post.module.css";

export default function Post({ href, title, coverImage } : { href: string, title: string, coverImage: string }){
	return <Link href={href}>
		<a className={styles.post}>
			<div className={styles.image}>
				<figure>
					<Image
						src={coverImage as any}
						alt={title}
						layout="fill"
						objectFit="contain"
					/>
				</figure>
			</div>
			<div>
				<div className={styles.title}>
					{ title }
				</div>
			</div>
		</a>
	</Link>
}