import { PostListType } from "../../../@types/posts";
import Post from "./Post";
import classNames from "classnames";

export default function Posts(){
  const posts : PostListType = [
    {
      title: "Coding a simple module bundler 📦",
      href: "https://ravvis.hashnode.dev/coding-a-simple-module-bundler",
      subtitle: "Let's understand how module bundlers work under the hood 🤔"
    },
    {
      title: "How to add a color themes(dark mode) functionality 🌈",
      href: "https://ravvis.hashnode.dev/how-to-add-a-themes-functionality",
      subtitle: "An easy way of implementing light/dark/rainbow theme using CSS and JS\n"
    },
    {
      title: "Working @ Kuvera ✨",
      href: "https://ravvis.hashnode.dev/working-at-kuvera",
      subtitle: "My experience working with Kuvera as a Frontend intern"
    },
  ];

  return <div className="movingUpAnimation">
    <h3 className="textMuted">
      Top {posts.length} posts from my publication - <a href="https://ravvis.hashnode.dev/" className="favLink">Build and Learn ✨</a>
    </h3>
    {
      posts.map((post, index) => <div key={index}><Post {...post}/></div>)
    }
  </div>;
}