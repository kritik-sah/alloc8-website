import CallToAction from "./components/CallToAction";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Investors from "./components/Investors";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <div>
      <Hero />
      <Content />
      <Investors />
      <Roadmap />
      <Partners />
      <CallToAction />
    </div>
  );
}
