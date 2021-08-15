import useSWR from 'swr';
import { PostListType } from "../../../@types/posts";
import Post from "./Post";

export default function Posts(){
    const { data } = useSWR('/api/posts');
    const posts: PostListType = data ? data.posts : [];

    if(!posts || !posts.length) return null;
    return <div className="movingUpAnimation">
        {
            posts.map((post, index) => <div key={index}><Post {...post}/></div>)
        }
    </div>;
}