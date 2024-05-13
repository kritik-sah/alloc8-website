import CallToAction from "./home/components/CallToAction";
import Content from "./home/components/Content";
import Hero from "./home/components/Hero";
import Investors from "./home/components/Investors";
import Partners from "./home/components/Partners";
import Roadmap from "./home/components/Roadmap";

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
