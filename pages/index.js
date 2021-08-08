import About from "../src/components-v2/about/About";
import PageLayout from "../src/components-v2/layouts/PageLayout";
import Projects from "../src/components-v2/projects/Projects";

export default function Index() {
  return <PageLayout>
    <About/>
    <Projects/>
  </PageLayout>
}