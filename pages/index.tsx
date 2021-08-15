import About from "../src/components-v2/about/About";
import PageLayout from "../src/components-v2/layouts/PageLayout";
import Posts from "../src/components-v2/posts/Posts";

export default function Index() {
  return <PageLayout>
    <About/>
    <Posts/>
  </PageLayout>
}