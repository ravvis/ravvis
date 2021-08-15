import type { NextApiResponse } from 'next';
import { getPosts } from '../../lib/hashnode';

export default async function handler(_ : any, res : NextApiResponse) {
    const response = await getPosts();
    const posts: any = (await response.json()).data.user.publication.posts;

    return res.status(200).json({ posts : posts.map((post : any )=> ({
        href: `${process.env.HASHNODE_BASEURL}/${post.slug}`,
        title: post.title,
        description: post.brief,
        coverImage: post.coverImage,
    })) })
}