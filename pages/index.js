import About from "../src/components-v2/about/About";
import PageLayout from "../src/components-v2/layouts/PageLayout";
import Projects from "../src/components-v2/projects/Projects";
import Connect from "../src/components-v2/connect/Connect";

export default function Index() {
  return <PageLayout>
    <About/>
    <Projects/>
    <Connect/>
  </PageLayout>
}